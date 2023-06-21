
//zmienne do produktu//
const product = document.getElementById("products")
const listProduct = document.querySelector(".list__item[data-id = products]")
const productCalc = document.querySelector(".list__item[data-id = products] .item__calc")
const productPrice = document.querySelector(".list__item[data-id = products] .item__price")
//zmienne dla order
const order = document.getElementById("orders")
const listOrder = document.querySelector(".list__item[data-id = orders]")
const orderCalc = document.querySelector(".list__item[data-id = orders] .item__calc")
const orderPrice = document.querySelector(".list__item[data-id = orders]  .item__price")
//zmienne dla Accounting
const accounting = document.getElementById("accounting")
const listAccounting = document.querySelector(".list__item[data-id = accounting]")
const accountingPrice = document.querySelector(".list__item[data-id = accounting]  .item__price")
//zmiene dla Terminal
const terminal = document.getElementById("terminal")
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
const listItems = document.querySelectorAll("input");
const totalPrice = document.querySelector(".total__price")
//kod dla ceny prodktów//
product.addEventListener("input", handleAddValue)
function handleAddValue(){
        listProduct.classList.add("open");
        productCalc.innerText = product.value + " * " + "$0.5"
        productPrice.innerText = "$"+ product.value * 0.5

}
//kod dla ceny zamówień //
order.addEventListener("input", handleAddValueOrder)
function handleAddValueOrder(){
    listOrder.classList.add("open");
    orderCalc.innerText = order.value + " * " + "$0.25"
    orderPrice.innerText = "$"+ order.value * 0.25
}

//kod dla accounting//
accounting.addEventListener("input" , handleAddAccounting)
function handleAddAccounting(){
    listAccounting.classList.toggle("open")
    accountingPrice.innerText = "$35"
}
//kod dla terminal
terminal.addEventListener("input" , handleAddTerminal)
function handleAddTerminal(){
    listTerminal.classList.toggle("open")

    terminalPrice.innerText = "$5"
}
//kod do rozwinięcia menu i zwinięcia

choosePackage.addEventListener("click" , handleShowOptions)
function handleShowOptions(){
    list1.classList.toggle("open")
}

//kod do wyboru opcji

optionsValue.forEach(function (optionValue){
    optionValue.addEventListener("click" , handleAddOption)
    function handleAddOption (){
        selectInput.innerText = optionValue.dataset.value
        listOptions.classList.add("open")
        optionsCalc.innerText = optionValue.dataset.value

        if (optionValue.dataset.value === "Basic"){
            optionsPrice.innerText = "$0"
        }
        if (optionValue.dataset.value === "Professional"){

            optionsPrice.innerText = "$25"
        }
        if (optionValue.dataset.value === "Premium"){
            optionsPrice.innerText = "$60"
        }
        return optionsPrice.innerText
    }

})
// kod do total

listItems.forEach(function (listItem){
    listItem.addEventListener("input" , handleAddTotal)
    function handleAddTotal(){
        total.classList.add("open")
        totalPrice.innerText = 0
       }
})



