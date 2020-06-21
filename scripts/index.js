// Находим форму в DOM
let popup = document.querySelector('.popup')

let popupOpenButton = document.querySelector('.profile__edit-button')
let popupCloseButton = popup.querySelector('.popup__close')

let profileUserName = document.querySelector('.profile__title')
let profileUserJob = document.querySelector('.profile__subtitle')

let nameInput = document.querySelector('.popup__input_type_name')
let jobInput = document.querySelector('.popup__input_type_job')

let formElement = document.querySelector('.popup__content')

let profileUserElement = document.querySelector('.profile__title')
let profileUserExplorerElement = document.querySelector('.profile__subtitle')

let popupToggle = function() {
  if (popup.classList.toggle('popup_opened')) {

    nameInput.value = profileUserName.textContent
    jobInput.value = profileUserJob.textContent
  }
}

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    profileUserElement.textContent = nameInput.value
    profileUserExplorerElement.textContent = jobInput.value

    popup.classList.toggle('popup_opened')
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
