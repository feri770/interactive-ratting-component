



let star = 0;
let rate = document.querySelectorAll('.rate-btn');





let i;
function unselectAll() {
    for (i = 0; i < rate.length; i++) {
        rate[i].style.backgroundColor = "";
    }
}

// loop through the options and add the event listener to each element
rate.forEach(stars => {
    stars.addEventListener('click', function () {
        unselectAll();
        this.style.backgroundColor = "var(--Orange)";
        this.style.color = "var(--White)";
    });
});



// function showThanksCard() {
//     var x = document.getElementById("rate-card");
//     if (x.style.display === "none") {
//         x.style.display = "flex";
//     } else {
//         x.style.display = "none";
//         console.log(star);
//     }
// }

function showThanksCard() {
    var x = document.getElementById("rate-card");
    var y = document.getElementsByClassName("thank-you-card");
    var z = document.getElementById("thanks");

    x.style.display = "none";
    z.style.display = "flex";

    // if (x.style.display === "none") {
    //     x.style.display = "flex";
    // } else {
    //     x.style.display = "none";

    // }




}


function star1() {
    star = 1;
    document.getElementById("the-star").innerHTML = star;
}
function star2() {
    star = 2;
    document.getElementById("the-star").innerHTML = star;
}
function star3() {
    star = 3;
    document.getElementById("the-star").innerHTML = star;
}
function star4() {
    star = 4;
    document.getElementById("the-star").innerHTML = star;
}
function star5() {
    star = 5;
    document.getElementById("the-star").innerHTML = star;
}





