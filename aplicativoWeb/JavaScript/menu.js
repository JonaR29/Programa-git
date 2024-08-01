// Marcar el enlace del menú correspondiente a la página actual
document.addEventListener("DOMContentLoaded", function() {
    var currentPage = location.pathname.split("/").pop(); // Obtener el nombre del archivo actual
    var links = document.querySelectorAll("nav ul li a");
    links.forEach(function(link) {
      var href = link.getAttribute("href").split("/").pop(); // Obtener el nombre del archivo del enlace
      if (href === currentPage) {
        link.parentElement.classList.add("current-page");
      }
    });
  });
  