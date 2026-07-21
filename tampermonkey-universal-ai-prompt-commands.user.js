// ==UserScript==
// @name         Tampermonkey Universal AI Prompt Commands DE
// @namespace    local.tampermonkey.universal.ai.prompt.commands.de
// @version      1.1.0
// @description  Deutsche Version: ersetzt kurze Befehle D1-D10 durch vorbereitete deutsche KI-Prompts für schnelle Eingaben in KI-Chats
// @author       1777maxim7771
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    /*
        Tampermonkey Universal AI Prompt Commands DE

        Zweck:
        Dieses Script hilft bei der schnellen Arbeit mit KI-Chats.
        Der Benutzer gibt einen kurzen Befehl D1-D10 ein, und das Script ersetzt ihn
        durch einen vollständigen vorbereiteten Prompt auf Deutsch.

        Beispiel:
        D1 -> vollständiger Prompt für eine genaue Übersetzung ins Russische.

        Wichtig:
        Das Script ersetzt nur exakte Befehle. Normaler Text wird nicht verändert.
    */

    const COMMANDS = {
        'D1': `Übersetze den bereitgestellten Text vollständig und genau ins Russische.
Erhalte den Sinn, die Reihenfolge der Informationen, Namen, Daten, Beträge, Dokumentnummern, Organisationsnamen und wichtige Formulierungen.
Wenn der Text offizielle oder juristische Ausdrücke enthält, übersetze sie verständlich, aber ohne den Sinn zu verändern.
Füge keine eigenen Schlussfolgerungen hinzu, kürze den Text nicht und ändere den Inhalt nicht.`,

        'D2': `Fasse den bereitgestellten Text auf Russisch nach Sinn und Kontext zusammen.
Erkläre, worum es im Text geht, wer an wen schreibt oder etwas mitteilt, zu welchem Thema und was der Hauptinhalt ist.
Nenne gesondert Forderungen, Bitten, Entscheidungen, Daten, Fristen, Beträge und wichtige Details.
Schreibe einfach und verständlich, ohne unnötige Erklärungen.`,

        'D3': `Erstelle eine kurze thematische Zusammenfassung des Briefes auf Russisch, streng in einer einzigen Zeile.
Nenne in dieser einen Zeile: von wem der Brief ist, zu welchem Thema, was mitgeteilt oder verlangt wird und welche wichtigen Daten, Fristen, Beträge, Dokumente oder Handlungen erwähnt werden.
Das Ergebnis soll kurz, aber aussagekräftig sein.`,

        'D4': `Übersetze den bereitgestellten Text ins Deutsche auf einfachem und verständlichem Niveau A2-B1.
Formuliere den Text höflich, offiziell und grammatikalisch korrekt.
Erhalte den ursprünglichen Sinn, Daten, Namen, Beträge, Adressen, Organisationsnamen und wichtige Details.
Verwende keine zu komplizierten deutschen Formulierungen.`,

        'D5': `Korrigiere den bereitgestellten russischen Text.
Mache ihn grammatikalisch richtig, verständlich und logisch, aber erhalte meinen ursprünglichen Sinn.
Entferne Fehler, Wiederholungen, unpassende Formulierungen und zu umgangssprachliche Stellen.
Wenn der Text für einen Brief bestimmt ist, mache ihn höflicher und offizieller.
Füge keine Fakten hinzu, die im Ausgangstext nicht vorhanden sind.`,

        'D6': `Schreibe eine kurze, höfliche und offizielle Antwort auf diesen Brief auf Deutsch.
Die Antwort soll einfach sein, Niveau A2-B1.
Berücksichtige den Inhalt des Briefes und antworte sachlich, ohne unnötige Sätze.
Wenn man den Empfang bestätigen, Unterlagen klären, um eine Erklärung bitten oder Informationen mitteilen muss, formuliere das korrekt.
Füge am Ende hinzu: Mit freundlichen Grüßen`,

        'D7': `Erkläre auf Russisch in einfachen Worten, was dieser Text bedeutet.
Analysiere den Sinn nach Kontext: wer schreibt, zu welchem Thema, was verlangt wird, was getan werden muss und welche Fristen, Daten, Beträge, Dokumente oder Bedingungen wichtig sind.
Wenn der Text offiziell ist, erkläre ihn in normaler Alltagssprache.
Nenne gesondert, ob es im Text eine Forderung, Warnung, Bitte, Entscheidung oder nur eine Information gibt.`,

        'D8': `Extrahiere aus dem bereitgestellten Text alle wichtigen Fakten und strukturiere sie auf Russisch.
Nenne getrennt: Personennamen, Organisationen, Adressen, Daten, Fristen, Beträge, Dokumentnummern, Anforderungen, Entscheidungen, Verpflichtungen, erwähnte Dokumente und weitere notwendige Schritte.
Erfinde keine Daten, die im Text nicht stehen.
Wenn eine Information fehlt, schreibe: nicht angegeben.`,

        'D9': `Erstelle auf Russisch eine verständliche Liste der Handlungen, die auf Grundlage dieses Textes ausgeführt werden müssen.
Bestimme, was getan werden muss, welche Dokumente vorbereitet werden sollen, wem geantwortet werden muss, wohin man sich wenden soll, welche Fristen einzuhalten sind und worauf man achten muss.
Teile die Handlungen nach Priorität ein: dringend, wichtig, später möglich.
Wenn aus dem Text nicht klar ist, was genau zu tun ist, nenne die Fragen, die geklärt werden müssen.`,

        'D10': `Erstelle auf Grundlage des bereitgestellten Textes einen höflichen offiziellen Brief auf Deutsch.
Der Brief soll einfach, verständlich und korrekt sein, Niveau A2-B1.
Erhalte alle wichtigen Fakten: Namen, Daten, Beträge, Adressen, Organisationsnamen, Dokumentnummern und Umstände.
Struktur des Briefes: Anrede, kurze Erklärung der Situation, Hauptbitte oder Mitteilung, falls nötig Bitte um Bestätigung oder Erklärung, Abschluss.
Füge am Ende hinzu: Mit freundlichen Grüßen`
    };

    const EDITABLE_SELECTORS = [
        'textarea',
        'input[type="text"]',
        'input[type="search"]',
        '[contenteditable="true"]',
        '[contenteditable="plaintext-only"]',
        '[role="textbox"]'
    ];

    function isEditableElement(element) {
        if (!element || !element.matches) return false;
        if (element.disabled || element.readOnly) return false;

        const tagName = element.tagName ? element.tagName.toLowerCase() : '';
        const inputType = (element.getAttribute('type') || '').toLowerCase();

        if (tagName === 'input') {
            const allowedInputTypes = ['text', 'search'];
            if (!allowedInputTypes.includes(inputType)) return false;
        }

        return EDITABLE_SELECTORS.some(selector => element.matches(selector));
    }

    function findEditableElement(target) {
        if (!target) return null;
        if (isEditableElement(target)) return target;

        if (target.closest) {
            const element = target.closest(EDITABLE_SELECTORS.join(','));
            if (isEditableElement(element)) return element;
        }

        return null;
    }

    function getText(element) {
        if (!element) return '';
        const tagName = element.tagName ? element.tagName.toLowerCase() : '';
        if (tagName === 'textarea' || tagName === 'input') return element.value || '';
        return element.innerText || element.textContent || '';
    }

    function normalizeCommand(text) {
        return text.trim().replace(/\s+/g, '').toUpperCase();
    }

    function setCursorToEnd(element) {
        element.focus();
        const tagName = element.tagName ? element.tagName.toLowerCase() : '';

        if (tagName === 'textarea' || tagName === 'input') {
            const length = element.value.length;
            element.setSelectionRange(length, length);
            return;
        }

        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(element);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    function dispatchInputEvents(element, text) {
        try {
            element.dispatchEvent(new InputEvent('input', {
                bubbles: true,
                cancelable: true,
                inputType: 'insertReplacementText',
                data: text
            }));
        } catch (error) {
            element.dispatchEvent(new Event('input', { bubbles: true }));
        }

        element.dispatchEvent(new Event('change', { bubbles: true }));
    }

    function replaceText(element, newText) {
        if (!element) return;
        const tagName = element.tagName ? element.tagName.toLowerCase() : '';
        element.focus();

        if (tagName === 'textarea' || tagName === 'input') {
            element.value = newText;
            setCursorToEnd(element);
            dispatchInputEvents(element, newText);
            return;
        }

        try {
            const range = document.createRange();
            const selection = window.getSelection();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('insertText', false, newText);
        } catch (error) {
            element.textContent = newText;
        }

        setCursorToEnd(element);
        dispatchInputEvents(element, newText);
    }

    function showNotification(message) {
        const oldBox = document.getElementById('tampermonkey-universal-ai-prompt-commands-notification');
        if (oldBox) oldBox.remove();

        const box = document.createElement('div');
        box.id = 'tampermonkey-universal-ai-prompt-commands-notification';
        box.textContent = message;
        box.style.position = 'fixed';
        box.style.right = '20px';
        box.style.bottom = '20px';
        box.style.zIndex = '999999';
        box.style.background = '#111';
        box.style.color = '#fff';
        box.style.padding = '12px 18px';
        box.style.borderRadius = '10px';
        box.style.fontSize = '14px';
        box.style.fontFamily = 'Arial, sans-serif';
        box.style.boxShadow = '0 4px 12px rgba(0,0,0,0.35)';
        box.style.maxWidth = '420px';
        box.style.lineHeight = '1.4';
        document.body.appendChild(box);
        setTimeout(() => box.remove(), 2200);
    }

    function checkAndReplace(target) {
        const editable = findEditableElement(target);
        if (!editable) return;

        const currentText = getText(editable);
        const command = normalizeCommand(currentText);

        if (!Object.prototype.hasOwnProperty.call(COMMANDS, command)) return;

        replaceText(editable, COMMANDS[command]);
        showNotification(`Befehl ${command} wurde durch einen fertigen Prompt ersetzt`);
    }

    document.addEventListener('input', event => setTimeout(() => checkAndReplace(event.target), 20), true);
    document.addEventListener('keyup', event => setTimeout(() => checkAndReplace(event.target), 20), true);
    document.addEventListener('paste', event => setTimeout(() => checkAndReplace(event.target), 50), true);
})();