const temps = [72, 75, 78, 82, 91, 95, 88];
const thresholdTemp = 90;

let i = 0;

while (i < temps.length) {
  if (temps[i] > thresholdTemp) {
    console.log("Danger Temperature:", temps[i], "at index:", i);
    break;
  }
  i++;
}
