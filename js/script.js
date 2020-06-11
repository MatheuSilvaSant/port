

window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
            document.querySelector(".preloader").style.display = "none";
    },2000)
})



// Aside Navbar

const nav =  document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList =  navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection =  allSection.length;

for(let i=0; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
    
            removeBackSectionClass();

        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }

        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){

                addBackSectionClass(j);
               // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);  

        if(window.innerWidth < 1200){
            asideSectionToggleBtn();
        }
    })
}

function showSection(element){

        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
    const target = element.getAttribute("href").split("#")[1];

        //console.log(target);

        document.querySelector("#"+target).classList.add("active")
}

function addBackSectionClass(num){
    allSection[num].classList.add("back-section");
}

function removeBackSectionClass(){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
}


function updateNav(element){

    for(i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
    }
}


document.querySelector(".hire-me").addEventListener("click",function(){
    //console.log(this);
    const sectionIndex =  this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    // removeBackSectionClass();
    // addBackSectionClass(sectionIndex);
})



const navTogglerBtn =  document.querySelector(".nav-toggler"),
      aside =  document.querySelector(".aside");

      navTogglerBtn.addEventListener("click",asideSectionToggleBtn)
            // asideSectionToggleBtn();


function asideSectionToggleBtn(){
          aside.classList.toggle("open");
          navTogglerBtn.classList.toggle("open");

          for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
      }




     