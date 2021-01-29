var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color = 'red';


var form = document.getElementById('formulario');
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		var mensajeError =[];
		
	// espaciado
	if (password.value === null || password.value === '') {
		password.focus();
		password.select();
		mensajeError.push("<span <span style= 'alert-danger;' > No puede contener espacio vacio, ni espaciado");
	}else{
		mensajeError.push(" <br><span style= 'color:green;' > No tiene espacioado ni contenido vacio</span> ");
	}

		// numerico
	 if (password.value.length < 4 || password != 0) {
		mensajeError.push('<br> Debe tener al menos 4 numeros ');
		password.focus();
		password.select();
  		 
  	}else{
  		mensajeError.push("<br> <span style= 'color:green;' >tiene 4 numeros</span> ");
  	}
	
	// caracteres
	if (password.value.length < 16) {
		password.focus();
		password.select();
		mensajeError.push('<br> Debe tener al menos 16 carcaters');
	}else{
		mensajeError.push(" <br><span style= 'color:green;' >tiene 16 carcaters</span> ");
	}

	

	error.innerHTML = mensajeError.join(' ');



	return false;
		
	})