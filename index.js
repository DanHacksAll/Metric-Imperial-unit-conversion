function lengthConverter(valNum) {
  // tomo el valor del input
  let value = document.getElementById("input").value;

  // conversion de unidades Meter and Feet
  let Feet = valNum / 3.2808;
  let meter = valNum * 3.2808;

  // concateno el resultado de mis variables meter y Feet
  let length =
    value +
    " Meters = " +
    meter +
    " feet" +
    " | " +
    value +
    " Feet  = " +
    Feet +
    " Meters";

  // Renderizo el resultado en el DOM
  let totalLenght = (document.getElementById("length").textContent = length);

  // volume = Liters and Gallons
  let liters = valNum * 0.264172;
  let gallons = valNum * 3.785412;

  let volume =
    value +
    " Liters = " +
    liters +
    " Gallons" +
    " | " +
    value +
    " Gallons = " +
    gallons +
    " Liters";
  let totalVolume = (document.getElementById("volume").textContent = volume);

  // Mass = Kilograms and Pounds
  let kilograms = valNum * 2.204623;
  let pounds = valNum * 0.453592;

  let mass =
    value +
    " Kilos = " +
    kilograms +
    " Pounds " +
    " | " +
    value +
    " Pounds = " +
    pounds +
    " Kilos ";

  let totalMass = (document.getElementById("mass").textContent = mass);
}
