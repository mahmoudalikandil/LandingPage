/////////////////////////// --- Start --- ////////////////////////////////////////
const listOfSections = document.querySelectorAll("section");
//collect all sections on a variable
let navBarMenu = document.getElementById('navbar__list');
//set navbar menu with in a variable
const fragment = document.createDocumentFragment();
// get the fragment of the document

//this function is responsible for building the navbar
function navBuilding(){
    for(const section of listOfSections){
      //listing li of the navbar
        let navItemPart = document.createElement("li");
        navItemPart.className = "menu-link";
        navItemPart.innerHTML = "<p>" + section.dataset.nav + "</p>";
        fragment.appendChild(navItemPart);
        navBarMenu.appendChild(fragment);
      }
}
//this function will get the visible section in front of the user
function seenSection(){
    for(const section of listOfSections){
        const currentPosition = section.getBoundingClientRect();
        if(currentPosition.top>= -100){
return section.dataset.nav;
        }
    }
}
// this function will the active section the user scrolled to
function getActiveSection() {
    const visibleSections = seenSection();
    for (const section of listOfSections) {
      if (section.dataset.nav == visibleSections) {
        changeActiveNav(section);
      }
    }
  }

  // this will be listening to any scroll event

function scrollListener() {
    document.addEventListener("scroll", function () {
        getActiveSection();
    });
}

//this will set the active navbar and assign value to it in the class name to make sure that it is active
  function changeActiveNav(section) {
    const navbars = document.querySelectorAll(".menu-link");
    for (const navbar of navbars) {
      if (section.dataset.nav != navbar.innerText) {
        navbar.classList.remove("current-link");
      } else {
        navbar.classList.add("current-link");
      }
    }
  }

  //this will be litening to the click of the customer and on click it will go to the clicked section
function scrolling() {
    navBarMenu.addEventListener("click", function (event) {
      document.querySelector(`[data-nav="${event.target.innerText}"]`).scrollIntoView();
    });
}

//calling the functions


navBuilding()
scrolling()
scrollListener() 

