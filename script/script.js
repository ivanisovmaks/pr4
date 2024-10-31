document.addEventListener("DOMContentLoaded", function () {
  const btnOpenModal = document.querySelector('#btnOpenModal');
  const modalBlock = document.querySelector('#modalBlock');
  const closeModal = document.querySelector('#closeModal');
  const questionTitle = document.querySelector('#question');
  const formAnswers = document.querySelector('#formAnswers');

  btnOpenModal.addEventListener('click', () => {
    modalBlock.classList.add('d-block');
    playTest();
  });

  closeModal.addEventListener('click', () => {
    modalBlock.classList.remove('d-block');
  });

  function playTest() {
    renderQuestions();
  }

  function renderQuestions() {
    const burgerNameStandard = "Стандарт";
    const burgerImgStandard = "./image/burger.png";
    const burgerNameBlack = "Черный";
    const burgerImgBlack = "./image/burgerBlack.png";


    questionTitle.textContent = "Какого цвета бургер вы хотите?";


    formAnswers.innerHTML = `
      <div class="answers-item d-flex flex-column">
        <input type="radio" id="answerItem1" name="answer" class="d-none">
        <label for="answerItem1" class="d-flex flex-column justify-content-center">
          <img class="answerImg" src="${burgerImgStandard}" alt="burger">
          <span>${burgerNameStandard}</span>
        </label>
      </div>
      <div class="answers-item d-flex flex-column justify-content-center">
        <input type="radio" id="answerItem2" name="answer" class="d-none">
        <label for="answerItem2" class="d-flex flex-column justify-content-center">
          <img class="answerImg" src="${burgerImgBlack}" alt="burger">
          <span>${burgerNameBlack}</span>
        </label>
      </div>
    `;
  }
});
