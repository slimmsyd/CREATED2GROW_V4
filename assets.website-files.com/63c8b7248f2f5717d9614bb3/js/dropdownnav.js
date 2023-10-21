


let li_dropdown_services = document.getElementById("li-dropdown-services")
let dropdown_services = document.querySelector(".dropdown-services")
const nav_underline = document.querySelectorAll(".nav-underline")



const navigation = document.querySelector(".nav-container")
const header = document.querySelector("header");


let lastScrollTop = 0;
document.addEventListener("scroll", () => { 
    navigation.classList.remove("nav-expand")


    //Add degress to the top then fixed it in the position.
    let nav_track_point = navigation.offsetTop
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


dropdown_services.addEventListener("mouseover", () => { 
            
})

li_dropdown_services.addEventListener("mouseover", () => { 
    if(!dropdown_services.classList.contains("displayBlock")){
        console.log("this is working tho")
    dropdown_services.classList.add("displayBlock")
    navigation.classList.add("nav-expand")
    navigation.classList.add("bottom-border-line")
    
        
    }
        //check if casstudes sitll has displa block open
  
    header.addEventListener("mouseover", () => { 
        dropdown_services.classList.remove("displayBlock")
        navigation.classList.remove("nav-expand")
        navigation.classList.remove("bottom-border-line")
    })
    
})


for (let i = 0; i < nav_underline.length; i++) {
    nav_underline[i].addEventListener("mouseover", (event) => {
        
        dropdown_services.classList.remove("displayBlock")
        navigation.classList.remove("nav-expand")
        navigation.classList.remove("bottom-border-line")
    
    });
  }



//   function menuOnClick() {
//     document.getElementById("menu-bar").classList.toggle("change");
//     document.getElementById("mobile-nav").classList.toggle("change");
//     document.getElementById("menu-bg").classList.toggle("change-bg");
//   }
document.addEventListener('DOMContentLoaded', function() {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.addEventListener('click', function() {
      var bar = document.querySelector('.bar');
      bar.classList.toggle('animate');
      var mobileMenu = document.querySelector('.mobile-menu');
      mobileMenu.classList.toggle('active');
      return false;
    });
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
  
//   const menuBar = document.getElementById("menu-bar");
//   const mobileNav = document.getElementById("mobile-nav");
//   const menuBg = document.getElementById("menu-bg");
//   const services = document.querySelector('#mobile-nav a[href="#"]');
//   const servicesDropdown = document.createElement("ul");
//   servicesDropdown.style.display = "none";
  
//   const servicesList = ['Service 1', 'Service 2', 'Service 3', 'Service 4'];
//   for (let i = 0; i < servicesList.length; i++) {
//     const listItem = document.createElement("li");
//     const link = document.createElement("a");
//     link.href = "#";
//     link.textContent = servicesList[i];
//     listItem.appendChild(link);
//     servicesDropdown.appendChild(listItem);
//   }
  
//   services.addEventListener("click", () => {
//     servicesDropdown.style.display = (servicesDropdown.style.display === "none") ? "block" : "none";
//   });
  
//   services.addEventListener("mouseover", () => {
//     servicesDropdown.style.display = "block";
//   });
  
//   services.addEventListener("mouseout", () => {
//     servicesDropdown.style.display = "none";
//   });
  
//   menuBar.addEventListener("click", () => {
//     mobileNav.classList.toggle("change");
//     menuBg.classList.toggle("change-bg");
//   });
  
//   services.parentNode.insertBefore(servicesDropdown, services.nextSibling);
  

