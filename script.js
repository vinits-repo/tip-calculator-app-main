document.addEventListener("DOMContentLoaded", function () {
    const billInput = document.getElementById("bill");
    const spanBill = document.getElementById("span-bill");
    const totalPeople = document.getElementById("people");
    const spanPeople = document.getElementById("p-bill");
    const resetBtn = document.getElementById("resetBtn");
    const custom = document.getElementById("custom");
    let totalAmount = document.getElementById("total_amount");
    let tipAmount = document.getElementById("tip_amount");
    const btns = document.querySelectorAll(".btn");
    let selectedBtnValue;
  
    btns.forEach((element) => {
      element.addEventListener("click", (e) => {
        selectBtn(e.target.value);
        calculateTip();
      });
    });
  
    billInput.addEventListener("input", billValue);
    totalPeople.addEventListener("input", countPerson);
    custom.addEventListener("input", function () {
      selectedBtnValue = null;
      btns.forEach((e) => {
        e.classList.remove("active");
      });
      calculateTip();
    });
  
    function selectBtn(btnValue) {
      btns.forEach((e) => {
        e.classList.remove("active");
      });
      btns.forEach((element) => {
        if (element.value === btnValue) {
          element.classList.add("active");
          custom.value = "";
          selectedBtnValue = btnValue;
        }
      });
    }
  
    function calculateTip() {
      const billAmount = Number(billInput.value);
      const numPeople = Number(totalPeople.value);
      const customValue = Number(custom.value);
  
      const tipPercentage = customValue || parseInt(selectedBtnValue);
  
      if (numPeople > 0 && !isNaN(billAmount)) {
        const billPerPerson = billAmount / numPeople;
  
        const tipAmountPerson = (tipPercentage * billPerPerson) / 100;
  
        if (customValue > 0 || selectedBtnValue > 0) {
          tipAmount.textContent = tipAmountPerson.toFixed(2);
          totalAmount.textContent = (billPerPerson + tipAmountPerson).toFixed(2);
        }
      } else {
        totalAmount.textContent = "0";
      }
    }
  
    function billValue() {
      totalAmount.innerHTML = 0;
      tipAmount.innerHTML = 0;
      const billAmount = Number(billInput.value);
      const numPeople = Number(totalPeople.value);
  
      if (billAmount === 0 || isNaN(billAmount)) {
        spanBill.classList.remove("hidden");
        billInput.classList.add("error");
      } else if (numPeople === 0) {
        spanPeople.classList.remove("hidden");
        totalPeople.classList.add("error");
      } else {
        spanBill.classList.add("hidden");
        billInput.classList.remove("error");
        calculateTip();
      }
    }
  
    function countPerson() {
      totalAmount.innerHTML = "0";
      tipAmount.innerHTML = "0";
  
      const numPeople = Number(totalPeople.value);
      const billAmount = Number(billInput.value);
  
      if (numPeople === 0 || isNaN(numPeople)) {
        spanPeople.classList.remove("hidden");
        totalPeople.classList.add("error");
      } else if(billAmount === 0){
        spanBill.classList.remove("hidden");
        billInput.classList.add("error");
      } 
      else {
        spanPeople.classList.add("hidden");
        totalPeople.classList.remove("error");
      }
  
      calculateTip();
    }
  
    resetBtn.addEventListener("click", function () {
      window.location.reload();
    });
  });