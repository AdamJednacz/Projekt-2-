//zmienne do produktu//
const numbers = document.querySelectorAll(".form__input")
const checkboxs = document.querySelectorAll("input[type = checkbox]")
const listProduct = document.querySelector(".list__item[data-id = products]")
const productCalc = document.querySelector(".list__item[data-id = products] .item__calc")
const productPrice = document.querySelector(".list__item[data-id = products] .item__price")
//zmienne dla order
const listOrder = document.querySelector(".list__item[data-id = orders]")
const orderCalc = document.querySelector(".list__item[data-id = orders] .item__calc")
const orderPrice = document.querySelector(".list__item[data-id = orders]  .item__price")
//zmienne dla Accounting
const listAccounting = document.querySelector(".list__item[data-id = accounting]")
const accountingPrice = document.querySelector(".list__item[data-id = accounting]  .item__price")
//zmiene dla Terminal
const listTerminal = document.querySelector(".list__item[data-id = terminal]")
const terminalPrice = document.querySelector(".list__item[data-id = terminal]  .item__price")
// zmienne dla choose package
const choosePackage = document.querySelector(".select__input")
const optionsValue = document.querySelectorAll("li[data-value]")
const selectInput = document.querySelector(".select__input")
const list1 = document.getElementById("package")
const listOptions = document.querySelector(".list__item[data-id = package]")
const optionsCalc = document.querySelector(".list__item[data-id = package] .item__calc")
const optionsPrice = document.querySelector(".list__item[data-id = package] .item__price")
// zmienne dla total
const total = document.getElementById("total-price")
const totalPrice = document.querySelector(".total__price")
//



//kod dla products i orders
numbers.forEach(function (number){
    number.addEventListener("input" , handleAddValue)
    productPrice.innerText = 0
    orderPrice.innerText = 0
    function handleAddValue(){
        if(number.id === "products"){
            listProduct.classList.add("open");
            productCalc.innerText = number.value + " * " + "$0.5"
            productPrice.innerText = "$" + number.value * 0.5
        }if (number.id ==="orders"){
            listOrder.classList.add("open");
            orderCalc.innerText = number.value + " * " + "$0.25"
            orderPrice.innerText = "$" + number.value * 0.25
        }
        calculateTotal()
    }
})
//kod dla checkboxów
checkboxs.forEach(function (checkbox){
    checkbox.addEventListener("input" , handleAddCheckbox)
    accountingPrice.innerText = 0
    terminalPrice.innerText = 0
    function handleAddCheckbox() {

        if (checkbox.id === "accounting") {
            accountingPrice.innerText = "$" + 35
            listAccounting.classList.add("open")
            calculateTotal()
        }
        if (checkbox.id === "terminal") {
            terminalPrice.innerText = "$" + 5
            listTerminal.classList.add("open")
            calculateTotal()
        }
        if (checkbox.checked === false && checkbox.id === "accounting") {
            accountingPrice.innerText = 0
            listAccounting.classList.remove("open")
            calculateTotal()
        }
        if (checkbox.checked === false && checkbox.id === "terminal") {
            terminalPrice.innerText = 0
            listTerminal.classList.remove("open")
            calculateTotal()
        }
    }
})
// //kod do wyboru opcji
choosePackage.addEventListener("click", handleShowOptions)
function handleShowOptions() {
    list1.classList.toggle("open")
}
optionsValue.forEach(function (optionValue) {
    optionValue.addEventListener("click", handleAddOption)
    optionsPrice.innerText = 0
    function handleAddOption() {
        selectInput.innerText = optionValue.dataset.value
        listOptions.classList.add("open")
        optionsCalc.innerText = optionValue.dataset.value
        if (optionValue.dataset.value === "Basic") {
            optionsPrice.innerText = "$" + 0
        }
        if (optionValue.dataset.value === "Professional") {
            optionsPrice.innerText = "$" + 25
        }
        if (optionValue.dataset.value === "Premium") {
            optionsPrice.innerText = "$" + 60
        }
        calculateTotal()
    }
})
function calculateTotal() {
    const productTotal = Number(productPrice.innerText.replace('$', ''));
    const orderTotal = Number(orderPrice.innerText.replace('$', ''));
    const accountingTotal = Number(accountingPrice.innerText.replace('$', ''));
    const terminalTotal = Number(terminalPrice.innerText.replace('$', ''));
    const optionsTotal = Number(optionsPrice.innerText.replace('$', ''));


    const totalSum = productTotal + orderTotal + accountingTotal + terminalTotal + optionsTotal;

    total.classList.add("open")
    totalPrice.innerText = '$' + totalSum.toFixed(2);
}
