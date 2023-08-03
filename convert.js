function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    // Conversion rates (example values)
    const conversionRates = {
      USD: {
        EUR: 0.85,
        GBP: 0.75
      },
      EUR: {
        USD: 1.18,
        GBP: 0.88
      },
      GBP: {
        USD: 1.33,
        EUR: 1.14
      }
    };
  
    const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  }
  