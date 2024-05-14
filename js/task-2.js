/**
 * Метод setInterval(callback, delay, args)
 */

// console.log('До виклику setInterval');

// const intervalId = setInterval(time => {
//   console.log(`Виклик кожні ${time} мс - ${Date.now()}`);
// }, 1000, 1000);

// console.log('Після виклику setInterval');

/**
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 10_000);

/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;
// const notification = document.querySelector('.js-alert');

// showNotification();
/**
 * Функції
 */
// function onNotificationClick() {
//   hideNotification();
//   clearTimeout(timeoutId);
// }

// function showNotification() {
//   notification.classList.add('is-visible');

//   timeoutId = setTimeout(() => {
//     hideNotification();
//     console.log(
//       'Закриваємо сповіщення автоматично, щоб воно не залишалося відкритим'
//     );
//   }, 5000);
// }

// function hideNotification() {
//   notification.classList.remove('is-visible');
// }

// notification.addEventListener('click', onNotificationClick);

/**
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

// const now = new Date();
// const past = Date.now;
// console.log('now:', now);
// console.log('past:', past);
 

/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

const refs = {
  clockface: document.querySelector('.clockface'),
  startBtn: document.querySelector('[data-action-start]'),
  stopBtn: document.querySelector('[data-action-stop]'),
};

const timer = {
  start() {
    if (isActive) {
      return;
}
  },
}