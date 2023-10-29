const tipForm = document.getElementById("tipForm");
const billTotal = document.getElementById("billTotal");
const tip = document.getElementById("tip");
const tipPercentageValue = document.getElementById("tipPercentageValue");
const tipAmount = document.getElementById("tipAmount");
const totalWithTip = document.getElementById("totalWithTip");

tipForm.addEventListener("input", updateTip);

function updateTip() {
    const billValue = parseFloat(billTotal.value);
    const tipValue = parseFloat(tip.value);
    tipPercentageValue.value = tipValue; 
    
    if (!isNaN(billValue)) {
        const tipAmountValue = (billValue * tipValue) / 100;
        const totalValue = billValue + tipAmountValue;
        tipAmount.value = tipAmountValue.toFixed(2);
        totalWithTip.value = totalValue.toFixed(2);
    } else {
        // Handle non-numeric input
        tipAmount.value = "";
        totalWithTip.value = "";
        tipPercentageValue.value = "";
    }
}
