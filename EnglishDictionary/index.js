
const form = document.getElementById("searchForm");
const input = document.getElementById("wordInput");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const word = input.value.trim();
  if (!word) return;

  result.textContent = "Loading...";

  try {
    const url = `https://api.suvankar.cc/dictionaryapi/v1/definitions/en/${encodeURIComponent(word)}?compact=true`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Word not found");
    }

    const data = await response.json();
    result.replaceChildren();

    const title = document.createElement("h2");
    title.className = "word-title";
    title.textContent = data.word || word;
    result.appendChild(title);

    function addDefinition(text) {
      if (!text || typeof text !== "string") return;

      const p = document.createElement("p");
      p.className = "meaning";
      p.textContent = text;
      result.appendChild(p);
    }

    function getSenses(item) {
      const senses = item.senses || item.definitions || [];

      senses.forEach((sense) => {
        if (typeof sense === "string") {
          addDefinition(sense);
          return;
        }

        (sense.glosses || []).forEach(addDefinition);

        if (sense.definition) addDefinition(sense.definition);
        if (sense.gloss) addDefinition(sense.gloss);

        (sense.definitions || []).forEach((definition) => {
          if (typeof definition === "string") {
            addDefinition(definition);
          } else {
            addDefinition(
              definition.definition || definition.gloss ||
              definition.text
            );
          }
        });
      });

      if (item.definition) addDefinition(item.definition);
    }

    (data.meanings || []).forEach((item) => {
      const heading = document.createElement("h3");
      heading.textContent = item.partOfSpeech || "Meaning";
      result.appendChild(heading);

      getSenses(item);
    });

    if (!result.querySelector(".meaning")) {
      result.textContent = "No definitions found.";
    }
  } catch (error) {
    console.error(error);
    result.textContent = "Unable to fetch meanings. Please try again.";
  }
});

form.requestSubmit();
