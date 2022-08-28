let edad = prompt("Bienvenido, ingrese su edad por favor")

     if (edad >= 18){

               let opcion 

                    do{
                         opcion = parseInt(prompt("Usted es mayor de edad, puede tomar lo que desee.\n 1. Fernet \n 2. Cerveza \n 3. Vino \n 4. Agua"))
                         
                              switch (opcion){
                                   case 1: 
                                        alert("Fernet")
                                   break
                                   case 2: 
                                        alert("Cerveza")
                                   break
                                   case 3: 
                                        alert("Vino")
                                   break
                                   case 4: 
                                        alert("No, de ninguna manera. Adios. ")
                                   break
                                   default:
                                        alert("Opcion no valida")
                              }
                    
                    }

                    while(opcion != 4){

                    }
     }
     else if (edad < 18)
          {
               alert("Disculpe, no podemos dejar ingresar menores de edad.")
          }
     else
          {
               alert("Ingrese un valor valido")
          } 