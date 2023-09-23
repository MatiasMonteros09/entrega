const inputQuantity = document.querySelector(".input-quantity")
const btnIncrement = document.querySelector("#increment")
const btnDecrement = document.querySelector("#decrement")

let valueByDefault = parseInt(inputQuantity.value)

// Funciones Clik 

btnIncrement.addEventListener("click", () => {
    // 1 = 1 + 1 
    valueByDefault += 1
    inputQuantity.value = valueByDefault
})

btnDecrement.addEventListener("click", () => {
    if (valueByDefault === 1){
        return
    }
    // 1 = 1 - 1 
    valueByDefault -= 1
    inputQuantity.value = valueByDefault
})

// Toggle
// Constante Toggle Titles
const toggleDescription = document.querySelector(".title-description");
const toggleAdditionalInfo = document.querySelector(".title-additional-info");
const toggleReviews = document.querySelector(".title-reviews");

// Constante Contenido Texto
const contentDescription = document.querySelector(".text-description");
const contentAdditionalInfo = document.querySelector(".text-additional-info");
const contentReviews = document.querySelector(".text-reviews");

// Funciones Toggle
toggleDescription.addEventListener("click", () => {
    contentDescription.classList.toggle("hidden");
});

toggleAdditionalInfo-addEventListener("click", () => {
    contentAdditionalInfo.classList.toggle("hidden");
});

toggleReviews.addEventListener("click", () => {
    contentReviews.classList.toggle("hidden");
});