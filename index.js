let edad = prompt("Bienvenido, ingrese su edad por favor")

     if (edad >= 18)
          {
               let trago = prompt("¿Que desea tomar? ")

               while (trago != "ESC")
               {
                    alert("Aqui tiene su " + trago + ", que lo disfrute.");
                    
                    trago = alert("Vuelva pronto.")
                    break;

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
     
