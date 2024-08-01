document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validación básica del usuario y contraseña
  if (username === "JTorrecilla" && password === "2721524") {
    // Inicio de sesión exitoso, redireccionar a otra página o realizar otras acciones
    alert("Inicio de sesión exitoso");
  } else {
    // Mostrar mensaje de error
    document.getElementById("error-message").innerText = "Nombre de usuario o contraseña incorrectos";
  }
});
