let chooseBtn = document.getElementById('choose');
let receiveBtn = document.getElementById('receive');
let heading = document.getElementsByTagName('h2')[0];
let nameInput = document.getElementsByClassName('contactform_name')[0];
let phoneInput = document.querySelector('.contactform_phone');
let mailInput = document.querySelectorAll('.contactform_mail')[0];
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
let text = document.getElementsByName('message')[0];

function hover() {
  heading.textContent = "Действительно всё!";
}

function out() {
  heading.textContent = "Все включено";
}

heading.addEventListener('mouseenter', hover);
heading.addEventListener('mouseleave', out);

receiveBtn.addEventListener('click', function() {
  modal.style.display = 'block';
})

close.addEventListener('click', function() {
  modal.style.display = 'none';
})

nameInput.addEventListener('input', function() {
  text.value = "Меня зовут " + nameInput.value + ". Мой вопрос: ";

  if ( nameInput.value == "" ) {
    text.value = "";
  }
})