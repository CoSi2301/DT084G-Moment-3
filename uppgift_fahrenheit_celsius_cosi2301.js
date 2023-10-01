/* Moment 3 , Celciusomvandlare.
Deklarerar en variabel (celsius) med ett numeriskt värde.
Deklarerar en variabel (fahrenheit) med värdet enligt följande formel:
°F = °C * 1.8 + 32
=
fahrenheit = celsius * 1.8 + 32

Skriver ut det till konsolen.
Conny Sirviö, HT2023 */

"use strict"; // Kör i strikt läge.

let celsius = 38;

function printFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  console.log(`${celsius}°C är lika med ${fahrenheit}°F`);
}

printFahrenheit(celsius);
