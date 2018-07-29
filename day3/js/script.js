window.addEventListener('DOMContentLoaded', function() {
  // Получаем информацию для работы
  let products = document.querySelectorAll('.product'),
      buttons = document.getElementsByTagName('button'),
      open = document.getElementsByClassName('open')[0];
      
  // Функия создания кнопки
  function createCart() {
    // Создаём элементы корзины
    let cart = document.createElement('div'),
        field = document.createElement('div'),
        heading = document.createElement('h2'),
        close = document.createElement('button');

    // Добавили классы элементам корзины
    cart.classList.add('cart');
    field.classList.add('cart-field');
    close.classList.add('close');

    // Добавили текст элементам корзины
    close.textContent = "Закрыть";
    heading.textContent = "В вашей корзине";

    // Добавили элементам корзины на страницу
    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(close);
  }
  createCart();

  // Добавление и удаленмя продукта в корзину(из корзины)
  let field = document.querySelector('.cart-field'),
      cart = document.querySelector('.cart'),
      close = document.querySelector('.close');

  // Цикл обработчик события клик на каждую кнопку
  for ( let i = 0; i < buttons.length-1; i++ ) {
    // Вешаем обработчик события клик на каждую кнопку
    buttons[i].addEventListener( 'click', function() {
      // Создаём копию карточки с товаром
      let item = products[i].cloneNode(true), // true - клонирует всё содержимое карточки товара(не только оболочку)
          // Получаем в переменную кноgку купить
          btn = item.querySelector('button');
      // Удаляем кнопку купить при добавлении в корзину
      // btn.remove();
      // Или изменяем текст кнопки
      btn.textContent = "Удалить";
      // Помещаем склонированую карточку продукта в корзину
      field.appendChild(item);
      // Удаляем карточку товара из магазина
      products[i].remove();

      // Удаляем товар из корзины
      if ( btn.textContent == "Удалить") {
        // Получаем в переменную магазин
        let shop = document.querySelector('.shop');
        // Вешаем на кнопку обработчик события когда продукт в корзине
        btn.addEventListener('click', function(){
          // Удаляем карточку из корзины
          item.remove();
          // Помещаем удалённую карточку продукта в магазин
          shop.appendChild(products[i]);
        })
      }
    })
  }

  // Открываем корзину
  function openCart() {
    cart.style.display = 'block';
  }
  // Закрываем корзину
  function closeCart() {
    cart.style.display = 'none';
  }
  // Вызов функции открытия корзины
  open.addEventListener( 'click', openCart );
  // Вызов функции закрытия корзины
  close.addEventListener( 'click', closeCart );
})