let ronds = Array.from(document.querySelectorAll("div.rond"));
console.log(ronds);
let html = document.querySelector("html");
let overlay;
let pos;
ronds.forEach((rond) => {
    rond.addEventListener("click", (e) => {
        pos = ronds.indexOf(rond) + 1;
        overlay = document.getElementById(`overlay-${pos}`);
        overlay.style.display = "block";
        html.style.overflow = "hidden";
    });
});

let closers = document.querySelectorAll("span.overlay-closer");
closers.forEach((closer) => {
    closer.addEventListener("click", (e) => {
        e.preventDefault();
        overlay.style.display = "none";
        html.style.overflowY = "scroll";
    })
})

