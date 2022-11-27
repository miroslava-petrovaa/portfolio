function solve(degrees){
	let output = "";

	if(degrees < 5) {
		output = "freezing";
	}
	else if(degrees < 11) {
		output = "cold";
	}
	else if(degrees < 16) {
		output = "cool";
	}
	else if(degrees < 21) {
		output = "mild";
	}
	else if(degrees < 26) {
        output = "warm";
	}
	else if(degrees < 30) {
		output = "hot";
	}
	else {
		output = "too hot";
	}
    console.log(output);
}

solve (16)
solve (42)
solve (-15)
solve (6)
solve (14)
solve (22)
solve (36.6)

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}