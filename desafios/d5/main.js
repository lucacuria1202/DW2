let products = ["Pan", "Leche", "Carne", "Verdura", "Fruta"];
console.log("Array de productos: ", products);
for (let i = 0; i < products.length; i++) {
  console.log(`Producto ${i + 1}: ${products[i]}`);
}

console.log("\nSimulando ventas...");

for (let i = products.length; i > 0; i--) {
  const product_vendido = products.pop();
  console.log(`\nProducto vendido: ${product_vendido}`);
  console.log(
    `Actualización de stock: Quedan ${products.length} productos en stock.\n`
  );
}
