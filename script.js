const container = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you-state");
const submitButton = document.getElementById("submit");
const rateButton = document.getElementById("rate");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", ()=>{
    thanksContainer.classList.remove("hidden");
    container.style.display ="none";
})

rateButton.addEventListener("click", ()=>{
    thanksContainer.classList.add("hidden");
    container.style.display ="block";
})

rates.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML;
    })
})