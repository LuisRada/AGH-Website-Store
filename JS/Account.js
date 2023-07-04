document.getElementById("btn_log-in").addEventListener("click", log_in);
document.getElementById("btn_register").addEventListener("click", register);

var contenedor_login_register = document.querySelector(".contenedor_login-register");
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var caja_trasera_login = document.querySelector(".Caja_trasera-login");
var caja_trasera_register = document.querySelector(".caja_trasera-register");


function log_in(){
	formulario_register.style.display="none";
	contenedor_login_register.style.left="10px";
	formulario_login.style.display="block";
	caja_trasera_register.style.opacity="1";
	caja_trasera_login.style.opacity="0";

}

function register(){
	formulario_register.style.display="block";
	contenedor_login_register.style.left="410px";
	formulario_login.style.display="none";
	caja_trasera_register.style.opacity="0";
	caja_trasera_login.style.opacity="1";

}