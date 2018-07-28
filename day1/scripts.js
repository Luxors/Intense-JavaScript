function myFirstApp(name, age) {
  alert("Привет! Меня зовут " + name + " Это моя первая программа.");

  function showSkills() {
    let skills = ['html', 'css', 'jQuery', 'Gulp', 'Pug', 'Sass/Scss/Less' ];

    for ( i=0; i<skills.length; i++ ) {
      document.write(skills[i] + '<br>');
    }
  }
  showSkills();

  function checkAge() {
    if ( age > 18) {
      alert("Вы готовы. Вперед за орденами!")
    } else {
        alert("Пока подождите.");
      }
  }
  checkAge();

  function calcPow(number) {
    let sum = number*number;
    return sum;
  }
  console.log(calcPow(4));
  
}

myFirstApp('Yaroslav', 41);