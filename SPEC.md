# AWS Study Buddy — Spec

A one-page flashcard app for learning AWS services. Each card shows a service name; revealing it shows what the service does, its category, and a link to its official documentation.

## Constraints
- Plain HTML, CSS and JavaScript only. No frameworks, no npm packages, no build step.
- Opens by double-clicking `index.html` (`file://`). No server, no installs.
- `check.js` runs with plain `node check.js` and uses only Node built-ins.

## Files
| File | Purpose |
|---|---|
| `index.html` | The page; loads `style.css`, `cards.js`, then `app.js` with plain `<script>` tags |
| `style.css` | Styling |
| `app.js` | Flashcard behavior |
| `cards.js` | The card data, and nothing else |
| `check.js` | Validates `cards.js` |

## Card data (`cards.js`)
`cards.js` defines a global array and also exports it for Node:

```js
const CARDS = [
  {
    service: "Amazon ECS",
    description: "One plain sentence saying what it does.",
    category: "Containers",
    docsUrl: "https://docs.aws.amazon.com/..."
  },
  // ...
];
if (typeof module !== "undefined") module.exports = CARDS;
```

Each card has these four required fields, all non-empty strings:
- `service`: the AWS service name, e.g. "AWS IAM"
- `description`: one plain sentence
- `category`: a short free-text label, e.g. "Security"
- `docsUrl`: the official docs page; must start with `https://docs.aws.amazon.com/`

Starter cards (3): **Amazon ECS**, **AWS IAM**, **Amazon Bedrock**.

## App behavior
- Shows one card at a time, starting with the first card in `cards.js`.
- Initially only the service name is visible, plus a **Show answer** button.
- **Show answer** reveals the description, the category, and the docs link (opens in a new tab).
- **Next** and **Previous** move through the cards in `cards.js` order, wrapping from last to first and from first to last. Moving to another card hides the answer again.
- Shows the position, e.g. "2 / 3".
- Nothing is saved between visits; reloading starts at card 1.

## Check script (`check.js`)
Run with `node check.js`. It loads `cards.js` with `require` and reports **every** problem, not just the first.

It fails when:
- `cards.js` can't be loaded, or doesn't export a non-empty array
- any card is missing a field (absent, not a string, or empty/whitespace only), reported with the card's number and service name when available
- a service appears more than once (compared trimmed and case-insensitively)
- a `docsUrl` doesn't start with `https://docs.aws.amazon.com/`

Output:
- All good: prints `PASS`, exits with code `0`.
- Any problem: prints `FAIL`, then one line per problem, exits with code `2`.

## Done when
- [ ] Double-clicking `index.html` opens the app in a browser with no server and no console errors.
- [ ] The first card shows "Amazon ECS" with the answer hidden.
- [ ] **Show answer** reveals a one-sentence description, a category, and a working link to the ECS docs on docs.aws.amazon.com.
- [ ] **Next**/**Previous** cycle through ECS → IAM → Bedrock and wrap at both ends; the answer re-hides on each move; the position counter is correct.
- [ ] `cards.js` contains only card data, with the 3 starter cards.
- [ ] `node check.js` on the starter cards prints `PASS` and exits `0`.
- [ ] Each of these, introduced one at a time into `cards.js`, makes `node check.js` print `FAIL` plus a line describing the problem and exit `2`: a card with a field removed; a card with an empty field; a duplicate service (including one differing only in case); a `docsUrl` starting with something other than `https://docs.aws.amazon.com/`.
- [ ] Several problems at once are all listed in a single run.
- [ ] No frameworks, no npm packages, no `package.json`.

## Not now
- Remembering progress or the current card between visits (localStorage etc.)
- Marking cards as known / spaced repetition / scoring
- Shuffle or random order
- A fixed list of allowed categories, or filtering by category
- Adding or editing cards from the page
- More than the 3 starter cards
- Checking that docs links actually resolve (network requests)
- Keyboard shortcuts, animations, card-flip effects
- Hosting/deployment
