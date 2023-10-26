


let li_dropdown_services = document.getElementById("li-dropdown-services")
let dropdown_services = document.querySelector(".dropdown-services")
const nav_underline = document.querySelectorAll(".nav-underline")



const navigation = document.querySelector(".nav-container")
const header = document.querySelector("header");


let lastScrollTop = 0;
document.addEventListener("scroll", () => { 


    //Add degress to the top then fixed it in the position.
    let counter = 0
    while(counter > -170){
    counter -= 2;
    navigation.style.top  = `${counter}px`
    if(counter > -170){
        navigation.classList.add("bottom-border-line")
    }else if (window.scrollY == 0 ){
        navigation.classList.remove("bottom-border-line")
    }
    }

var st = window.pageYOffset || document.documentElement.scrollTop; 
if (st > lastScrollTop){
} else {
    navigation.style.top  = `${0}px`

}
lastScrollTop = st <= 0 ? 0 : st; 

})




for (let i = 0; i < nav_underline.length; i++) {
    nav_underline[i].addEventListener("mouseover", (event) => {
        
        dropdown_services.classList.remove("displayBlock")
        navigation.classList.remove("nav-expand")
        navigation.classList.remove("bottom-border-line")
    
    });
  }




document.addEventListener('DOMContentLoaded', function() {
 
    var hasChildren = document.querySelectorAll('.has-children');
    for (var i = 0; i < hasChildren.length; i++) {
      hasChildren[i].addEventListener('click', function() {
        var childUL = this.children[0];
        childUL.style.display = childUL.style.display === 'block' ? 'none' : 'block';
        const child = document.querySelector(".children");
        child.classList.toggle("displayBlock")
        var iconArrow = document.querySelector('.icon-arrow');
        iconArrow.classList.toggle('open');
      });
    }
  });
  
