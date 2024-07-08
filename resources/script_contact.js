// When the user scrolls down 50px from the top of the document, resize the header's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("name").style.fontSize = "2.5rem";
//     document.getElementById("header-text-title").style.fontSize = "1.0rem";
//     document.getElementById("header-text-location").style.fontSize = "1.0rem";
//     document.getElementById("header").style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.12)";
//   } else {
//     document.getElementById("name").style.fontSize = "4.0rem";
//     document.getElementById("header-text-title").style.fontSize = "1.2rem";
//     document.getElementById("header-text-location").style.fontSize = "1.2rem";
//     document.getElementById("header").style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.00)";
//   }
// }

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("nav").style.backdropFilter = "blur(6px)";
    document.getElementById("nav").style.backgroundColor = "rgba(54, 57, 59 ,0.5)";
    document.getElementById("personal").style.color = "#E9E9E9";
    document.getElementById("resume").style.color = "#E9E9E9";
    document.getElementById("profession").style.color = "#E9E9E9";
    document.getElementById("contact").style.color = "#E9E9E9";
    document.getElementById("contact").style.backgroundColor = "rgba(61,63,64,0.5)";
  } else {
    document.getElementById("nav").style.backdropFilter = "none";
    document.getElementById("nav").style.backgroundColor = "rgba(54, 57, 59 ,0.0)";
    document.getElementById("personal").style.color = "#282B30";
    document.getElementById("resume").style.color = "#282B30";
    document.getElementById("profession").style.color = "#282B30";
    document.getElementById("contact").style.color = "#282B30";
    document.getElementById("contact").style.backgroundColor = "rgba(209,209,209,0.5)";
  }
}

