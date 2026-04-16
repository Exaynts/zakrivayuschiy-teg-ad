// Находим все кнопки "Сохранить на память" и диалог
const saveButtons = document.querySelectorAll('.save-button');
const dialog = document.getElementById('memory-dialog');
const okButton = document.getElementById('dialog-ok-button');

// Для каждой кнопки "Сохранить на память" добавляем обработчик
saveButtons.forEach(button => {
  button.addEventListener('click', () => {
    dialog.showModal();
  });
});

// Закрываем диалог по кнопке "OK"
okButton.addEventListener('click', () => {
  dialog.close();
});

// Закрываем диалог по клику на backdrop (по клику вне окна по ширине или по высоте)
dialog.addEventListener('click', (event) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    event.clientX < dialogDimensions.left ||
    event.clientX > dialogDimensions.right ||
    event.clientY < dialogDimensions.top ||
    event.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
});