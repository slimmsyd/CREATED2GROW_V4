const accordion = document.querySelectorAll('.container');
const last_accord = document.querySelector(".container-last")
console.log(last_accord, "I found this here")
const first_accord = document.querySelector(".container-first")
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    console.log("this worked a little bit")
    this.classList.toggle('active')
  })
}

// first_accord.addEventListener("click", function() {
//   console.log("this works")
//   this.classList.toggle("active-first")
// })



