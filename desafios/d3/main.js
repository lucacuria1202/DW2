let nombreProducto=("Coca Cola");
let cantidadDeseada=prompt("Cuántos productos de "+ nombreProducto +" desea comprar?");
let precioUnitario=1000;
const costoTotal=cantidadDeseada*precioUnitario;
if (cantidadDeseada>=5){
    const descuento=0.1*costoTotal;
    alert(`El costo total de la compra es: $${costoTotal} y el descuento es de : $${descuento}`);
    alert(`El costo total de la compra con descuento es: $${costoTotal - descuento}`);
} 
else {
    alert(`El costo total de la compra es: $${costoTotal}`);
}