


var originalColor = document.body.style.backgroundColor; 

document.getElementById("highlight-btn").addEventListener("click", function() {
  if (document.body.style.backgroundColor === originalColor) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = originalColor;
  }
});


var divs = document.querySelectorAll('div'); 
var originalColors = []; 
var h5Elements = document.querySelectorAll('h5'); 
var originalStyles = []; 

divs.forEach(function(div) {
  originalColors.push(div.style.backgroundColor);
});

h5Elements.forEach(function(h5) {
  originalStyles.push(h5.style.backgroundColor); 
});

document.getElementById("highlight-btn").addEventListener("click", function() {
  divs.forEach(function(div, index) {
    if (div.style.backgroundColor === originalColors[index]) {
      div.style.backgroundColor = "#1e1f21"; 
    } else {
      div.style.backgroundColor = originalColors[index]; 
    }
  });

  h5Elements.forEach(function(h5, index) {
    if (h5.style.backgroundColor === originalStyles[index]) {
      h5.style.backgroundColor = "yellow"; 
    } else {
      h5.style.backgroundColor = originalStyles[index]; 
    }
  });
  
  var endText = document.getElementById("end-text"); 
  if (endText.style.opacity === "1") {
    endText.style.opacity = "0"; 
  } else {
    endText.style.opacity = "1"; 
  }
});
    