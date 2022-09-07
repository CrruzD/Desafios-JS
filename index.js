/* let edad = prompt("Bienvenido, ingrese su edad por favor")

     if (edad >= 18){

               let opcion 

                    do{
                         opcion = parseInt(prompt("Usted es mayor de edad, puede tomar lo que desee.\n 1. Fernet \n 2. Cerveza \n 3. Vino \n 4. Agua"))
                         
                              switch (opcion){
                                   case 1: 
                                        alert("Muy bien, aquí tiene su Fernet")
                                   break
                                   case 2: 
                                        alert("Muy bien, aquí tiene su Cerveza")
                                   break
                                   case 3: 
                                        alert("Muy bien, aquí tiene su Vino")
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
          }  */


// DESAFIO COMPLEMENTARIO ARRAYS

let arrayAlumnosAprobados = ["Juan Cruz", "Facundo", "Benjamin"]

for (let index = 0; index < arrayAlumnosAprobados.length; index++) {
     console.log("Indice: " + index + " - " + arrayAlumnosAprobados[index])
 }
// AGREGO A UN ALUMNO APROBADO

 arrayAlumnosAprobados.push("Tiziana")

 console.log(arrayAlumnosAprobados)

 // ELIMINO A UN ALUMNO PORQUE QUIERO 

 arrayAlumnosAprobados.splice(2, 1)

 console.log(arrayAlumnosAprobados)

 // VOY A MOSTRAR LOS ALUMNOS DESAPROBADOS

 let arrayAlumnosDesaprobados = ["Marcos", "Damian", "Daniel"]

 console.log(arrayAlumnosDesaprobados)

 // CANTIDAD TOTAL DE ALUMNOS ( APROBADOS Y DESAPROBADOS )

 let arrayTotalAlumnos = arrayAlumnosAprobados.concat(arrayAlumnosDesaprobados)

 console.log(arrayTotalAlumnos)

 // CONCATENADOS

 let arrayConcatenado = arrayTotalAlumnos.join(" | ")

 console.log(arrayConcatenado)

 // ¿ TIZIANA Y DAMIAN APROBARON?

 console.log (arrayAlumnosAprobados.includes("Tiziana"))
 console.log (arrayAlumnosAprobados.includes("Damian"))

 // VEO QUE BENJAMIN SE CAMBIA DE CURSO

 let alumnoOut = "Benjamin"

 function eliminarAlumno(alumnoOut){
     let index = arrayTotalAlumnos.indexOf(alumnoOut)

     if(index != -1){
          arrayTotalAlumnos.splice(index, 1)
     }
     else{
          alert("Alumno no encontrado")
     }
 }

 let valorAEliminar = prompt("Ingrese un nombre")

 eliminarAlumno(valorAEliminar)

 console.log(arrayTotalAlumnos)