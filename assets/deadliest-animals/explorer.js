const animals = [
  {"name": "Mosquitoes", "value": 760000, "qualifier": "", "icon": "1F99F", "group": "infection", "source": "mosquitoes", "mechanism": "Mosquitoes transmit diseases. Malaria accounts for the largest share of the deaths in OWID’s breakdown.", "evidence": "OWID assembled estimates for several mosquito-borne diseases and rounded their combined figure to 760,000. The disease estimates come from multiple sources."},
  {"name": "Humans", "value": 600000, "qualifier": "", "icon": "1F9CD", "group": "violence", "source": "humans", "mechanism": "This estimate covers deaths from interpersonal violence, conflict and terrorism, and police conflict and executions.", "evidence": "OWID used IHME’s Global Burden of Disease as its main source. Conflict deaths vary substantially by year."},
  {"name": "Snakes", "value": 100000, "qualifier": "", "icon": "1F40D", "group": "venom", "source": "snakes", "mechanism": "Venom from a snakebite can cause paralysis, respiratory failure or organ damage.", "evidence": "OWID uses about 100,000 deaths per year. It cites a WHO estimate of 81,410–137,880, a separate estimate rather than an uncertainty interval for this bar.", "reading": ["WHO · Snakebite envenoming", "https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming"]},
  {"name": "Dogs", "value": 40000, "qualifier": "", "icon": "1F415", "group": "infection", "source": "dogs", "mechanism": "OWID attributes most deaths in this group to rabies transmitted by dogs.", "evidence": "OWID reviewed rabies estimates that differed substantially. Its methods cite about 15,800 deaths from IHME and about 43,800 from WHO for 2023. Both figures estimate rabies mortality.", "reading": ["WHO · Rabies", "https://www.who.int/news-room/fact-sheets/detail/rabies"]},
  {"name": "Freshwater snails", "value": 14000, "qualifier": "", "icon": "1F40C", "group": "infection", "source": "freshwater-snails-schistosomiasis", "mechanism": "Freshwater snails are hosts for parasites that cause schistosomiasis.", "evidence": "OWID uses deaths from schistosomiasis, drawing on estimates from IHME and WHO."},
  {"name": "Kissing bugs", "value": 8000, "qualifier": "", "icon": "1FAB2", "group": "infection", "source": "kissing-bugs-chagas-disease", "mechanism": "Kissing bugs can transmit the parasite that causes Chagas disease.", "evidence": "OWID compared IHME and WHO estimates of deaths from Chagas disease. The figure represents disease mortality."},
  {"name": "Sandflies", "value": 5000, "qualifier": "", "icon": "1FAB0", "group": "infection", "source": "sandflies-leishmaniasis", "mechanism": "Sandflies transmit parasites that cause leishmaniasis. Its visceral form can be fatal.", "evidence": "OWID’s rounded estimate sits between the IHME and WHO death estimates cited in the methods."},
  {"name": "Roundworms", "value": 4000, "qualifier": "", "icon": "1FAB1", "group": "infection", "source": "ascaris-roundworms-ascariasis", "mechanism": "Ascaris roundworms cause ascariasis. Severe infections can lead to intestinal obstruction.", "evidence": "OWID compared IHME and WHO estimates. Some deaths may be recorded under complications such as intestinal obstruction or sepsis."},
  {"name": "Scorpions", "value": 3000, "qualifier": "", "icon": "1F982", "group": "venom", "source": "scorpions", "mechanism": "Severe envenoming from scorpion stings can be fatal.", "evidence": "OWID relies on older global estimates because recent worldwide mortality data are limited."},
  {"name": "Tapeworms", "value": 2000, "qualifier": "", "icon": "1FAB1", "group": "infection", "source": "tapeworms-cysticercosis", "mechanism": "Larvae of the pork tapeworm can cause cysticercosis, including infection of the nervous system.", "evidence": "OWID uses deaths attributed to cysticercosis. Estimates differ in whether they include deaths linked indirectly to complications."},
  {"name": "Tsetse flies", "value": 1500, "qualifier": "", "icon": "1FAB0", "group": "infection", "source": "tsetse-flies-trypanosomiasis", "mechanism": "Tsetse flies can transmit parasites that cause African trypanosomiasis, also called sleeping sickness.", "evidence": "OWID uses recent disease mortality estimates from IHME and WHO. The documentation also describes much higher estimates in older sources."},
  {"name": "Elephants", "value": 1000, "qualifier": "", "icon": "1F418", "group": "injury", "source": "elephants", "mechanism": "Fatalities occur during encounters with elephants, including attacks.", "evidence": "OWID used national reports alongside other evidence to arrive at a rounded global estimate. Reporting is incomplete."},
  {"name": "Bees, wasps & hornets", "value": 500, "qualifier": "", "icon": "1F41D", "group": "venom", "source": "bees-wasps-and-hornets", "mechanism": "OWID identifies severe allergic reactions after stings as the main cause of death in this group.", "evidence": "OWID draws on cause-of-death records. The challenge CSV gives 500, while the methods describe the underlying count as likely higher because some countries are missing."},
  {"name": "Big cats", "value": 300, "qualifier": "", "icon": "1F405", "group": "injury", "source": "big-cats", "mechanism": "This category includes fatal attacks by tigers, lions and other large cats.", "evidence": "OWID combines national records and other published reports. Its evidence is especially limited for cats other than tigers and lions."},
  {"name": "Crocodiles", "value": 150, "qualifier": ">", "icon": "1F40A", "group": "injury", "source": "crocodiles", "mechanism": "The estimate refers to fatal crocodilian attacks.", "evidence": "OWID compared two databases covering different periods. Incomplete reporting led it to publish a lower bound of more than 150.", "reading": ["CrocAttack · 2015–2024 reporting", "https://crocattack.org/2015-2024attackstats/"]},
  {"name": "Jellyfish", "value": 100, "qualifier": "", "icon": "1FABC", "group": "venom", "source": "jellyfish", "mechanism": "OWID associates many fatalities with venomous stings from box jellyfish.", "evidence": "OWID drew on published and country-level reports. It found limited recent evidence for the global total."},
  {"name": "Hippopotamuses", "value": 50, "qualifier": ">", "icon": "1F99B", "group": "injury", "source": "hippopotamuses", "mechanism": "This estimate covers fatal encounters with common hippopotamuses.", "evidence": "OWID considered national records and extrapolation. The original graphic gives a lower bound of more than 50 and the documentation notes substantial uncertainty."},
  {"name": "Spiders", "value": 50, "qualifier": "", "icon": "1F577", "group": "venom", "source": "spiders", "mechanism": "Fatal spider bites can involve severe envenoming.", "evidence": "OWID uses WHO cause-of-death records from countries with relatively complete registration. That coverage may miss fatalities elsewhere."},
  {"name": "Bears", "value": 20, "qualifier": "", "icon": "1F43B", "group": "injury", "source": "bears", "mechanism": "The estimate includes fatal attacks by several bear species.", "evidence": "OWID combines evidence across species. For example, a brown bear study recorded 95 fatal attacks between 2000 and 2015.", "reading": ["Bombieri et al. · Brown bear attacks", "https://www.nature.com/articles/s41598-019-44341-w"]},
  {"name": "Sharks", "value": 6, "qualifier": "", "icon": "1F988", "group": "injury", "source": "sharks", "mechanism": "The estimate refers to fatal shark bites.", "evidence": "OWID cites 54 fatal attacks logged by the International Shark Attack File in 2010–2019 and shows about six per year. Its methods separately cite 14 reported fatalities in 2023.", "reading": ["Florida Museum · International Shark Attack File", "https://www.floridamuseum.ufl.edu/shark-attacks/"]},
  {"name": "Gray wolves", "value": 5, "qualifier": "", "icon": "1F43A", "group": "mixed", "source": "gray-wolves", "mechanism": "The reports reviewed by OWID include deaths from rabies and deaths from attack injuries.", "evidence": "OWID cites 26 fatalities recorded in 2002–2020. It chose a higher annual estimate to account for possible gaps in reporting.", "reading": ["NINA · Wolf attacks, 2002–2020", "https://wolf.org/wp-content/uploads/2021/11/WolfAttacksUpdate.pdf"]}
];

const groups = {
  infection: { name: "Infection and parasites", description: "Transmission of pathogens or direct infection by parasites." },
  venom: { name: "Venom and sting reactions", description: "Envenoming from bites or stings, including allergic reactions to stings." },
  injury: { name: "Physical attacks", description: "Fatal injuries during encounters." },
  violence: { name: "Human violence", description: "Interpersonal violence, conflict and other direct violence." },
  mixed: { name: "Mixed mechanisms", description: "The source includes infection as well as attack injuries." },
};
const methods = "https://docs.owid.io/projects/etl/analyses/deadliest_animals/";
const format = number => number.toLocaleString("en-US");
const estimate = animal => animal.qualifier + format(animal.value);
const iconPath = animal => "assets/deadliest-animals/icons/" + animal.icon + ".svg";

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function icon(animal) {
  const image = element("img");
  image.src = iconPath(animal);
  image.alt = "";
  return image;
}

function sourceLink(label, url) {
  const link = element("a", "", label);
  link.href = url;
  return link;
}

const rowList = document.getElementById("rows");
const evidenceColumn = document.getElementById("evidence-column");
const wide = window.matchMedia("(min-width: 980px)");
const card = element("section", "evidence-card");
card.id = "animal-evidence";
card.setAttribute("aria-labelledby", "evidence-title");
const rowButtons = new Map();
const viewButtons = document.querySelectorAll("[data-view]");
const zoomButtons = document.querySelectorAll("[data-limit]");
let view = "rank";
let limit = 800000;
let active = null;
let pinned = false;

function mosquitoBreakdown() {
  const details = element("details", "breakdown");
  details.append(
    element("summary", "", "See the disease breakdown"),
    element("p", "", "Estimates compiled by OWID. The three largest components are shown.")
  );
  const list = element("ul", "breakdown-list");
  for (const [name, count] of [["Malaria", 669960], ["Dengue fever", 52677], ["Japanese encephalitis", 25000]]) {
    const row = element("li");
    const track = element("div", "breakdown-track");
    track.setAttribute("aria-hidden", "true");
    const bar = element("div", "breakdown-bar");
    bar.style.width = (100 * count / 669960) + "%";
    track.append(bar);
    row.append(element("span", "", name), element("strong", "", format(count)), track);
    list.append(row);
  }
  details.append(list, element("p", "", "The full set of estimates sums to 755,987, which OWID rounds to 760,000."));
  return details;
}

function nearbyEstimates(animal) {
  const radius = 3;
  const rank = animals.indexOf(animal);
  const nearby = animals.slice(Math.max(0, rank - radius), rank + radius + 1);
  const maximum = animal.value * 2;
  const figure = element("figure", "nearby-estimates");
  const caption = element("figcaption", "nearby-caption");
  caption.append(
    element("strong", "", "Nearby in the overall ranking"),
    element("span", "", "Local scale · 0–" + format(maximum) + " deaths per year")
  );
  const list = element("ul", "nearby-list");
  let hasOverflow = false;

  for (const neighbor of nearby) {
    const row = element("li", "nearby-row");
    if (neighbor === animal) {
      row.classList.add("nearby-focus");
      row.setAttribute("aria-current", "true");
    }

    // A lower bound equal to the maximum also implies a value beyond it.
    const overflow = neighbor.value > maximum || (neighbor.value === maximum && neighbor.qualifier === ">");
    const track = element("span", "nearby-track");
    track.setAttribute("aria-hidden", "true");
    const bar = element("span", "nearby-bar");
    bar.style.width = (100 * Math.min(neighbor.value, maximum) / maximum) + "%";
    if (overflow) {
      bar.classList.add("nearby-overflow");
      hasOverflow = true;
    } else if (neighbor.qualifier === ">") {
      bar.classList.add("nearby-lower-bound");
    }
    track.append(bar);

    const number = element("span", "nearby-value", estimate(neighbor));
    if (overflow) number.append(element("span", "visually-hidden", " (above local scale)"));
    row.append(element("span", "", neighbor.name), track, number);
    list.append(row);
  }

  figure.append(caption, list);
  if (hasOverflow) {
    figure.append(element("div", "nearby-key", "Dark tips mark values beyond the local scale."));
  }
  return figure;
}

function showEvidence(animal, pin = false, focus = false) {
  active = animal;
  pinned = pin;
  for (const [item, button] of rowButtons) {
    button.setAttribute("aria-expanded", String(item === animal));
    button.classList.toggle("is-active", item === animal);
  }
  if (!animal) {
    card.remove();
    return;
  }

  card.dataset.group = animal.group;
  const title = element("h3", "", animal.name);
  title.id = "evidence-title";
  title.tabIndex = -1;
  const header = element("div", "evidence-header");
  header.append(icon(animal), title);
  const badge = element("p", "evidence-badge", groups[animal.group].name);
  const caption = element("span", "", animal.qualifier ? "published lower bound per year" : "estimated deaths per year");
  const value = element("div", "evidence-estimate");
  value.append(element("strong", "", (animal.qualifier ? "" : "≈") + estimate(animal)), caption);

  const sources = element("div", "evidence-sources");
  sources.append(sourceLink("OWID estimate and methods ↗", methods + "#" + animal.source));
  if (animal.reading) {
    sources.append(sourceLink(animal.reading[0] + " ↗", animal.reading[1]));
  }

  const status = element("div", "evidence-status");
  status.append(element("span", "eyebrow", "BEHIND THE ESTIMATE"));
  if (pin) {
    const close = element("button", "evidence-close", "Close");
    close.type = "button";
    close.addEventListener("click", () => {
      showEvidence(null);
      rowButtons.get(animal)?.focus();
    });
    status.append(close);
  }
  card.replaceChildren(
    status, header, badge, value, nearbyEstimates(animal),
    element("h4", "", "How deaths occur"), element("p", "", animal.mechanism),
    element("h4", "", "Where the estimate comes from"), element("p", "", animal.evidence),
  );
  if (animal.name === "Mosquitoes") card.append(mosquitoBreakdown());
  card.append(sources);
  if (wide.matches) evidenceColumn.append(card);
  else rowButtons.get(animal).after(card);
  if (focus) title.focus({ preventScroll: wide.matches });
}

function buildRow(animal) {
  const row = element("button", "row animal-row");
  row.type = "button";
  row.dataset.group = animal.group;
  row.setAttribute("aria-controls", "animal-evidence");
  row.setAttribute("aria-expanded", "false");
  const identity = element("span", "identity");
  identity.append(icon(animal), element("span", "", animal.name));

  const track = element("span", "track");
  track.setAttribute("aria-hidden", "true");
  const bar = element("span", animal.qualifier ? "bar lower-bound" : "bar");
  bar.style.width = (100 * animal.value / limit) + "%";
  track.append(bar);
  row.append(identity, track, element("span", "number", estimate(animal)));

  row.addEventListener("pointerenter", event => {
    if (wide.matches && event.pointerType === "mouse" && !pinned && active !== animal) {
      showEvidence(animal);
    }
  });
  row.addEventListener("click", event => {
    if (active === animal && pinned) showEvidence(null);
    else showEvidence(animal, true, event.detail === 0);
  });
  rowButtons.set(animal, row);
  return row;
}

function draw() {
  const visible = animals.filter(animal => limit === 800000 || animal.value < limit);
  rowList.replaceChildren();
  rowButtons.clear();
  if (view === "rank") {
    rowList.append(...visible.map(buildRow));
  } else {
    for (const [key, group] of Object.entries(groups)) {
      const members = visible.filter(animal => animal.group === key);
      if (!members.length) continue;
      const heading = element("div", "group-heading");
      heading.dataset.group = key;
      heading.append(element("h3", "", group.name), element("p", "", group.description));
      rowList.append(heading, ...members.map(buildRow));
    }
  }

  const ticks = [0, .25, .5, .75, 1].map(fraction => element("span", "", format(limit * fraction)));
  document.getElementById("ticks").replaceChildren(...ticks);
  document.getElementById("scale-note").textContent = "Shared scale · 0–" + format(limit) + " deaths per year";
  document.getElementById("hidden-note").textContent = visible.length + " of " + animals.length + " groups shown.";
  document.getElementById("view-note").hidden = view === "rank";
  for (const button of viewButtons) button.setAttribute("aria-pressed", String(button.dataset.view === view));
  for (const button of zoomButtons) button.setAttribute("aria-pressed", String(Number(button.dataset.limit) === limit));
  if (rowButtons.has(active)) showEvidence(active, pinned);
  else showEvidence(wide.matches ? visible[0] : null);
}

for (const button of viewButtons) {
  button.addEventListener("click", () => {
    if (view === button.dataset.view) return;
    view = button.dataset.view;
    draw();
  });
}
for (const button of zoomButtons) {
  button.addEventListener("click", () => {
    if (limit === Number(button.dataset.limit)) return;
    limit = Number(button.dataset.limit);
    draw();
  });
}
wide.addEventListener("change", () => {
  showEvidence(wide.matches || pinned ? active || rowButtons.keys().next().value : null, pinned);
});

const comparison = document.getElementById("compare");
const mosquitoes = animals[0];
animals.slice(1).forEach((animal, index) => {
  const option = element("option", "", animal.name);
  option.value = index + 1;
  comparison.append(option);
});
comparison.value = animals.findIndex(animal => animal.name === "Sharks");

function compare() {
  const animal = animals[Number(comparison.value)];
  document.getElementById("compare-icon").src = iconPath(animal);
  document.getElementById("compare-name").textContent = animal.name.toUpperCase();
  document.getElementById("compare-value").textContent = estimate(animal);
  const ratio = mosquitoes.value / animal.value;
  document.getElementById("ratio").textContent = animal.qualifier
    ? "Lower bound"
    : "≈ " + ratio.toLocaleString("en-US", { maximumSignificantDigits: 3 }) + "×";
  document.getElementById("ratio-label").textContent = animal.qualifier
    ? "The source reports a minimum for this group."
    : "as many deaths in these estimates";
}
comparison.addEventListener("change", compare);
compare();
draw();
