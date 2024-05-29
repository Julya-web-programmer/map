// Предположим, что newNumber - это обновленное число, полученное от сервера
let newNumber = '12345';
document.getElementById('dynamicNumber').innerText = newNumber;
/*
// Сохраняем id активной кнопки
var activeButtonId = null;

function myFunctionClick(id) {
    var button = document.getElementById(id);

    // Если эта кнопка уже активна, ничего не делаем
    if (activeButtonId === id) {
        return;
    }

    // Если есть другая активная кнопка, сбрасываем ее стили
    if (activeButtonId) {
        var activeButton = document.getElementById(activeButtonId);
        activeButton.classList.remove('active');
        /*activeButton.style.color = "rgb(31 43 106/ 50%)"; // Исходный цвет текста
        activeButton.style.borderColor = "#F0F2FF"; // Исходный цвет обводки
    }

    // Делаем эту кнопку активной
    button.classList.add('active');
    /*button.style.color = "#1F2B6A";
    button.style.borderColor = "rgb(31 43 106/ 50%)";
    button.style.background = "#FFFFFF";

    // Обновляем id активной кнопки
    activeButtonId = id;
}
*/

var activeButtonId = 'ButtonPAK';

function myFunctionClick(id) {

    // Если на экране отображается модальные окна, функция не выполняется
    var myITinfo = document.getElementById('myITinfo');
    var myList = document.getElementById('myList');

    if (myITinfo.style.display === 'block'||myList.style.display === 'block') {
        return;
    }
    var buttons = document.getElementsByClassName('menu-item');

    // Сбрасываем стили для всех кнопок
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // Делаем выбранную кнопку активной
    var button = document.getElementById(id);
    button.classList.add('active');

    // Обновляем id активной кнопки
    activeButtonId = id;

    
    var myModal = document.getElementById('myModal');
    myModal.style.display = 'none';

}

function myFunctionForMyButton() {
    // Если на экране отображается модальные окна, функция не выполняется
    var myITinfo = document.getElementById('myITinfo');
    var myList = document.getElementById('myList');

    if (myITinfo.style.display === 'block'||myList.style.display === 'block') {
        return;
    }

    var button = document.getElementById('myButton');
    button.classList.toggle('active');
}



/*
function myFunctionClick(id) {
    var button = document.getElementById(id);
    
    // Если кнопка уже активна, вернем исходные стили
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        button.style.color = "rgb(31 43 106/ 50%)"; // Исходный цвет текста
        button.style.borderColor = "#F0F2FF"; // Исходный цвет обводки
    } else {
        // Иначе меняем цвет текста и обводки
        button.classList.add('active');
        button.style.color = "#1F2B6A";
        button.style.borderColor = "rgb(31 43 106/ 50%)";
        button.style.background = "#FFFFFF";
    }

    // Сохраните id кнопки для дальнейшей обработки на бэкенде
    // Это просто пример, вам нужно будет заменить это на вашу реальную функцию
    //backendFunction(id);
}
*/

// Обработчик кнопки Фильтр
document.getElementById('myButton').onclick = myFunction;

function myFunction() {
    // Если на экране отображается модальные окна, функция не выполняется
    var myITinfo = document.getElementById('myITinfo');
    var myList = document.getElementById('myList');

    if (myITinfo.style.display === 'block'||myList.style.display === 'block') {
        return;
    }
    

    var myModal = document.getElementById('myModal');
    if (myModal.style.display === 'none' || myModal.style.display === '') {
        myModal.style.display = 'block';
    } else {
        myModal.style.display = 'none';
       
    }
}


// Обработчик кнопки Сбросить фильтр
document.getElementById('myButtonB').onclick = myFunctionB;

function myFunctionB() {
    var vhInPx = window.innerHeight / 100;

    var myModal = document.getElementById('myModal');
    myModal.style.display = 'none';

    var button = document.getElementById('myButton');
    // кнопка уже активна, вернем исходные стили
    button.classList.remove('active');
    
}

// Обработчик кнопки Применить (недописан)
document.getElementById('myButtonS').onclick = myFunctionS;

function myFunctionS() {
var myModal = document.getElementById('myModal');
    myModal.style.display = 'none';

    var button = document.getElementById('myButton');
    // кнопка уже активна, вернем исходные стили
    button.classList.remove('active');

    var myList = document.getElementById('myList');
    if (myList.style.display === 'none' || myList.style.display === '') {
        myList.style.display = 'block';

    } else {
        myList.style.display = 'none';
       
    }

        var svgElement = document.getElementById("mySvg");
        var partOfSvg = document.getElementById("Krsn");
        var scale = 4; // измените это значение, чтобы установить коэффициент масштабирования

        // Добавьте это, чтобы установить плавную анимацию
        svgElement.style.transition = "transform 3s"; // измените это значение, чтобы установить продолжительность анимации

        svgElement.style.transform = "scale(" + scale + ") translateX(39%) translateY(-10%)";
        partOfSvg.style.fill = "rgba(80, 79, 217, 1)"; // чтобы установить новый цвет заливки

        //Для pop up
        // Задержка в 3 секунды перед показом блока
        setTimeout(function() {
            var svgContainer = document.getElementById('mySvgContainer');
            var krsnSvg = document.getElementById('Krsn');

            // Получить координаты элемента SVG
            //var svgRect = krsnSvg.getBoundingClientRect();

            // Установить координаты блока равными координатам элемента SVG
            //svgContainer.style.left = svgRect.left + 'px';
            //svgContainer.style.top = (svgRect.top - 150) + 'px';

            //В ручную для примера
            svgContainer.style.left = "45vw";
            svgContainer.style.top = "-45vh";
            var InfoInPopUp = document.getElementById('InfoInPopUp');
            //InfoInPopUp.style.left = "45vw";
            //InfoInPopUp.style.top = "-80vh";

            // Показать блок
            svgContainer.style.display = 'block';
  
        }, 3000);
    
}

//Обработчик кнопки назад на списке
function myFunctionBack() {
    var list = document.getElementById("myList");
    list.style.display = "none";

    var myModal = document.getElementById('myModal');
    myModal.style.display = 'block';

    var button = document.getElementById('myButton');
    button.classList.toggle('active');
}


//Появление блока инфо
function myFunctionInfo() {
    var myITinfo = document.getElementById('myITinfo');
    if (myITinfo.style.display === 'none' || myITinfo.style.display === '') {
        myITinfo.style.display = 'block';
    } else {
        myITinfo.style.display = 'none';
    }
}

//Для фото-видео карусели
var slideIndex = 1;
showSlides(slideIndex);

// Вперед назад
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


