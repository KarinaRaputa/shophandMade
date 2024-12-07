// Функція для відкриття модального вікна
function showDetails(productId) {
    const modal = document.getElementById(productId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Функція для закриття модального вікна
function closeDetails(productId) {
    const modal = document.getElementById(productId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Отримуємо кнопки і модальні елементи
const orderButtons = document.querySelectorAll('.buy-button');
const openOrderFormButton = document.getElementById('openOrderForm');
const orderModal = document.getElementById('orderModal');
const closeOrderModal = document.getElementById('closeOrderModal');
const productModal = document.getElementById('productModal');

// Відкрити бланк при натисканні кнопки "Зробити замовлення" в основному модальному вікні
openOrderFormButton.addEventListener('click', () => {
    productModal.style.display = 'none'; // Закрити основне модальне вікно
    orderModal.style.display = 'flex'; // Відкрити бланк
});

// Відкрити бланк при натисканні кнопки "Купити" з картки товару
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        orderModal.style.display = 'flex';
    });
});

// Закрити модальне вікно бланка при натисканні на хрестик
closeOrderModal.addEventListener('click', () => {
    orderModal.style.display = 'none';
});

// Закрити модальне вікно при натисканні поза його межами
window.addEventListener('click', (event) => {
    if (event.target === orderModal) {
        orderModal.style.display = 'none';
    }
});
