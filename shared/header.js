/* YPKurt / Workshop Studio - één gedeelde header voor beide domeinen. */
(function () {
  "use strict";
  var mount = document.getElementById("shared-header");
  if (!mount) return;
  var onWorkshops = location.hostname === "workshops.ypkurt.nl";
  var page = onWorkshops ? "workshops" : (location.pathname.endsWith("projecten.html") ? "projecten" : location.pathname.endsWith("updates.html") ? "updates" : location.pathname.endsWith("over.html") ? "over" : "home");
  var links = [
    ["home", "Home", "https://ypkurt.nl/"],
    ["projecten", "Projecten", "https://ypkurt.nl/projecten.html"],
    ["updates", "Ontwikkelingen", "https://ypkurt.nl/updates.html"],
    ["over", "Over dit portaal", "https://ypkurt.nl/over.html"],
    ["workshops", "Workshops", "https://workshops.ypkurt.nl/"]
  ];
  var mark = '<svg viewBox="0 0 120 120" width="54" height="54" role="img" aria-label="YK beeldmerk"><rect width="120" height="120" rx="25" fill="#102634"/><path d="M12 31 H30 L40 49 L50 31 H67 L49 62 V91 H32 V62 Z" fill="#fff"/><path d="M77 31 H101 L70 60 H62 L62 48 Z" fill="#59E4BA"/><path d="M70 62 L101 91 H79 L61 71 Z" fill="#178C80"/></svg>';
  var nav = links.map(function (item) {
    var active = item[0] === page;
    return '<a href="' + item[2] + '"' + (active ? ' class="yk-active" aria-current="page"' : '') + '>' + item[1] + '</a>';
  }).join("");
  mount.innerHTML = '<header class="yk-site-header"><div class="yk-header-inner"><a class="yk-brand" href="https://ypkurt.nl/" aria-label="Yıldız Kurt - startpagina"><span class="yk-brand-icon">' + mark + '</span><span class="yk-brand-name">Yıldız Kurt</span></a><nav class="yk-nav" aria-label="Hoofdnavigatie">' + nav + '</nav><button id="theme-toggle" class="yk-theme-button" type="button" aria-label="Wissel tussen licht en donker thema">◐ <span>Thema</span></button></div></header>';
})();
