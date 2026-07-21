# Tampermonkey Universal AI Prompt Commands DE

**Tampermonkey Universal AI Prompt Commands DE** ist die deutsche Version eines Benutzerscripts für die Browser-Erweiterung **Tampermonkey**. Das Script hilft dabei, schneller mit KI-Chats wie ChatGPT, Gemini, Claude, Copilot und anderen Webseiten mit Texteingabefeld zu arbeiten.

Die Hauptaufgabe des Scripts ist es, kurze Befehle `D1–D10` automatisch durch vorbereitete lange KI-Prompts auf Deutsch zu ersetzen. Dadurch muss man wiederkehrende lange Eingaben nicht jedes Mal neu schreiben.

---

## Wofür ist dieses Script gedacht?

Das Script ist für schnelle Prompt-Eingaben in KI-Chats gedacht.

Es hilft besonders bei wiederkehrenden Aufgaben:

- Texte ins Russische übersetzen;
- Texte in einfaches Deutsch auf Niveau A2-B1 übersetzen;
- Briefe kurz zusammenfassen;
- Dokumente und Nachrichten zusammenfassen;
- offizielle Texte einfach erklären;
- Daten, Beträge, Namen, Organisationen, Fristen und Forderungen herausziehen;
- eine Liste notwendiger Schritte erstellen;
- offizielle Antworten oder Briefe vorbereiten.

---

## Wie funktioniert das Script?

Der Benutzer schreibt einen exakten Befehl in das Eingabefeld eines KI-Chats.

Beispiel:

```text
D1
```

Das Script ersetzt diesen Befehl automatisch durch einen vollständigen deutschen Prompt für eine genaue Übersetzung ins Russische.

Weitere Beispiele:

```text
D3
```

wird durch einen Prompt für eine kurze thematische Zusammenfassung eines Briefes ersetzt.

```text
D8
```

wird durch einen Prompt zum Herausziehen wichtiger Fakten aus einem Text ersetzt.

```text
D9
```

wird durch einen Prompt für eine Liste notwendiger Handlungen ersetzt.

---

## Befehle der deutschen Version

- `D1` — genaue Übersetzung eines Textes ins Russische.
- `D2` — Zusammenfassung eines Textes auf Russisch.
- `D3` — kurze thematische Briefzusammenfassung in einer Zeile.
- `D4` — Übersetzung eines Textes in einfaches Deutsch A2-B1.
- `D5` — Korrektur eines russischen Textes mit Erhaltung des Sinns.
- `D6` — kurze offizielle Antwort auf Deutsch.
- `D7` — einfache Erklärung eines Textes auf Russisch.
- `D8` — Extraktion wichtiger Fakten aus einem Text.
- `D9` — Liste notwendiger Handlungen auf Grundlage eines Textes.
- `D10` — offizieller Brief auf Deutsch auf Grundlage eines Ausgangstextes.

In dieser deutschen Version sind Kommentare, Beschreibung, Benachrichtigung und Prompts auf Deutsch formuliert.

---

## Was muss vor der Installation installiert sein?

Vor der Installation dieses Scripts muss im Browser die Erweiterung **Tampermonkey** installiert sein.

Tampermonkey ist eine Browser-Erweiterung zum Installieren und Ausführen von Benutzerscripten im Format `.user.js`.

---

## Schnelle Installation

1. Installieren Sie **Tampermonkey** im Browser.
2. Öffnen Sie den direkten Raw-Link zur Script-Datei:

```text
https://raw.githubusercontent.com/1777maxim7771/de_tampermonkey-universal-ai-prompt-commands/main/tampermonkey-universal-ai-prompt-commands.user.js
```

3. Tampermonkey sollte automatisch das Installationsfenster öffnen.
4. Klicken Sie auf **Install / Installieren**.
5. Öffnen Sie einen KI-Chat und geben Sie ein:

```text
D1
```

Wenn der Befehl durch einen langen Prompt ersetzt wird, ist das Script korrekt installiert.

---

## Installation über GitHub

1. Öffnen Sie dieses Repository.
2. Öffnen Sie die Datei:

```text
tampermonkey-universal-ai-prompt-commands.user.js
```

3. Klicken Sie auf **Raw**.
4. Tampermonkey sollte die `.user.js`-Datei erkennen und die Installation anbieten.
5. Klicken Sie auf **Install / Installieren**.

---

## Wenn Raw nicht funktioniert

Öffnen Sie Tampermonkey manuell:

```text
Tampermonkey → Dashboard → Utilities → Import from URL
```

Fügen Sie den Raw-Link ein:

```text
https://raw.githubusercontent.com/1777maxim7771/de_tampermonkey-universal-ai-prompt-commands/main/tampermonkey-universal-ai-prompt-commands.user.js
```

---

## Manuelle Installation

1. Öffnen Sie Tampermonkey.
2. Klicken Sie auf **Create a new script / Neues Script erstellen**.
3. Löschen Sie die Standardvorlage.
4. Kopieren Sie den gesamten Code aus `tampermonkey-universal-ai-prompt-commands.user.js`.
5. Fügen Sie den Code in Tampermonkey ein.
6. Speichern Sie mit **Ctrl + S**.

---

## Wichtiger Hinweis

Das Script wird nicht in GitHub und nicht in eine bestimmte Webseite installiert. Es wird in der Browser-Erweiterung **Tampermonkey** installiert.

GitHub dient nur als Speicherort für die Script-Datei.

Im Script steht:

```javascript
// @match        *://*/*
```

Das bedeutet, dass das Script auf verschiedenen Webseiten laufen kann. Es ersetzt aber nur exakte Befehle `D1–D10`. Normaler Text wird nicht verändert.