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
  var mark = '<svg viewBox="0 0 100 100" width="42" height="42" role="img" aria-label="YK beeldmerk"><rect width="100" height="100" rx="21" fill="#102634"/><path d="M15 27 H31 L43 44 L55 27 H70 L50 56 V78 H35 V56 Z" fill="#fff"/><path d="M68 27 H86 L57 58 H50 L50 47 Z" fill="#59E4BA"/><path d="M57 57 L84 78 H66 L51 63 Z" fill="#178C80"/></svg>';
  var nav = links.map(function (item) {
    var active = item[0] === page;
    return '<a href="' + item[2] + '"' + (active ? ' class="yk-active" aria-current="page"' : '') + '>' + item[1] + '</a>';
  }).join("");
  mount.innerHTML = '<header class="yk-site-header"><div class="yk-header-inner"><a class="yk-brand" href="https://ypkurt.nl/" aria-label="Yıldız Kurt - startpagina"><span class="yk-brand-icon">' + mark + '</span><span class="yk-brand-name">Yıldız Kurt</span></a><nav class="yk-nav" aria-label="Hoofdnavigatie">' + nav + '</nav><button id="theme-toggle" class="yk-theme-button" type="button" aria-label="Wissel tussen licht en donker thema">◐ <span>Thema</span></button></div></header>';
})();
