# Tampermonkey Universal AI Prompt Commands DE

**Tampermonkey Universal AI Prompt Commands DE** ist die deutsche Lokalisierung eines Tampermonkey-Userscripts für die schnelle Arbeit mit KI-Chats.

Das Script ersetzt universelle kurze Trigger `Q1–Q10` durch vorbereitete KI-Prompts. Diese Trigger sind nicht an eine Sprache gebunden: Benutzer können `Q1`, `Q2`, `Q3` und die anderen Trigger durch eigene Wörter, Befehle oder Formulierungen ersetzen.

---

## Zweck des Scripts

Das Script dient zur schnellen Eingabe vorbereiteter Prompts in ChatGPT, Gemini, Claude, Copilot und anderen KI-Chats. Statt denselben langen Prompt immer wieder manuell zu schreiben, gibt man nur einen kurzen Trigger wie `Q1` ein und das Script fügt automatisch den vollständigen Prompt ein.

---

## Wie es funktioniert

Das Script überwacht das aktive Eingabefeld auf einer Webseite. Wenn der gesamte Inhalt des Feldes exakt einem der Trigger `Q1–Q10` entspricht, wird dieser Inhalt durch den vorbereiteten Prompt ersetzt.

Beispiel:

```text
Q1
```

wird durch einen Prompt für eine genaue Übersetzung ins Deutsche ersetzt.

```text
Q8
```

wird durch einen Prompt zum Extrahieren wichtiger Fakten aus einem Text ersetzt.

Normaler Text wird nicht verändert. Zum Beispiel wird `Q1 irgendein Text` nicht ersetzt, weil es keine exakte Übereinstimmung mit einem Trigger ist.

---

## Eigene Trigger einstellen

Die Trigger können direkt im Code im Objekt `COMMANDS` geändert werden.

Zum Beispiel:

```javascript
'Q1': `...`
```

kann ersetzt werden durch:

```javascript
'UEBERSETZEN': `...`
```

oder durch ein anderes Wort. `Q1–Q10` sind nur die universellen Standard-Trigger.

---

## Wo das Script verwendet werden kann

Das Script ist vor allem für KI-Chats gedacht:

- ChatGPT;
- Google Gemini;
- Claude;
- Microsoft Copilot;
- andere Webseiten mit Texteingabefeldern.

Im Script steht:

```javascript
// @match        *://*/*
```

Das bedeutet, dass Tampermonkey das Script auf verschiedenen Webseiten ausführen kann. Die Ersetzung erfolgt nur bei einer exakten Übereinstimmung mit einem Trigger.

---

## Voraussetzung vor der Installation

Vor der Installation muss die Browser-Erweiterung **Tampermonkey** installiert sein.

Das Script wird nicht in GitHub und nicht in eine bestimmte Webseite installiert. Es wird in die Erweiterung **Tampermonkey** installiert. GitHub dient nur als Speicherort für die `.user.js`-Datei.

---

## Schnelle Installation über Raw-Link

1. Installieren Sie **Tampermonkey** im Browser.
2. Öffnen Sie den Raw-Link:

```text
https://raw.githubusercontent.com/1777maxim7771/de_tampermonkey-universal-ai-prompt-commands/main/tampermonkey-universal-ai-prompt-commands.user.js
```

3. Tampermonkey sollte das Installationsfenster öffnen.
4. Klicken Sie auf **Installieren / Install**.
5. Öffnen Sie einen KI-Chat und geben Sie `Q1` ein.

---

## Installation über GitHub

1. Öffnen Sie dieses Repository.
2. Öffnen Sie die Datei:

```text
tampermonkey-universal-ai-prompt-commands.user.js
```

3. Klicken Sie auf **Raw**.
4. Bestätigen Sie die Installation in Tampermonkey.

---

## Import per URL in Tampermonkey

Wenn kein Installationsfenster erscheint:

1. Öffnen Sie Tampermonkey.
2. Gehen Sie zu **Dashboard**.
3. Öffnen Sie **Utilities**.
4. Suchen Sie **Import from URL**.
5. Fügen Sie den Raw-Link aus diesem README ein.
6. Bestätigen Sie die Installation.

---

## Manuelle Installation

1. Öffnen Sie Tampermonkey.
2. Klicken Sie auf **Create a new script**.
3. Löschen Sie die Standardvorlage.
4. Kopieren Sie den Code aus `tampermonkey-universal-ai-prompt-commands.user.js`.
5. Fügen Sie ihn in den Tampermonkey-Editor ein.
6. Speichern Sie mit **Ctrl + S**.

---

## Warum Tampermonkey das Script erkennt

Tampermonkey erkennt das Script an der Userscript-Kopfzeile:

```javascript
// ==UserScript==
// @name         Tampermonkey Universal AI Prompt Commands DE
// @match        *://*/*
// ==/UserScript==
```

und an der Dateiendung:

```text
.user.js
```

---

## Standardbefehle

- `Q1` — Text ins Deutsche übersetzen.
- `Q2` — Text zusammenfassen.
- `Q3` — kurze Briefzusammenfassung in einer Zeile.
- `Q4` — Übersetzung in einfaches Deutsch A2-B1.
- `Q5` — deutschen Text korrigieren.
- `Q6` — kurze offizielle Antwort schreiben.
- `Q7` — Text einfach erklären.
- `Q8` — wichtige Fakten extrahieren.
- `Q9` — Liste notwendiger Handlungen erstellen.
- `Q10` — offizielles Schreiben auf Deutsch erstellen.

---

## Prüfung nach der Installation

Öffnen Sie einen KI-Chat und geben Sie ein:

```text
Q1
```

Wenn das Script korrekt installiert ist, wird `Q1` durch den vollständigen Prompt ersetzt.

---

## Mögliche Probleme

Wenn der Trigger nicht ersetzt wird, prüfen Sie:

- ob das Script in Tampermonkey aktiviert ist;
- ob die Seite nach der Installation neu geladen wurde;
- ob der Trigger exakt eingegeben wurde, zum Beispiel `Q1`, ohne zusätzlichen Text;
- ob Tampermonkey auf dieser Webseite ausgeführt werden darf;
- ob der Cursor in einem editierbaren Eingabefeld steht.

---

## Projektziel

Das Projekt beschleunigt wiederholte Arbeit mit KI-Chats. Es ermöglicht das schnelle Einfügen vorbereiteter Prompts für Übersetzung, Zusammenfassung, Briefanalyse, offizielle Antworten und Dokumentbearbeitung.