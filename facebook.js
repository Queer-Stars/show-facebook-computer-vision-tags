const emoji_map = {
  "1 Person": "👤",
  "2 Personen": "👥",
  "3 Personen": "👥",
  "4 Personen": "👥",
  "5 Personen": "👥",
  "6 Personen": "👥",
  "7 Personen": "👥",
  "Baby": "🍼",
  "Strand": "🏖",
  "Bart": "👴",
  "Fahrrad": "🚲",
  "Kamera": "📷",
  "Auto": "🚗",
  "Kind": "👦",
  "Weihnachtsbaum": "🎄",
  "Nahaufnahme": "👀",
  "Wolke": "☁️",
  "Wolken": "☁️",
  "Menschenmasse": "👥",
  "Hund": "🐶",
  "trinken": "🍹",
  "Getränk": "🍹",
  "essen": "🍽",
  "essend": "🍽",
  "Brille": "👓",
  "Blume": "🌻",
  "Essen": "🍎",
  "Golf": "🏌️‍",
  "Gras": "🍃",
  "Hut": "👒",
  "Innenbereich": "🏠",
  "Wohnzimmer": "🏠",
  "Meme": "👍",
  "Berg": "🌋",
  "Natur": "🏞",
  "Nacht": "🌃",
  "Ozean": "🌊",
  "Büro": "💼",
  "eine oder mehrere Personen": "👥",
  "im Freien": "🚵",
  "Personen, die essen": "🍽",
  "Personen, die sitzen": "⑁",
  "Personen, die lächeln": "😂",
  "Personen, die stehen": "🕴",
  "Telefon": "📱",
  "Pflanze": "🌿",
  "Selfie": "🤳",
  "Schuhe": "👡",
  "sitzend": "⑁",
  "sitzen": "⑁",
  "Himmel": "☀️",
  "Wolkenkratzer": "🏙",
  "schlafen": "😴",
  "schlafend": "😴",
  "lächelnd": "😋",
  "Schnee": "❄️",
  "steht": "🕴",
  "stehend": "🕴",
  "Streifen": "📶",
  "Anzug": "🕴",
  "Sonnenbrille": "🕶",
  "schwimmen": "🏊",
  "schwimmend": "🏊",
  "Tisch": "🍽",
  "Text": "🔠",
  "Baum": "🌴",
  "Dämmerung": "🌃",
  "Wasser": "💧"
}

const show_facebook_cv_tags = function() {
  const TAG_PREFIX = "Bild könnte enthalten: ";
  const images = [...document.getElementsByTagName('img')];

  images.forEach(function(el) {
    if (el.hasAttribute("data-prev-alt") && el.getAttribute("data-prev-alt") === el.getAttribute("alt"))
      return;

    el.setAttribute("data-prev-alt", el.alt);

    const altText = el.alt;
    const isCVTag = altText.startsWith(TAG_PREFIX);

    if (isCVTag) {
      const tags = altText.slice(TAG_PREFIX.length).split(/, | und /);
      let html = "<ul style='position:absolute;top:10px;right:10px;padding:5px;font-size:12px;line-height:1.8;background-color:rgba(0,0,0,0.7);color:#fff;border-radius:5px'>";

      tags.forEach(function(tag){
        let prefix = "∙";

        if (tag in emoji_map)
          prefix = emoji_map[tag];

        html += `<li>${prefix} ${tag}</li>`;
      });

      html += "</ul>";

      el.style.position = 'relative';
      el.insertAdjacentHTML('afterend', html);
    }
  });
};

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        show_facebook_cv_tags();
    });
});

const config = { attributes: true, childList: true, characterData: false }

observer.observe(document.body, config);

show_facebook_cv_tags();
