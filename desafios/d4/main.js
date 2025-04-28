let nombreProducto=("Coca Cola");
const cantidad=parseInt(prompt("Cuántos productos de "+ nombreProducto +" desea comprar?"));
const precioUnitario=1000;

function sumarProductos(precioUnitario, cantidad) {
  return precioUnitario * cantidad;
}
alert("El precio total de su compra es de: " +sumarProductos(precioUnitario, cantidad));