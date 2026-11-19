(function () {
  const serviceEl = document.getElementById("service");
  const answerEl = document.getElementById("answer");
  const descriptionEl = document.getElementById("description");
  const categoryEl = document.getElementById("category");
  const docsLinkEl = document.getElementById("docs-link");
  const showAnswerBtn = document.getElementById("show-answer");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const positionEl = document.getElementById("position");
  const shuffleBtn = document.getElementById("shuffle");

  const n = CARDS.length;
  // The current order of the deck. Starts as cards.js order; Shuffle
  // rearranges this copy and never touches CARDS itself.
  let order = CARDS.slice();
  let index = 0;

  // Fisher–Yates shuffle: walk backwards, swapping each card with a
  // random card at or before it. Every order is equally likely.
  function shuffled(list) {
    const result = list.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function sameOrder(a, b) {
    return a.every((card, i) => card === b[i]);
  }

  function render() {
    const card = order[index];
    serviceEl.textContent = card.service;
    descriptionEl.textContent = card.description;
    categoryEl.textContent = card.category;
    docsLinkEl.href = card.docsUrl;
    answerEl.hidden = true;
    showAnswerBtn.hidden = false;
    positionEl.textContent = `${index + 1} / ${n}`;
  }

  showAnswerBtn.addEventListener("click", function () {
    answerEl.hidden = false;
    showAnswerBtn.hidden = true;
  });

  nextBtn.addEventListener("click", function () {
    index = (index + 1) % n;
    render();
  });

  prevBtn.addEventListener("click", function () {
    index = (index - 1 + n) % n;
    render();
  });

  shuffleBtn.addEventListener("click", function () {
    let next = shuffled(order);
    // Make sure the order actually changes (possible whenever there are 2+ cards).
    while (n > 1 && sameOrder(next, order)) {
      next = shuffled(order);
    }
    order = next;
    index = 0;
    render();
  });

  render();
})();
