var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname)
{
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu =document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function  closemenu(){
    sidemenu.style.right="-200px";
}

  const cvBtn = document.querySelector('.cv-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      cvBtn.classList.add('show');
    } else {
      cvBtn.classList.remove('show');
    }
  });

