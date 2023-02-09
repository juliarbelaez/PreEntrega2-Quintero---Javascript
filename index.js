class Producto {
  constructor(nombre, peso, precio) {
    this.nombre = nombre;
    this.peso = parseInt(peso);
    this.precio = parseInt(precio);
  }
}
const producto1 = new Producto("Azucarera Río", "350", 28000);
const producto2 = new Producto("Bowl Milán", "350", 38500);
const producto3 = new Producto("Cazuela Lima", "180", 29500);
const producto4 = new Producto("Juego de té", "500", 24000);
const producto5 = new Producto("Cazuela Madrid", "650", 30000);
const producto6 = new Producto("Florero Moscú", "650", 67000);
const producto7 = new Producto("Jarra Inglaterra", "850", 76000);
const producto8 = new Producto("Jarra Salento", "650", 54000);
const producto9 = new Producto("Mug Sienna", "350", 18000);
const producto10 = new Producto("Salero Carmesí", "150", 12000);

const Productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
  producto10,
];

function generarMensaje(element, index, mensajeCompleto) {
  index = index + 1;
  let nuevoElemento = "";
  nuevoElemento = index + " " + element.nombre + " $" + element.precio + "\n";
  mensajeCompleto = mensajeCompleto + nuevoElemento;
  return mensajeCompleto;
}

let opcion;
const carritoDeCompras = [];

let saludo = alert("Bienvenido a Cerámicas Carmesí");

//console.log(Productos[0]);

let mensaje = "";

Productos.forEach((element, index) => {
  mensaje = generarMensaje(element, index, mensaje);
});

let cantidadDeProductosAIngresar = parseInt(
  prompt(
    "A continuación están los productos disponibles \n \n" +
      mensaje +
      "\n Elija la cantidad de articulos que desea comprar"
  )
);

for (let i = 1; i <= cantidadDeProductosAIngresar; i++) {
  let productoElegido = parseInt(
    prompt(
      "Ingrese el número correspondiente al artículo número " +
        i +
        "\n\n" +
        mensaje +
        "\n"
    )
  );
  carritoDeCompras.push(Productos[productoElegido - 1]);
}

let mensajeFinal = "";
let total = 0;

carritoDeCompras.forEach((element, index) => {
  mensajeFinal = generarMensaje(element, index, mensajeFinal);
  total += element.precio;
});

alert(
  "Elegiste los siguientes productos \n\n" +
    mensajeFinal +
    "\n\n" +
    "El total a pagar es " +
    total
);
