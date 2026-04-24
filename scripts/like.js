// Обработка лайков на всех карточках
document.querySelectorAll('.like-wrapper').forEach(wrapper => {
  const likeButton = wrapper.querySelector('.like-button');
  const likeIcon = wrapper.querySelector('.like-icon');
  const buttonText = likeButton.querySelector('.button-text');

  const toggleLike = () => {
    // Переключаем класс liked на обёртке (соответствует CSS)
    wrapper.classList.toggle('liked');
    buttonText.textContent = wrapper.classList.contains('liked') ? 'Unlike' : 'Like';
  };

  likeButton.addEventListener('click', toggleLike);
  
  if (likeIcon) {
    likeIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLike();
    });
  }
});