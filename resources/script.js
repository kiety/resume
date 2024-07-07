// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("name").style.fontSize = "2.5rem";
    document.getElementById("header").style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.12)";
  } else {
    document.getElementById("name").style.fontSize = "4.0rem";
    document.getElementById("header").style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.00)";
  }
}