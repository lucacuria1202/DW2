const productos = [
  {
    nombre: "Camiseta",
    precio: 1000,
    cantidad: 6,
  },
];
productos[0].nombre = "Zapatillas";
productos[0].categoria = "Calzado";
delete productos[0].cantidad;

for (let i = 0; i < productos.length; i++) {
  console.log(`Nombre del producto: ${productos[i].nombre}`);
  console.log(`Precio del producto: ${productos[i].precio}`);
  console.log(`Categoría del producto: ${productos[i].categoria}`);
}
