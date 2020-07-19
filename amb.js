var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}




function myFunction() {
  alert("Form submitted sucessfully1111!");
}

function myClk() {
  d = new Date();
  day = d.get
  m = d.getSeconds();
  z = d.getHours();
  y = d.getMinutes();
  x = m%100;
  weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  n = weekday[d.getDay()];
  document.getElementById("time").innerHTML = n+":   "+z+":"+y +":"+ x;
}