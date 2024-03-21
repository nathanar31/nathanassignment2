const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

(function() {
  const accordionHeading = document.querySelectorAll(".accordion");
  const accordionContent = document.querySelectorAll(".accordion-content");

  for (let i = 0; i < accordionHeading.length; i++) {
    accordionHeading[i].onclick = function() {
      if (this.nextElementSibling.style.maxHeight) {
        hideContent();
      } else {
        showContent(this);
      }
    };
  }

  function showContent(elem) {
    hideContent();
    elem.classList.add("active");
    elem.nextElementSibling.style.maxHeight =
      elem.nextElementSibling.scrollHeight + "px";
  }

  function hideContent() {
    for (let i = 0; i < accordionContent.length; i++) {
      accordionContent[i].style.maxHeight = null;
      accordionHeading[i].classList.remove("active");
    }
  }
  })();

  