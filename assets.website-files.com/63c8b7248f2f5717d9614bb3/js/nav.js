
 const header_toggle = document.querySelector(".header_toggle")
 console.log(header_toggle)
const header_toggle_bar = document.querySelector(".header_toggle_bar");
const header_background = document.querySelector('.header_background')
const header_navigation_menu = document.querySelector(".header_navigation_menu")
const header_links = document.querySelector(".header_links")
const second = document.querySelector(".second");
const first = document.querySelector(".first");


const links = document.querySelectorAll(".link")

const services_close = document.querySelector(".services_close")
const dropdown = document.querySelector(".dropdown")

//Toggle links 
function toggleLinks()
{ 
    links.forEach(link => { 
        link.classList.toggle("active_link")
    })
}



header_toggle.addEventListener("click", function()
{
    header_background.classList.toggle("opacity_header");
    header_links.classList.toggle("header_links_open")
    header_navigation_menu.classList.toggle("header_navigation_menu_scale")
    header_navigation_menu.classList.toggle("active_link")
    second.classList.toggle("open")
    header_toggle.classList.toggle("header_toggle_active")
    first.classList.toggle("header_toggle_bar_active")


    //For smoother animations 
    setTimeout(() => {
        requestAnimationFrame(() => {
            requestAnimationFrame(toggleLinks);
          });
    }, (100));

    services_close.addEventListener("mouseover", ()  => { 
        console.log("This is working")
    
    })
    dropdown.classList.remove("active_dropdown")

})


if (window.innerWidth < 768) {
    header_toggle.addEventListener("touchstart", function() {
        
        header_toggle.classList.toggle("bg_white")
        header_toggle_bar.classList.toggle("add_green")
        second.classList.toggle("add_green")
        // if(header_toggle.classList.contains("bg_white"))
        // {
        //     header_toggle.classList.remove("bg_white")
        // }
        console.log("This is the mobile version")

    });
  }


header_toggle.addEventListener("mouseover", function()
{   
    header_toggle_bar.classList.add("add_green")
    second.classList.add("add_green")
    header_toggle.classList.add("bg_white")


});
    
header_toggle.addEventListener("mouseleave", function()
{   
    header_toggle_bar.classList.remove("add_green")
    second.classList.remove("add_green")
    header_toggle.classList.remove("bg_white")
    

})



