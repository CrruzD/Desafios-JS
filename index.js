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

if (confirm(`Bienvenido, ¿Le gustaría ver nuestros productos? \n`) == true) {
    agregar()
  } else {
    alert("¡Hasta pronto!");
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

while (productoId != 7) 

{
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


const contenedorProductos = document.getElementById("containerSubtitle");

const listaProductos = [
     {
          id: 1,
          nombre: "Remeras",
          precioCompra: 1000,
          precioVenta: 3400,
          cantidad: 50,
     },
     {
          id: 2,
          nombre: "Camisas",
          precioCompra: 2000,
          precioVenta: 5200,
          cantidad: 40,
     },
     {
          id: 3,
          nombre: "Sweters",
          precioCompra: 5000,
          precioVenta: 8200,
          cantidad: 65,
     },
     {
          id: 4,
          nombre: "Buzos",
          precioCompra: 8000,
          precioVenta: 12000,
          cantidad: 85,
     },
     {
          id: 5,
          nombre: "Pantalones",
          precioCompra: 10000,
          precioVenta: 15300,
          cantidad: 41,
     },
     {
          id: 6,
          nombre: "Bermudas",
          precioCompra: 2000,
          precioVenta: 5800,
          cantidad: 39,
     }
]

listaProductos.forEach((producto) => {
     let column = document.createElement("div");
     column.className = "col-md-4 mt-3 mb-3";
     // column.id = "columna" + producto.id;
     column.id = `columna-${producto.id}`
     column.innerHTML = `
     <div class="card">
          <div class="card-body">
               <p class="card-text"> Nombre: <b>${producto.nombre} </b></p>
               <p class="card-text"> Precio compra: <b>$${producto.precioCompra} </b></p>
               <p class="card-text"> Precio venta: <b>$${producto.precioVenta} </b></p>
               <p class="card-text"> Cantidad: <b>${producto.cantidad} </b></p>
          </div>
     </div>
     `

     contenedorProductos.append(column)
})

