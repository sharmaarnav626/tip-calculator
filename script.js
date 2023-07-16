"use strict";

const billInput = document.querySelector('#bill-input');
const customTipinput = document.querySelector('.custom-tip-input');
const peopleInput = document.querySelector('#people-input');
const tipAmountValue = document.querySelector('.tip-amount-value');
const totalValue = document.querySelector('.total-value');
const btnReset = document.querySelector('.btn-reset');
const selectTipBtn = document.querySelectorAll('.tip-percentage');


const calculateTip = () =>{
    const billValue = parseFloat(billInput.value);
    const numberOfPeople = parseFloat(peopleInput.value);
    const customTipActive = document.querySelector('.select-tip-custom.active');
    let tipPercentage = parseInt(document.querySelector('.tip-percentage.active').dataset.percentage);

    if(customTipActive){
        tipPercentage = parseFloat(document.querySelector('.custom-tip-input').value);
    }

    const totalAmount = parseFloat((tipPercentage / 100) * billValue).toFixed(2);
    const tipAmount = parseFloat(totalAmount / numberOfPeople).toFixed(2);
    const finalTotal = parseFloat((billValue + parseFloat(totalAmount)) / numberOfPeople).toFixed(2);

    tipAmountValue.innerHTML = `$${tipAmount}`;
    totalValue.innerHTML = `$${finalTotal}`;

};


btnReset.addEventListener('click' , (e) => {
    billInput.value = "0";
    customTipinput.value = "";
    peopleInput.value = "1";
    tipAmountValue.innerHTML = "$0.00";
    totalValue.innerHTML = "$0.00";

    selectTipBtn.forEach((tipBtn) => {
        tipBtn.classList.remove("active")
    });

    selectTipBtn[2].classList.add("active");
})


selectTipBtn.forEach((btn) => {
    btn.addEventListener('click' , (e) => {
        selectTipBtn.forEach((tipBtn) => {
            tipBtn.classList.remove("active");
        });

        if(e.target.classList.contains("custom-tip-input")){
            e.target.parentElement.classList.add("active");
        }
        else{
            e.target.classList.add("active");
        }

        calculateTip();
    })
})


billInput.addEventListener('keyup' , (e) => {
    calculateTip();
});

peopleInput.addEventListener('keyup' , (e) => {
    calculateTip();
});

customTipinput.addEventListener('keyup' , (e) => {
    calculateTip();
});

window.onload = (e) => {
        billInput.value = "0";
        customTipinput.value = "";
        peopleInput.value = "1";
        tipAmountValue.innerHTML = "$0.00";
        totalValue.innerHTML = "$0.00";
    
        selectTipBtn.forEach((tipBtn) => {
            tipBtn.classList.remove("active")
        });
    
        selectTipBtn[2].classList.add("active");
};