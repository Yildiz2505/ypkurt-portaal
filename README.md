# YPKurt Portaal

De centrale website voor projecten, lessen, workshops en experimenten. Statische HTML/CSS/JavaScript-website zonder WordPress, database of build-proces.

## Structuur

- `index.html` — homepage met directe verwijzingen naar bestaande websites.
- `projecten.html` — projectenoverzicht met filters.
- `updates.html` — ontwikkelingen en berichten.
- `over.html` — over dit portaal, ruimte voor latere persoonlijke introductie.
- `css/style.css` — responsive vormgeving, licht/donker en printstijl.
- `js/app.js` — thema, projectfilters en het laden van inhoud.
- `data/content.json` — beheer van projecten en toekomstige berichten.

## Project toevoegen

Voeg in `data/content.json` onder `projects` een object toe met `id`, `title`, `category` (`elektronica`, `software` of `ontwerpen`), `description` en eventueel een `url`. Zonder URL verschijnt een project als concept.

## Update toevoegen

Voeg onder `updates` een object toe met `date` (YYYY-MM-DD), `title`, `description` en eventueel `url`. Er zijn bewust nog geen nieuwsberichten verzonnen.

## Lokaal testen

Gebruik een lokale webserver (vanuit de repositorymap bijvoorbeeld `python -m http.server 8000`). Open `http://localhost:8000`. De projecten- en updatepagina lezen `data/content.json` met fetch en werken daarom niet betrouwbaar via `file://`.

## Publiceren op Cloud86/Plesk

- Eerst het hoofddomein en de bestaande WordPress-installatie controleren. Bestaande subdomeinen mogen **niet** worden aangepast.
- Een nieuw Git-project in Plesk koppelen aan deze repository.
- Publiceren gebeurt **alleen handmatig**: **Nu pull uitvoeren** en **Nu publiceren**.
- Verwijder of vervang de oude bestanden op `ypkurt.nl` pas wanneer het juiste document root en de afzonderlijke subdomeinen zijn gecontroleerd.
- GitHub publiceren en live publiceren zijn twee verschillende handelingen.

## Geen automatische publicatie

Deze repository bevat geen GitHub Actions, deploymentworkflow of server-side scripting.
