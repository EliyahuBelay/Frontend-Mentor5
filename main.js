let btn = document.getElementById("btn");
let rate_numbers = document.getElementsByClassName("rate_number");
let ratingNumbersContainer = document.getElementsByClassName("rating_numbers");
let state = 0;


for (let rate_number of rate_numbers) {
    rate_number.addEventListener('click',()=>{
        state = Number(rate_number.innerText);
        ratingNumbersContainer[0].style.border = '';
    })
}


btn.onclick = ()=>{
    if (state == 0) {
        ratingNumbersContainer[0].style.border = "solid 1px red";
        return
    }
    let containerAllContent = document.getElementsByClassName('container_all_content');
    let container_thank_you_message = document.getElementsByClassName("container_thank_you_message");
    let userChoosenNumber = document.getElementById("userChoosenNumber");
    containerAllContent[0].classList.add("hidden");
    userChoosenNumber.innerHTML = state;
    container_thank_you_message[0].classList.remove("hidden");
};
