"use strict";

(function () {
  let idField;
  let nameField;
  let typeField;
  let amountField;
  let priceField;
  let resultarea;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    resultarea = document.getElementById("resultarea");
    idField = document.getElementById("id");
    nameField = document.getElementById("name");
    typeField = document.getElementById("type");
    amountField = document.getElementById("amount");
    priceField = document.getElementById("price");

    document.getElementById("submit").addEventListener("click", send);

    idField.addEventListener("focus", clear);
  }

  function clear() {
    idField.value = "";
    nameField.value = "";
    typeField.value = "";
    amountField.value = "";
    priceField.value = "";
    resultarea.textContent = "";
    resultarea.removeAttribute("class");
  }

  async function send() {
    const computer = {
      id: +idField.value,
      name: nameField.value,
      type: typeField.value,
      amount: amountField.value,
      price: +priceField.value,
    };

    try {
      const options = {
        method: "POST",
        body: JSON.stringify(computer),
        headers: { "Content-Type": "application/json" },
      };
      const data = await fetch("/addComputer", options);
      const result = await data.json();

      updateStatus(result);
    } catch (err) {
      updateStatus({ message: err.message, type: "error" });
    }
  } //end of send

  function updateStatus(status) {
    resultarea.textContent = status.message;
    resultarea.setAttribute("class", status.type);
  }
})();
