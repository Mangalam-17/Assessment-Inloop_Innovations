const currentStock = [15, 3, 0, 22, 8, 1];

for (let i = 0; i < currentStock.length; i++) {
  const stock = currentStock[i];

  if (stock === 0) {
    console.log("Out of Stock");
  } else if (stock >= 1 && stock <= 5) {
    console.log("Restock Immediately");
  }
}
