// Получаем элементы блоков с помощью метода querySelector через классы
const parallaxLargeBlock = document.querySelector('.large-image');
const parallaxSmallBlock = document.querySelector('.small-image');

// Получаем высоту окна браузера
const windowHeight = window.innerHeight;

// Задаем значения смещения изображений вниз при скролле
const parallaxLargeOffset = 100;
const parallaxSmallOffset = 200;
// Задаем значение смещения блока вниз при скролле
const smallBlockffset = 200;

// Получаем отступ блока от верхней границы
const smallBlockOffset = parallaxSmallBlock.offsetTop; 

// Добавляем обработчик события "scroll" на объект window
window.addEventListener('scroll', () => {
  // Получаем текущую позицию блоков на странице
  const scrollLargePosition = parallaxLargeBlock.getBoundingClientRect().top;
  const scrollSmallPosition = parallaxSmallBlock.getBoundingClientRect().top;

  // Вычисляем новые значения позиций изображений с учетом смещения вниз при скролле
  const imageLargePosition = ((scrollLargePosition / windowHeight) * parallaxLargeOffset) - parallaxLargeOffset;
  const imageSmallPosition = ((scrollSmallPosition / windowHeight) * parallaxSmallOffset) - parallaxSmallOffset;

  // Вычисляем новое значение позиции блока с учетом смещения вниз при скролле
  const smallBlockPosition = ((scrollSmallPosition / windowHeight) * 50);

  // Применяем новые значения позиций изображений
  parallaxLargeBlock.style.backgroundPosition = `center ${imageLargePosition}px`;
  parallaxSmallBlock.style.backgroundPosition = `center ${imageSmallPosition}px`;

  // Применяем новре значения позиции блока
  parallaxSmallBlock.style.transform = 'translateY(' + smallBlockPosition + 'px)';
});