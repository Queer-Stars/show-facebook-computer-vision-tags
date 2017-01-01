# Show Facebook Computer Vision Tags Chrome Extension (German version)

![](https://cloud.githubusercontent.com/assets/896692/21574672/fa4cecb4-ceab-11e6-896c-101025c68dc3.png)

This is a german translation of [ageitgey's](https://github.com/ageitgey) [Show Facebook Computer Vision Tags Chrome Extension](https://github.com/ageitgey/show-facebook-computer-vision-tags) .

Seit April 2016 [fügt Facebook automatisch `alt` tags zu Bildern hinzu](https://code.facebook.com/posts/457605107772545/under-the-hood-building-accessibility-tools-for-the-visually-impaired-on-facebook/)
, die du hochlädst. Diese Tags repräsentieren den Inhalt deiner Bilder:

```html
<img csrc="https://facebook.com/some-url.jpg"
alt="Bild könnte enthalten: Golf, Gras, im Freien und Natur"
width="316" height="237">
```

Deine Bilder werden mit der Hilfe eines [Deep ConvNet](https://medium.com/@ageitgey/machine-learning-is-fun-part-3-deep-learning-and-convolutional-neural-networks-f40359318721#.luqjma59e)
gekennzeichnet, das von Facebooks
[FAIR team](https://research.fb.com/category/facebook-ai-research-fair/) entwickelt wurde.

Auf der einen Seite ist das sehr gut. Es verbessert die Zugänglichkeit für blinde Nutzer,
die abhängig von Bildschirmlesern sind, die nur Text verarbeiten können.

Aber ich denke, dass sehr viele Internetnutzer nicht erkennen, wie viele Informationen jetzt routinemäßig von Bildern extrahiert werden.
Facebook (und Google, Apple, Amazon, etc.) können durch deine Bilder ganz einfach herausfinden, dass du einen Hund hast, ob du Kameras sammelst, ob du Golf spielst, ob du Kinder hast, oder ob du sehr auf Sonnenbrillen abfährst. Es kann sie nichts davon abhalten, diese Informationen zu nutzen, um dir relevante Werbung anzuzeigen. Nur basierend auf deinen Bildern und sogar, wenn ein anderer Nutzer das Bild hochgeladen hat und dich nichtmal direkt getaggt hat!

Das ist eine sehr einfache Chrome Erweiterung, die ich in ein paar Minuten entwickelt habe, um es einfacher zu machen, die Tags zu sehen, die Facebook automatisch zu deinen Bildern hinzufügt.
Wenn du diese Erweiterung installiert, werden alle Fotos, die du in deiner Facebook timeline siehst, automatisch mit einem Overlay mit den Tags des Bildes versehen, so wie hier:

<img width="524" src="https://cloud.githubusercontent.com/assets/896692/21574687/3443b268-ceac-11e6-85ee-45f59408f9bb.png">

Das Ziel ist es, alle aufmerksam darauf zu machen, welche Informationen heutzutage routinemäßig aus deinen Bildern extrahiert werden. Es ist keine Technologie, die "demnächst erhältlich" ist, sondern etwas, das *weitverbreitet und von jeder großen Internetfirma genutzt wird*. Man kann sogar [lernen, wie man so ein System selbst implementieren kann](https://medium.com/@ageitgey/machine-learning-is-fun-part-3-deep-learning-and-convolutional-neural-networks-f40359318721), indem man weitestgehend erhältliche Open-Source Software nutzt.

Hier sind einige Beispiele von den Dingen, die Facebook in deinen Bildern erkennt:

### Objekte in deinen Bildern

Es ist möglich zu erkennen, welche Objekte in deinen Fotos vorkommen und darauf basierend auch, welche Interessen du hast.

![](https://cloud.githubusercontent.com/assets/896692/21574712/aa1fd34a-ceac-11e6-98b0-b0b7a6a5d9fb.png)

### Tätigkeiten, die du ausführst

Egal ob du am Essen bist, am Rennen, am Golf Spielen, für einen Algorithmus ist es möglich herauszufinden, was du in deinen Bildern tust.

<img width="523" alt="" src="https://cloud.githubusercontent.com/assets/896692/21574724/f5055da8-ceac-11e6-9ec0-14629f42deca.png">

### Wann und wo ein Bild aufgenommen wurde

Man kann herausfinden, ob ein Foto drinnen oder draußen geschossen wurde, wie spät es war, welche landschaftlichen Kennzeichen (Berge, Bäume, Wasser, etc.) da waren, und so weiter.

<img width="623" alt="screen shot 2016-12-30 at 4 30 36 pm" src="https://cloud.githubusercontent.com/assets/896692/21574743/5de83548-cead-11e6-9211-3e75a588523d.png">

### Events, an denen du teilnimmst

Es ist sogar möglich zu sagen, welche Art von Sportevent du besuchst.

<img width="949" alt="screen shot 2016-12-30 at 4 35 31 pm" src="https://cloud.githubusercontent.com/assets/896692/21574780/24767440-ceae-11e6-9ee1-b5e065f89c93.png">

Das sind nur ein paar Beispiele. Siehe selbst, welche Sachen Facebook in deinen Bildern herausgefunden hat!

# Installieren der Chrome Erweiterung

1. Klone die Repository, sodass du eine lokale Kopie besitzt.
2. Öffne "chrome://extensions" in der Adressleiste oder gehe zu "Weitere Tools" > "Erweiterungen"
3. Aktiviere den "Entwicklermodus", indem du die Checkbox oben rechts anklickst.
4. Klicke auf den Button "Entpackte Erweiterung laden...".
5. Wähle den Pfad zu deiner geklonten Repository.
6. Besuche Facebook!

# Installieren der Firefox Erweiterung (nur Nightly Builds mit Chrome Extension support)

1. Klone die Repository, sodass du eine lokale Kopie besitzt.
2. Während du ein Firefox Nightly build nutzt, setze `xpinstall.signatures.required` auf `false`.
3. Füge die Dateien zu einem Zip-Archiv hinzu, sodass manifest.json in der root directory der Zip-Datei liegt.
4. Benenne die Datei von .zip zu .xpi um.
5. Navigiere zu about:addons.
6. Ziehe deine XPI Datei in die Seite hinein (Drag and Drop).
7. Klicke auf "Installieren".
8. Starte Firefox neu.
9. Besuche Facebook!
