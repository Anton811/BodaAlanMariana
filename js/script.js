const hoy = Temporal.Now.plainDateTimeISO();
const diaEvento = new Date("");

document.getElementById("demo").innerHTML = hoy.toString();
console.log(hoy);
