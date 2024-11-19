document.addEventListener('DOMContentLoaded', function() {
  // Tu código aquí


  $(document).ready(function() {
    var itemNum = $('.multiple-items div').length - 1;
    $('.multiple-items').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
       prevArrow: '<button class="slick-prev custom-prev btn btn-primary"><i class=" icon-carrousel bi bi-arrow-left-circle"></i></button>',
      nextArrow: '<button class="slick-next custom-next text-center"><i class=" icon-carrousel bi bi-arrow-right-circle"></i></button>'
    });

    $('.multiple-items').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      if (nextSlide === 0) {
        $('.slick-cloned').slice(3, 6).css({
          'opacity': 1
        });
      } else if (nextSlide === itemNum) {
        $('.slick-cloned').filter(':lt(3)').css({
          'opacity': 1
        });
      }
    });

    $('.multiple-items').on('afterChange', function(event, slick, currentSlide) {
      $('.slick-cloned').css({
        'opacity': 0
      });
    });
  });

  let items = document.querySelectorAll(".slider2 .item2");
  let next = document.getElementById("next2");
  let prev = document.getElementById("prev2");

  let active = 3; // Índice del elemento central

function loadShow() {
let offset = 0; // Posición relativa de cada elemento

// Configura el elemento central
items[active].style.transform = `translateX(0px) scale(1)`;
items[active].style.zIndex = 10;
items[active].style.opacity = 1;
items[active].style.filter = "none";

// Configura los elementos a la derecha
for (let i = active + 1; i < items.length; i++) {
offset++;
items[i].style.transform = `translateX(${150 * offset}px) scale(${1 - 0.2 * offset})`;
items[i].style.zIndex = 10 - offset;
items[i].style.opacity = offset > 1 ? 0 : 1;
}

// Configura los elementos a la izquierda
offset = 0;
for (let i = active - 1; i >= 0; i--) {
offset++;
items[i].style.transform = `translateX(${-150 * offset}px) scale(${1 - 0.2 * offset})`;
items[i].style.zIndex = 10 - offset;
items[i].style.opacity = offset > 1 ? 0 : 1;
}
}

// Llamar la función para mostrar el carrusel inicial
loadShow();

// Navegación al siguiente elemento
next.onclick = function () {
if (active < items.length - 1) {
active++;
loadShow();
}
};

// Navegación al elemento anterior
prev.onclick = function () {
if (active > 0) {
active--;
loadShow();
}
};


let items2 = document.querySelectorAll(".slider3 .item3");
let next2 = document.getElementById("next3");
let prev2 = document.getElementById("prev3");

let active2 = 0; // Índice del elemento central

function loadShow2() {
  let offset2 = 0; // Posición relativa de cada elemento

  // Resetea el estado de todos los elementos antes de la nueva animación
  items2.forEach(item => {
    item.classList.remove("hidden");
    item.style.transform = '';
    item.style.opacity = '';
    item.style.filter = '';
    item.style.zIndex = '';
  });

  // Configura el elemento central
  items2[active2].style.transform = `translateX(0px) scale(1)`;
  items2[active2].style.zIndex = 10;
  items2[active2].style.opacity = 1;
  items2[active2].style.filter = "none";

  // Configura los elementos a la derecha
  for (let i = active2 + 1; i < items2.length; i++) {
    offset2++;
    items2[i].style.transform = `translateX(${50 * offset2}px) scale(0.9)`; // Mostrar un pedazo del siguiente
    items2[i].style.zIndex = 10 - offset2;
    items2[i].style.opacity = offset2 > 1 ? 0 : 1;
  }

  // Configura los elementos a la izquierda
  offset2 = 0;
  for (let i = active2 - 1; i >= 0; i--) {
    offset2++;
    items2[i].style.transform = `translateX(${-100 * offset2}px) scale(0.8)`; // Mostrar un pedazo del anterior
    items2[i].style.zIndex = 10 - offset2;
    items2[i].style.opacity = offset2 > 1 ? 0 : 1;
  }
}

// Llamar la función para mostrar el carrusel inicial
loadShow2();

// Navegación al siguiente elemento (con carrusel infinito)
next2.onclick = function () {
  let currentActive = items2[active2];
  active2 = (active2 + 1) % items2.length; // Cambio infinito (cuando llega al último, va al primero)

  // Añadir animación de desaparecer el elemento actual
  currentActive.classList.add("hidden");

  // Después de la animación, recargar la vista
  setTimeout(loadShow2, 500); // Espera 500ms para que se complete la animación
};

// Navegación al elemento anterior (con carrusel infinito)
prev2.onclick = function () {
  let currentActive = items2[active2];
  active2 = (active2 - 1 + items2.length) % items2.length; // Cambio infinito (cuando llega al primero, va al último)

  // Añadir animación de desaparecer el elemento actual
  currentActive.classList.add("hidden");

  // Después de la animación, recargar la vista
  setTimeout(loadShow2, 500); // Espera 500ms para que se complete la animación
};

 
});
     
