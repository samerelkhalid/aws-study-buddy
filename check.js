const path = require("path");

const FIELDS = ["service", "description", "category", "docsUrl"];
const DOCS_PREFIX = "https://docs.aws.amazon.com/";

function isFilled(value) {
  return typeof value === "string" && value.trim() !== "";
}

function check() {
  const problems = [];
  let cards;

  try {
    cards = require(path.join(__dirname, "cards.js"));
  } catch (err) {
    problems.push(`Could not load cards.js: ${String(err.message).split("\n")[0]}`);
    return problems;
  }

  if (!Array.isArray(cards)) {
    problems.push("cards.js does not export an array");
    return problems;
  }
  if (cards.length === 0) {
    problems.push("cards.js exports an empty array");
    return problems;
  }

  const seen = new Map();

  cards.forEach((card, i) => {
    const num = i + 1;

    if (card === null || typeof card !== "object" || Array.isArray(card)) {
      problems.push(`Card ${num}: is not an object`);
      return;
    }

    const label = isFilled(card.service)
      ? `Card ${num} (${card.service.trim()})`
      : `Card ${num}`;

    for (const field of FIELDS) {
      if (!(field in card)) {
        problems.push(`${label}: missing field "${field}"`);
      } else if (typeof card[field] !== "string") {
        problems.push(`${label}: field "${field}" is not a string`);
      } else if (card[field].trim() === "") {
        problems.push(`${label}: field "${field}" is empty`);
      }
    }

    if (isFilled(card.docsUrl) && !card.docsUrl.startsWith(DOCS_PREFIX)) {
      problems.push(`${label}: docsUrl must start with ${DOCS_PREFIX} (got ${card.docsUrl})`);
    }

    if (isFilled(card.service)) {
      const key = card.service.trim().toLowerCase();
      if (seen.has(key)) {
        problems.push(`${label}: duplicate service, same as card ${seen.get(key)}`);
      } else {
        seen.set(key, num);
      }
    }
  });

  return problems;
}

const problems = check();
if (problems.length === 0) {
  console.log("PASS");
  process.exitCode = 0;
} else {
  console.log("FAIL");
  for (const p of problems) console.log(p);
  process.exitCode = 2;
}
