let city = "London";

function showWeather() {
  let temperature = 18;
  if (temperature <= 18) {
    let jackedNeeded = true;
    console.log(
      `You are in ${city} and temperature is ${temperature} and you need jacket: ${jackedNeeded}`,
    );
  }
}

function greet() {
  console.log(`you are in the city ${city}`);
}

greet();
showWeather();
