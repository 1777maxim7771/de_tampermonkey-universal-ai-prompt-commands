# Tampermonkey Universal AI Prompt Commands DE

**Tampermonkey Universal AI Prompt Commands DE** ist ein Benutzerscript für die Browser-Erweiterung **Tampermonkey**. Es hilft dabei, schneller mit verschiedenen KI-Chats zu arbeiten.

Die Hauptaufgabe des Scripts ist einfach: kurze Befehle wie `R1`, `R3`, `D1` oder `D10` werden automatisch durch vorbereitete lange KI-Prompts ersetzt. Dadurch muss man denselben langen Prompt nicht jedes Mal manuell in ChatGPT, Gemini, Claude, Copilot oder einem anderen KI-Chat schreiben.

---

## Wofür ist dieses Script gedacht?

Das Script ist für die schnelle Eingabe vorbereiteter Prompts in KI-Chats gedacht.

Bei der Arbeit mit künstlicher Intelligenz wiederholen sich oft die gleichen Aufgaben:

- einen Text ins Russische übersetzen;
- einen Text in einfaches Deutsch auf Niveau A2-B1 übersetzen;
- einen Brief kurz zusammenfassen;
- ein Dokument zusammenfassen;
- einen offiziellen Text einfach erklären;
- Daten, Beträge, Namen, Organisationen und Forderungen herausziehen;
- eine Liste notwendiger Schritte erstellen;
- eine offizielle Antwort auf Deutsch vorbereiten.

Dieses Script beschleunigt solche wiederholten Arbeiten. Der Benutzer gibt nur einen kurzen Befehl ein, und das Script ersetzt ihn automatisch durch den vollständigen vorbereiteten Prompt.

---

## Wie funktioniert das Script?

Das Script überwacht Eingabefelder auf Webseiten. Wenn der Benutzer einen exakten Befehl eingibt, zum Beispiel:

```text
R1
```

wird dieser Befehl automatisch durch einen vollständigen Prompt für eine genaue Übersetzung ins Russische ersetzt.

Ein weiteres Beispiel:

```text
R3
```

wird durch einen Prompt für eine kurze thematische Zusammenfassung eines Briefes in einer einzigen Zeile ersetzt.

Noch ein Beispiel:

```text
R8
```

wird durch einen Prompt ersetzt, der wichtige Fakten aus einem Text extrahiert: Daten, Fristen, Beträge, Namen, Organisationen, Dokumente und Forderungen.

Der Befehl:

```text
D4
```

wird durch eine deutsche Prompt-Formulierung für die Übersetzung eines Textes in einfaches Deutsch auf Niveau A2-B1 ersetzt.

---

## Beispiele für die Nutzung

### Beispiel 1 — Übersetzung ins Russische

Der Benutzer schreibt im KI-Chat:

```text
R1
```

Das Script ersetzt dies durch den vollständigen Prompt:

```text
Сделай полный и точный перевод предоставленного текста на русский язык...
```

Danach kann der Text eines Briefes, Dokuments oder einer Nachricht eingefügt werden.

---

### Beispiel 2 — Kurze Beschreibung eines Briefes

Der Benutzer schreibt:

```text
R3
```

Das Script fügt einen Prompt ein, der die KI bittet, eine kurze thematische Zusammenfassung des Briefes auf Russisch in genau einer Zeile zu erstellen.

Das ist praktisch, wenn man schnell verstehen möchte:

- von wem der Brief kommt;
- worum es geht;
- was verlangt oder mitgeteilt wird;
- welche Daten, Fristen, Beträge oder Dokumente wichtig sind.

---

### Beispiel 3 — Liste der notwendigen Schritte

Der Benutzer schreibt:

```text
R9
```

Das Script fügt einen Prompt ein, der die KI bittet, eine verständliche Liste der notwendigen Handlungen zu erstellen: was getan werden muss, wem geantwortet werden soll, welche Dokumente vorbereitet werden müssen und welche Fristen wichtig sind.

---

## Wo kann man das Script verwenden?

Das Script ist vor allem für KI-Chats gedacht, zum Beispiel:

- ChatGPT;
- Google Gemini;
- Claude;
- Microsoft Copilot;
- andere Webseiten mit Texteingabefeldern.

Das Script ist universell. Es kann auf verschiedenen Webseiten funktionieren, auf denen es normale Eingabefelder, `textarea`, `input` oder editierbare Chatfelder gibt.

In der aktuellen Version steht im Script:

```javascript
// @match        *://*/*
```

Das bedeutet, dass Tampermonkey das Script auf verschiedenen Webseiten starten kann. Gleichzeitig ersetzt das Script nur dann Text, wenn im Eingabefeld exakt ein Befehl steht, zum Beispiel `R1`, `R3`, `D1` oder `D10`. Normaler Text wird nicht verändert.

---

## Was muss vor der Installation installiert sein?

Vor der Installation dieses Scripts muss im Browser die Erweiterung **Tampermonkey** installiert sein.

Tampermonkey ist eine Browser-Erweiterung, mit der man Benutzerscripte im Format `.user.js` installieren und ausführen kann.

Zuerst muss Tampermonkey im Browser installiert werden, zum Beispiel in:

- Google Chrome;
- Microsoft Edge;
- Firefox;
- einem anderen Browser, der Tampermonkey unterstützt.

Erst danach kann dieses Script aus dem GitHub-Repository installiert werden.

---

## Schnelle Installation

### Methode 1 — Installation über den Raw-Link

Das ist die schnellste Installationsmethode.

1. Installieren Sie zuerst die Erweiterung **Tampermonkey** im Browser.
2. Öffnen Sie den direkten Raw-Link zur Script-Datei:

```text
https://raw.githubusercontent.com/1777maxim7771/de_tampermonkey-universal-ai-prompt-commands/main/tampermonkey-universal-ai-prompt-commands.user.js
```

3. Tampermonkey sollte automatisch das Installationsfenster öffnen.
4. Klicken Sie auf **Install / Installieren**.
5. Öffnen Sie danach einen KI-Chat oder eine andere Webseite mit Eingabefeld.
6. Geben Sie zum Testen ein:

```text
R1
```

7. Wenn das Script korrekt installiert ist, wird `R1` automatisch durch einen vollständigen Prompt ersetzt.

---

### Methode 2 — Installation über GitHub

1. Öffnen Sie dieses Repository:

```text
https://github.com/1777maxim7771/de_tampermonkey-universal-ai-prompt-commands
```

2. Öffnen Sie die Script-Datei:

```text
tampermonkey-universal-ai-prompt-commands.user.js
```

3. Klicken Sie auf **Raw**.
4. Tampermonkey sollte die `.user.js`-Datei erkennen und das Installationsfenster öffnen.
5. Klicken Sie auf **Install / Installieren**.

---

### Methode 3 — Import per URL in Tampermonkey

Wenn nach dem Klick auf **Raw** kein Installationsfenster erscheint:

1. Öffnen Sie **Tampermonkey**.
2. Gehen Sie zu **Dashboard / Übersicht**.
3. Öffnen Sie die Registerkarte **Utilities / Dienstprogramme**.
4. Suchen Sie das Feld **Import from URL / Import per URL**.
5. Fügen Sie diesen Raw-Link ein:

```text
https://raw.githubusercontent.com/1777maxim7771/de_tampermonkey-universal-ai-prompt-commands/main/tampermonkey-universal-ai-prompt-commands.user.js
```

6. Klicken Sie auf Importieren oder Installieren.
7. Bestätigen Sie die Installation des Scripts.

---

### Methode 4 — Manuelle Installation

Wenn die automatische Installation nicht funktioniert, kann das Script manuell installiert werden.

1. Öffnen Sie **Tampermonkey**.
2. Gehen Sie zu **Dashboard / Übersicht**.
3. Klicken Sie auf **Create a new script / Neues Script erstellen**.
4. Löschen Sie die Standardvorlage.
5. Öffnen Sie in diesem Repository die Datei:

```text
tampermonkey-universal-ai-prompt-commands.user.js
```

6. Kopieren Sie den gesamten Code des Scripts.
7. Fügen Sie den Code in den Tampermonkey-Editor ein.
8. Speichern Sie das Script über **File → Save** oder mit **Ctrl + S**.

---

## Warum erkennt Tampermonkey dieses Script?

Tampermonkey erkennt Benutzerscripte an der speziellen Kopfzeile am Anfang der Datei:

```javascript
// ==UserScript==
// @name         Tampermonkey Universal AI Prompt Commands DE
// @match        *://*/*
// ==/UserScript==
```

Außerdem hat die Datei die richtige Endung:

```text
.user.js
```

Darum versteht Tampermonkey beim Öffnen der Raw-Datei, dass es sich um ein Benutzerscript handelt, und bietet die Installation an.

Wichtig: Das Script wird **nicht in GitHub** und **nicht in eine bestimmte Webseite** installiert. Es wird in der Browser-Erweiterung **Tampermonkey** installiert. GitHub dient nur als Speicherort für die Script-Datei.

---

## Befehlsgruppen

### Russische Befehle `R1–R10`

- `R1` — genaue Übersetzung eines Textes ins Russische.
- `R2` — Zusammenfassung eines Textes auf Russisch nach Sinn und Kontext.
- `R3` — kurze thematische Zusammenfassung eines Briefes auf Russisch in genau einer Zeile.
- `R4` — Übersetzung eines Textes in einfaches Deutsch auf Niveau A2-B1.
- `R5` — Korrektur eines russischen Textes mit Erhaltung des Sinns.
- `R6` — kurze offizielle Antwort auf einen Brief auf Deutsch.
- `R7` — einfache Erklärung eines Textes auf Russisch.
- `R8` — Extraktion wichtiger Fakten: Daten, Beträge, Namen, Organisationen, Forderungen, Dokumente.
- `R9` — Liste notwendiger Handlungen anhand eines Textes.
- `R10` — offizieller Brief auf Deutsch auf Grundlage des Ausgangstextes.

### Deutsche Befehle `D1–D10`

- `D1` — deutsche Prompt-Formulierung für die Übersetzung eines Textes ins Russische.
- `D2` — deutsche Prompt-Formulierung für eine russische Zusammenfassung.
- `D3` — deutsche Prompt-Formulierung für eine kurze Briefzusammenfassung in einer Zeile.
- `D4` — deutsche Prompt-Formulierung für die Übersetzung in einfaches Deutsch A2-B1.
- `D5` — deutsche Prompt-Formulierung für die Korrektur eines russischen Textes.
- `D6` — deutsche Prompt-Formulierung für eine offizielle Antwort auf Deutsch.
- `D7` — deutsche Prompt-Formulierung für eine einfache Erklärung auf Russisch.
- `D8` — deutsche Prompt-Formulierung für die Extraktion wichtiger Fakten.
- `D9` — deutsche Prompt-Formulierung für eine Liste notwendiger Handlungen.
- `D10` — deutsche Prompt-Formulierung für einen offiziellen Brief auf Deutsch.

---

## Prüfung nach der Installation

1. Öffnen Sie einen KI-Chat oder eine Webseite mit Eingabefeld.
2. Klicken Sie in das Eingabefeld.
3. Geben Sie ein:

```text
R1
```

4. Wenn das Script richtig installiert ist, wird `R1` automatisch durch einen vollständigen Prompt ersetzt.

Weitere Testbefehle:

```text
R3
D1
D4
R9
```

---

## Mögliche Probleme

### Das Installationsfenster öffnet sich nach Raw nicht

Öffnen Sie Tampermonkey manuell und verwenden Sie die Methode **Import from URL / Import per URL**.

### Der Befehl wird nicht ersetzt

Prüfen Sie:

- ob das Script in Tampermonkey aktiviert ist;
- ob Tampermonkey auf dieser Webseite laufen darf;
- ob die Seite nach der Installation neu geladen wurde;
- ob der Befehl exakt eingegeben wurde, zum Beispiel `R1`, ohne zusätzlichen Text;
- ob sich der Cursor wirklich in einem Eingabefeld befindet.

### Das Script startet auf allen Webseiten

Das ist für die universelle Nutzung so eingestellt. Im Script steht:

```javascript
// @match        *://*/*
```

Wenn das Script nur auf einer bestimmten Webseite laufen soll, kann diese Zeile geändert werden, zum Beispiel:

```javascript
// @match        https://gemini.google.com/*
```

oder:

```javascript
// @match        https://chatgpt.com/*
```

---

## Script-Datei

```text
tampermonkey-universal-ai-prompt-commands.user.js
```

---

## Zweck des Projekts

Das Projekt wurde erstellt, um wiederholte Arbeit mit KI-Chats zu beschleunigen. Das Script hilft, vorbereitete Prompts schnell einzufügen — für Übersetzungen, Zusammenfassungen, Briefanalysen, offizielle Antworten und Dokumentenbearbeitung.
