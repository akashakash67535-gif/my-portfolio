// up};down
const pages = ["index.html", "about.html", "education.html", "skills.html", "contact.html"];

function getCurrentIndex() {
    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    return pages.indexOf(currentPage);
}

window.nextPage = function () {
    let current = getCurrentIndex();
    window.location.href = pages[(current + 1) % pages.length];
};

window.prevPage = function () {
    let current = getCurrentIndex();
    window.location.href = pages[(current - 1 + pages.length) % pages.length];
}

// Highlight
const links = document.querySelectorAll(".icon a");

let currentPage = window.location.pathname.split("/").pop();

if (currentPage === "") {
    currentPage = "index.html";
}

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
 
// background
document.addEventListener("mousemove", function(e) {
    let x = (e.clientX / window.innerWidth - 1.0) * 40;
    let y = (e.clientY / window.innerHeight - 1.0) * 40;

    document.querySelector(".img").style.transform =`translate(${x}px, ${y}px)`;
});


  
// typing
  const words = ["Web Developer"];
  let wordIndex = 0;
  let charIndex = 0;

  function typeEffect() {
    let currentWord = words[wordIndex];
    document.getElementById("change").textContent =
      currentWord.substring(0, charIndex++);

    if (charIndex > currentWord.length) {
      setTimeout(() => {
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
        typeEffect();
      }, 1000);
    } else {
      setTimeout(typeEffect, 100);
    }
  }

  typeEffect();





  

