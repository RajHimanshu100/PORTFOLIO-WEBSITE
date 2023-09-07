function convertToCelsius() {
    const celsiusInput = parseFloat(document.getElementById("celsiusInput").value);
    const fahrenheitOutput = document.getElementById("fahrenheitOutput");

    if (!isNaN(celsiusInput)) {
        const fahrenheit = (celsiusInput * 9/5) + 32;
        fahrenheitOutput.textContent = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    } else {
        fahrenheitOutput.textContent = "Invalid input. Please enter a valid number.";
    }
}

function convertToFahrenheit() {
    const fahrenheitInput = parseFloat(document.getElementById("fahrenheitInput").value);
    const celsiusOutput = document.getElementById("celsiusOutput");

    if (!isNaN(fahrenheitInput)) {
        const celsius = (fahrenheitInput - 32) * 5/9;
        celsiusOutput.textContent = `Temperature in Celsius: ${celsius.toFixed(2)}°C`;
    } else {
        celsiusOutput.textContent = "Invalid input. Please enter a valid number.";
    }
}
