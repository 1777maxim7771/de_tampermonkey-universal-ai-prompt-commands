// ==UserScript==
// @name         Tampermonkey Universal AI Prompt Commands DE
// @namespace    local.tampermonkey.universal.ai.prompt.commands.de
// @version      1.1.0
// @description  Deutsche Version: ersetzt universelle Trigger Q1-Q10 durch fertige KI-Prompts für schnelle Eingaben in KI-Chats
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
        Dieses Script hilft bei der schnellen Arbeit mit KI-Chats wie ChatGPT, Gemini, Claude, Copilot und anderen Webseiten mit Texteingabefeldern.
        Es ersetzt die universellen kurzen Trigger Q1-Q10 durch vorbereitete lange KI-Prompts.

        Wichtig:
        Die Trigger Q1-Q10 sind nicht an eine Sprache gebunden. Sie können durch eigene Befehle, Wörter oder Formulierungen ersetzt werden.
        Die Ersetzung erfolgt nur, wenn der gesamte Inhalt des Eingabefeldes exakt dem Trigger entspricht.
    */

    const COMMANDS = {
        'Q1': `Übersetze den bereitgestellten Text vollständig und genau ins Deutsche.
Erhalte Sinn, Reihenfolge der Informationen, Namen, Daten, Beträge, Dokumentnummern, Organisationsnamen und wichtige Formulierungen.
Wenn der Text offizielle oder rechtliche Ausdrücke enthält, übersetze sie verständlich, aber ohne den Sinn zu verändern.
Füge keine eigenen Schlussfolgerungen hinzu, kürze den Text nicht und ändere den Inhalt nicht.`,
        'Q2': `Fasse den bereitgestellten Text auf Deutsch nach Sinn und Kontext zusammen.
Erkläre, worum es geht, wer wem schreibt oder etwas mitteilt, zu welchem Thema, was der Hauptinhalt ist und welche Forderungen, Bitten, Entscheidungen, Daten, Fristen, Beträge oder wichtigen Details genannt werden.
Schreibe klar und einfach ohne unnötige Erklärungen.`,
        'Q3': `Erstelle eine kurze thematische Zusammenfassung des Briefes auf Deutsch in genau einer Zeile.
Nenne in dieser einen Zeile: von wem der Brief ist, zu welchem Thema, was mitgeteilt oder verlangt wird und welche wichtigen Daten, Fristen, Beträge, Dokumente oder Handlungen erwähnt werden.`,
        'Q4': `Übersetze den bereitgestellten Text in einfaches und verständliches Deutsch auf dem Niveau A2-B1.
Formuliere höflich, offiziell und grammatikalisch korrekt.
Erhalte den ursprünglichen Sinn, Daten, Namen, Beträge, Adressen, Organisationsnamen und wichtige Details.
Verwende keine zu komplizierten deutschen Formulierungen.`,
        'Q5': `Korrigiere den bereitgestellten deutschen Text.
Mache ihn grammatikalisch korrekt, verständlich und logisch, aber erhalte den ursprünglichen Sinn.
Entferne Fehler, Wiederholungen, unpassende Formulierungen und zu umgangssprachliche Stellen.
Wenn der Text für einen Brief bestimmt ist, formuliere ihn höflicher und offizieller.
Füge keine Fakten hinzu, die im Ausgangstext nicht vorhanden sind.`,
        'Q6': `Schreibe eine kurze, höfliche und offizielle Antwort auf diesen Brief auf Deutsch.
Die Antwort soll klar und sachlich sein, ohne unnötige Formulierungen.
Wenn der Empfang bestätigt, Unterlagen geklärt, eine Erklärung erbeten oder Informationen mitgeteilt werden müssen, formuliere das korrekt.
Füge am Ende eine höfliche Schlussformel hinzu.`,
        'Q7': `Erkläre auf Deutsch in einfachen Worten, was dieser Text bedeutet.
Analysiere den Sinn im Kontext: wer schreibt, worum es geht, was verlangt wird, was getan werden muss und welche Fristen, Daten, Beträge, Dokumente oder Bedingungen wichtig sind.
Nenne separat, ob der Text eine Forderung, Warnung, Bitte, Entscheidung oder nur Information enthält.`,
        'Q8': `Extrahiere alle wichtigen Fakten aus dem bereitgestellten Text und strukturiere sie auf Deutsch.
Nenne getrennt: Personennamen, Organisationen, Adressen, Daten, Fristen, Beträge, Dokumentnummern, Anforderungen, Entscheidungen, Verpflichtungen, erwähnte Dokumente und nächste Schritte.
Erfinde keine Informationen. Wenn etwas fehlt, schreibe: nicht angegeben.`,
        'Q9': `Erstelle auf Deutsch eine klare Liste der Handlungen, die auf Grundlage dieses Textes erledigt werden müssen.
Bestimme, was getan werden muss, welche Dokumente vorbereitet werden sollen, wem geantwortet werden muss, wohin man sich wenden soll, welche Fristen einzuhalten sind und worauf man achten muss.
Teile die Handlungen nach Priorität ein: dringend, wichtig, später möglich.`,
        'Q10': `Erstelle auf Grundlage des bereitgestellten Textes einen höflichen offiziellen Brief auf Deutsch.
Der Brief soll einfach, verständlich und korrekt sein, Niveau A2-B1.
Erhalte alle wichtigen Fakten: Namen, Daten, Beträge, Adressen, Organisationsnamen, Dokumentnummern und Umstände.
Struktur: Anrede, kurze Erklärung der Situation, Hauptbitte oder Mitteilung, falls nötig Bitte um Bestätigung oder Klärung, Abschluss.
Füge am Ende hinzu: Mit freundlichen Grüßen`
    };

    const EDITABLE_SELECTORS = ['textarea', 'input[type="text"]', 'input[type="search"]', '[contenteditable="true"]', '[contenteditable="plaintext-only"]', '[role="textbox"]'];

    function isEditableElement(element) {
        if (!element || !element.matches) return false;
        if (element.disabled || element.readOnly) return false;
        const tagName = element.tagName ? element.tagName.toLowerCase() : '';
        const inputType = (element.getAttribute('type') || '').toLowerCase();
        if (tagName === 'input' && !['text', 'search'].includes(inputType)) return false;
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
        const tagName = element.tagName ? element.tagName.toLowerCase() : '';
        if (tagName === 'textarea' || tagName === 'input') return element.value || '';
        return element.innerText || element.textContent || '';
    }

    function normalizeCommand(text) { return String(text || '').trim().replace(/\s+/g, '').toUpperCase(); }

    function setCursorToEnd(element) {
        element.focus();
        const tagName = element.tagName ? element.tagName.toLowerCase() : '';
        if (tagName === 'textarea' || tagName === 'input') { const length = element.value.length; element.setSelectionRange(length, length); return; }
        const range = document.createRange(); const selection = window.getSelection();
        range.selectNodeContents(element); range.collapse(false); selection.removeAllRanges(); selection.addRange(range);
    }

    function dispatchInputEvents(element, text) {
        try { element.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: true, inputType: 'insertReplacementText', data: text })); }
        catch (error) { element.dispatchEvent(new Event('input', { bubbles: true })); }
        element.dispatchEvent(new Event('change', { bubbles: true }));
    }

    function replaceText(element, newText) {
        const tagName = element.tagName ? element.tagName.toLowerCase() : '';
        element.focus();
        if (tagName === 'textarea' || tagName === 'input') { element.value = newText; setCursorToEnd(element); dispatchInputEvents(element, newText); return; }
        try { const range = document.createRange(); const selection = window.getSelection(); range.selectNodeContents(element); selection.removeAllRanges(); selection.addRange(range); document.execCommand('insertText', false, newText); }
        catch (error) { element.textContent = newText; }
        setCursorToEnd(element); dispatchInputEvents(element, newText);
    }

    function showNotification(message) {
        const oldBox = document.getElementById('tampermonkey-universal-ai-prompt-commands-notification'); if (oldBox) oldBox.remove();
        const box = document.createElement('div'); box.id = 'tampermonkey-universal-ai-prompt-commands-notification'; box.textContent = message;
        box.style.position = 'fixed'; box.style.right = '20px'; box.style.bottom = '20px'; box.style.zIndex = '999999'; box.style.background = '#111'; box.style.color = '#fff'; box.style.padding = '12px 18px'; box.style.borderRadius = '10px'; box.style.fontSize = '14px'; box.style.fontFamily = 'Arial, sans-serif'; box.style.boxShadow = '0 4px 12px rgba(0,0,0,0.35)';
        document.body.appendChild(box); setTimeout(() => box.remove(), 2200);
    }

    function checkAndReplace(target) {
        const editable = findEditableElement(target); if (!editable) return;
        const command = normalizeCommand(getText(editable)); if (!Object.prototype.hasOwnProperty.call(COMMANDS, command)) return;
        replaceText(editable, COMMANDS[command]); showNotification(`Trigger ${command} wurde durch einen fertigen KI-Prompt ersetzt`);
    }

    document.addEventListener('input', event => setTimeout(() => checkAndReplace(event.target), 20), true);
    document.addEventListener('keyup', event => setTimeout(() => checkAndReplace(event.target), 20), true);
    document.addEventListener('paste', event => setTimeout(() => checkAndReplace(event.target), 50), true);
})();