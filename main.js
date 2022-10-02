let word = document.getElementsByClassName("user_feedback");
let btn = document.getElementById("btn");
let containerAllContent = document.getElementsByClassName("container_all_content");
let containerTYMessage = document.getElementsByClassName("container_thank_you_message");
btn.onclick = function UserChoice(){
    console.log(containerAllContent.length);
    containerAllContent.style.display = "none";
    console.log("hello world");
}
// word.onclick(go);


// function helloWorldApeare(){
//     body.append("hello world");
// }
// body.onclick(helloWorldApeare());

// container_all_content
// container_thank_you_message