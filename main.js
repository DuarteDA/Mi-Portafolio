//Scroll en el header
window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    const width = (scrollTop / (scrollHeight - windowHeight)) * 100;
    document.getElementById("line").style.width = width + "%";
});


//Mensaje al pasar mouse por los iconos
function showMensaje(element, mensaje) {
    var mensajeElement = document.createElement('div');
    mensajeElement.classList.add('mensaje');
    mensajeElement.innerText = mensaje;
    element.parentNode.appendChild(mensajeElement);
  }
  
  function hideMensaje() {
    var mensajeElements = document.querySelectorAll('.mensaje');
    mensajeElements.forEach(function(element) {
      element.parentNode.removeChild(element);
    });
  }
  

  //Carousel
  document.addEventListener('DOMContentLoaded', function() {
    let carousel = document.querySelector('.carousel');
    let images = carousel.querySelectorAll('img');
    let currentIndex = 0;
    let totalImages = images.length;
    function showNextImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add('active');
    }
    images[currentIndex].classList.add('active');
    setInterval(showNextImage, 3000);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    let carousel = document.querySelector('.form');
    let images = carousel.querySelectorAll('img');
    let currentIndex = 0;
    let totalImages = images.length;
    function showNextImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add('active');
    }
    images[currentIndex].classList.add('active');
    setInterval(showNextImage, 3000);
  });
  