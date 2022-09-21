/* let Inputs = [];

let login;
let InputEmail;
let InputPassword;

let admin = admin;
let password = 1234;

let contenedorLogin;

class Formulario {
     constructor(email, contraseña) {
          this.email = InputEmail;
          this.contraseña = InputPassword;
     }
}

function inicializarElementos() {
     login = document.getElementById("login");
     InputEmail = document.getElementById("inputEmail");
     InputPassword = document.getElementById("inputPassword")
}

function inicializarEventos() {
     login.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario (event) {
     event.preventDefault();
     let login = login.value;
     let InputEmail = InputEmail.value;
     let InputPassword = InputPassword.value;
}


const emailExiste = Inputs.some((Formulario) => Formulario.InputEmail === admin && InputPassword === password);
     if (!emailExiste) {
          document.write("Bienvenido")
     }
     else {
          document.write("Usuario inexistente")
     } */



// ============ ESTRUCTURA DE PRODUCTOS ============ //

class pedido
{
    constructor(id, prenda, precio)
    {
        this.id = id;
        this.prenda = prenda;
        this.precio = precio
    }
}
// ============ PRODUCTOS ============ //

const pedido1 = new pedido (1, "Remeras", 3400)
const pedido2 = new pedido (2, "Camisas", 5200)
const pedido3 = new pedido (3, "Sweters", 8200)
const pedido4 = new pedido (4, "Buzos", 12000)
const pedido5 = new pedido (5, "Pantalones", 15300)
const pedido6 = new pedido (6, "Bermudas", 5800)

// ============ ARRAY CARRITO ============ //

const carrito = [];

// ============ BIENVENIDA ============ //

function saludar() {

     if (confirm(`Bienvenido, ¿Le gustaría ver nuestros productos? \n`) == true) {
     agregar()
     } else {
     alert("¡Hasta pronto!");
     }
}
// ============ BUCLE PEDIDO ============ //

// ============ FUNCION DE PEDIDO ============ //

function agregar(){
let productoId = Number(prompt (`¿Qué desea llevar?:
     1. Remeras
     2. Camisas
     3. Sweters
     4. Buzos
     5. Pantalones
     6. Bermudas
     7. Ir al carrito`))

// ============ BUCLE DE PEDIDO DENTRO DE LA FUNCION ============ //

     while (productoId != 7) {
          switch (productoId)
          {
               case 1:
                    carrito.push(pedido1)
               break
               case 2:
                    carrito.push(pedido2)
               break
               case 3:
                    carrito.push(pedido3)
               break
               case 4:
                    carrito.push(pedido4)
               break
               case 5:
                    carrito.push(pedido5)
               break
               case 6:
                    carrito.push(pedido6)
               break
               default:
                    alert("Tu opcion es incorrecta")
               break
          }

productoId = Number(prompt (`¿Desea agregar algo mas?:
     1. Remeras
     2. Camisas
     3. Sweters
     4. Buzos
     5. Pantalones
     6. Bermudas
     7. Ir al carrito`))
}

console.log(carrito)
revisar()
}

// ============ FUNCION UPSALE PARA COMPRAR PAPAS Y BEBIDAS ============ //

function upsale()
{
    let agregarOtro = Number(prompt(`Finalizando pedido:
          1. Deseas agregar medias por $990
          2. No agregar y finalizar pedido`))
     if (agregarOtro == 1)
     {
          calcularTotal(carrito)
               alert(`El total de su pedido es: $${calcularTotal(carrito)+990}`)
     }
     else if (agregarOtro == 2) 
     {
          calcularTotal(carrito)
          alert(`El total de su pedido es: $${calcularTotal(carrito)}`)
     } 
     else 
     {
          alert("Valor inválido, vuelve a intentarlo")    
          upsale()
     }    
}

// ============ FUNCION PARA REVISAR PEDIDO ============ //

function revisar()
{
    const prendas = carrito.map((pedido) => pedido.prenda)
    alert(`Su pedido es:
    ${prendas} por un total de $${calcularTotal(carrito)}`)

// ============ FINALIZANDO PEDIDO ============ //

let eleccion = Number(prompt(`Seleccione si desea: 
     1. Agregar más prendas a su orden
     2. Finalizar su orden`))

     if (eleccion == 1) 
     {
          agregar();
     } 
     else 
     {
          upsale();
     }
}

// ============ FUNCION PARA CALCULAR EL TOTAL ============ //

function calcularTotal(carrito)

{
    let total = carrito.reduce((acumulador, pedido)=> 
    {
        return acumulador + pedido.precio
    },0)
     return total
}

function main(){
     saludar();
     agregar();
}

main();