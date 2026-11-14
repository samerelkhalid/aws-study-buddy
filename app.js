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

  const n = CARDS.length;
  let index = 0;

  function render() {
    const card = CARDS[index];
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

  render();
})();
