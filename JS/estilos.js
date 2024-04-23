function validar(){
	   var nombre= document.getElementById('nombre').value;
	   var apellidos= document.getElementById('apellidos').value;
	   var correo= document.getElementById('correo').value;
	   var telefono= document.getElementById('telefono').value;
	   var ciudad= document.getElementById('ciudad').value;
	   if(nombre=="" && apellidos=="" && correo=="" && telefono=="" && ciudad==""){
	     document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid red";
		 alert(nombre+apellidos+correo+"Por favor, conpleta todos los campos")
	   }
	   else if( nombre!= ""  && apellidos!="" && correo!= "" && telefono!= "" && ciudad!= ""){
	     document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid green";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid green";
		 alert(nombre+" ¡Gracias por contactarnos! Nos pondremos en contacto contigo muy pronto.")
	  }
	  else if(nombre== ""  && apellidos!="" && correo!= "" && telefono!= "" && ciudad!= ""){
	     document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid green";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid green";
	   }
	   else if( nombre!= ""  && apellidos=="" && correo!= "" && telefono!= "" && ciudad!= ""){
	    document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid green"; 	   
	   }
	   else if( nombre!= ""  && apellidos!="" && correo== "" && telefono!= "" && ciudad!= ""){
	    document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid green";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid green"; 	   
	   }
	   else if( nombre!= ""  && apellidos!="" && correo!= "" && telefono== "" && ciudad!= ""){
	    document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid green";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid green"; 	   
	   }
	   else if( nombre!= ""  && apellidos!="" && correo!= "" && telefono!= "" && ciudad== ""){
	    document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid green";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid red"; 	   	 
	  }
	   else if(nombre!= ""  && apellidos=="" && correo== "" && telefono== "" && ciudad== ""){
	     document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid red";
	   }
	   else if( nombre== ""  && apellidos!="" && correo== "" && telefono== "" && ciudad== ""){
	    document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid green";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid red"; 	   
	   }
	   else if( nombre== ""  && apellidos=="" && correo!= "" && telefono== "" && ciudad== ""){
	    document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid red"; 	   
	   }
	   else if( nombre== ""  && apellidos=="" && correo== "" && telefono!= "" && ciudad== ""){
	    document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid red"; 	   
	   }
	   else if( nombre== ""  && apellidos=="" && correo== "" && telefono== "" && ciudad!= ""){
	    document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid green"; 	   	 
	  }
	  else if( nombre!= ""  && apellidos!="" && correo=="" && telefono=="" && ciudad==""){
	    document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid green";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid red";  	   	 
	  }
	   else if( nombre!= ""  && apellidos!="" && correo!="" && telefono=="" && ciudad==""){
	    document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid green";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid red";  	   	 
	  }
	  else if( nombre!= ""  && apellidos=="" && correo!="" && telefono=="" && ciudad==""){
	    document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid red";  	   	 
	  }
	  else if( nombre!=""  && apellidos=="" && correo=="" && telefono=="" && ciudad!=""){
	    document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid green";
     }
	 else if( nombre!=""  && apellidos!="" && correo=="" && telefono=="" && ciudad!=""){
	    document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid green";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid green";
     }
	 else if( nombre!=""  && apellidos=="" && correo!="" && telefono=="" && ciudad!=""){
	    document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid green";
     }
	 else if( nombre==""  && apellidos!="" && correo=="" && telefono!="" && ciudad==""){
	    document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid green";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid red";
     }
	 else if( nombre!=""  && apellidos!="" && correo=="" && telefono!="" && ciudad==""){
	    document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid green";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid red";
     }
	 else if( nombre!=""  && apellidos=="" && correo=="" && telefono!="" && ciudad==""){
	    document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid red";
     }
	 else if( nombre==""  && apellidos=="" && correo!="" && telefono!="" && ciudad==""){
	    document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid red";
     }
	 else if( nombre==""  && apellidos=="" && correo=="" && telefono!="" && ciudad!=""){
	    document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid green";
     }
	 else if( nombre!=""  && apellidos=="" && correo!="" && telefono=="" && ciudad==""){
	    document.getElementById('nombre').style.border="2px solid green";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid red";
     }
	 else if( nombre!=""  && apellidos=="" && correo=="" && telefono=="" && ciudad!=""){
	    document.getElementById('nombre').style.border="2px solid green";
		document.getElementById('apellidos').style.border="2px solid red";
		document.getElementById('correo').style.border="2px solid red";
		document.getElementById('telefono').style.border="2px solid red";
		document.getElementById('ciudad').style.border="2px solid green";
     }
	 else if( nombre==""  && apellidos!="" && correo=="" && telefono=="" && ciudad!=""){
	    document.getElementById('nombre').style.border="2px solid red";
		document.getElementById('apellidos').style.border="2px solid green";
		document.getElementById('correo').style.border="2px solid red";
		document.getElementById('telefono').style.border="2px solid red";
		document.getElementById('ciudad').style.border="2px solid green";
     }
	 else if( nombre==""  && apellidos!="" && correo!="" && telefono=="" && ciudad==""){
	    document.getElementById('nombre').style.border="2px solid red";
		document.getElementById('apellidos').style.border="2px solid green";
		document.getElementById('correo').style.border="2px solid green";
		document.getElementById('telefono').style.border="2px solid red";
		document.getElementById('ciudad').style.border="2px solid red";
     }
	 else if( nombre==""  && apellidos=="" && correo!="" && telefono!="" && ciudad!=""){
	    document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid green";
     }
	 else if( nombre==""  && apellidos=="" && correo!="" && telefono=="" && ciudad!=""){
	    document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid green";
     }
	 else if( nombre==""  && apellidos!="" && correo!="" && telefono!="" && ciudad==""){
	    document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid green";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid red";
     }
	 else if( nombre==""  && apellidos=="" && correo=="" && telefono!="" && ciudad!=""){
	    document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid red";
		 document.getElementById('correo').style.border="2px solid red";
		 document.getElementById('telefono').style.border="2px solid green";
		 document.getElementById('ciudad').style.border="2px solid green";
     }
	 else if( nombre==""  && apellidos!="" && correo!="" && telefono=="" && ciudad!=""){
	    document.getElementById('nombre').style.border="2px solid red";
		 document.getElementById('apellidos').style.border="2px solid green";
		 document.getElementById('correo').style.border="2px solid green";
		 document.getElementById('telefono').style.border="2px solid red";
		 document.getElementById('ciudad').style.border="2px solid green";
     }
    }