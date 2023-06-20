const choosePackage = document.querySelector(".select__input")
const list = document.querySelector(".select__dropdown")
const optionsValue = document.querySelectorAll("li[data-value]")
const listElements = document.querySelectorAll("li")
const selectInput = document.querySelector(".select__input")


//zmienne do produktu//
const product = document.getElementById("products")
const listProduct = document.querySelector(".list__item[data-id = products]")
const productCalc = document.querySelector(".list__item[data-id = products] .item__calc")
const productPrice = document.querySelector(".list__item[data-id = products] .item__price")

//zmienne dla

const order = document.getElementById("orders")
const listOrder = document.querySelector(".list__item[data-id = orders]")
const orderCalc = document.querySelector(".list__item[data-id = orders] .item__calc")
const orderPrice = document.querySelector(".list__item[data-id = orders]  .item__price")







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














optionsValue.forEach(function (optionValue){
    optionValue.addEventListener("click" , addOption)
    function addOption (){
        selectInput.innerText =`${optionValue.dataset}`
    }
})












choosePackage.addEventListener("click" , handleShowOptions)
function handleShowOptions(){
    list.style.display = "block"
}

