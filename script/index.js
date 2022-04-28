let close = document.querySelector('.close-btn');
let container = document.querySelector('.chat-box-container');
let open = true;

container.style.display = "block";

function closeOut() {
if (open === true) {
container.style.display = "none";
open = false;

}
}
close.addEventListener("click", closeOut);