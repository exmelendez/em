var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//for read more section
const btn = document.getElementById("more-bio-btn");

btn.addEventListener("click", () => { 
  let btnVal = document.getElementById("more-bio-btn").value;
  let moreText = document.getElementById("full-bio-p");
  let readMoreSection = document.getElementById("r-more");
  let readLessSection = document.getElementById("r-less");
  
  if (btnVal === "active") {
      document.getElementById("more-bio-btn").value = "not-active";
      readLessSection.style.display = "inline";
      readMoreSection.style.display = "none";
      moreText.style.display = "inline";
  
  } else {
      document.getElementById("more-bio-btn").value = "active";
      readLessSection.style.display = "none";
      readMoreSection.style.display = "inline";
      moreText.style.display = "none";
  }
});
