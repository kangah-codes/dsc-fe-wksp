function createQuiz(obj) {
  const div = document.createElement("div");
  const question = document.createElement("p");
  const optg = document.createElement("div");
  const answers = Object.keys(obj.answers).map((k) => {
    const p = document.createElement("p");
    p.classList.add("answer");
    p.innerText = `${k[k.length - 1].toUpperCase()}: ${obj.answers[k]}`;
    return p;
  });
  answers.forEach((a) => optg.appendChild(a));
  question.innerText = obj.question;
  div.appendChild(question);
  div.appendChild(optg);

  return div;
}

fetch(
  "https://quizapi.io/api/v1/questions?apiKey=N8Oj0IvV0uty64iH6wUwN794PYi2cqwnjAMhuZKo&limit=20"
)
  .then((res) => res.json())
  .then((json) => {
    const QUIZZES = json;
    let INDEX = 0;
    const h = document.querySelector("h1");
    const q = document.querySelector(".question");
    const btn = document.querySelector("button");

    btn.addEventListener("click", () => {
      INDEX++;
      render();
    });

    function render() {
      h.innerText = `Question ${INDEX + 1} of ${QUIZZES.length}`;
      document.querySelector("main").appendChild(createQuiz(QUIZZES[INDEX]));
    }

    render();
  })
  .catch((err) => console.error(err));
