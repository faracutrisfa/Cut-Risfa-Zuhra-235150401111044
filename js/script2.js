document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("#navbar a");
  
    navbarLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href"); 
        const targetElement = document.querySelector(targetId); 
  
        if (targetElement) {
          const offset = 70; 
          const targetPosition = targetElement.offsetTop - offset;
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth" 
          });
        }
      });
    });
    
    //mixitup project section
    var mixer = mixitup(".portofolio-list");

    //circle skills
    const circles = document.querySelectorAll('.circle');
    circles.forEach(elem=>{
        var dots = elem.getAttribute("data-dots");
        var marked = elem.getAttribute("data-percent");
        var percent = Math.floor(dots*marked/100);
        var points = "";
        var rotate = 360/dots;

        for(let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        elem.innerHTML = points;
    })
});  

