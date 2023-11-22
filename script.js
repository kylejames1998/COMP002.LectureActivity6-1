const button = document.getElementById("myButton");

button.addEventListener('click', function(event) {
    console.log("Button was clicked");
}, {once: true });


let link = document.querySelector("a");
link.addEventListener("click", function(event) {
    event.preventDefault();
    alert("No distractions! I'm coding!");
});