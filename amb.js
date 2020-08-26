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
  s = d.getSeconds();
  h = d.getHours();
  m = d.getMinutes();
  x = s%100;
  ampm = h<12 ? "AM":"PM"
  weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  n = weekday[d.getDay()];
  document.getElementById("time").innerHTML = n+":   "+h%12+":"+m +":"+ x +" "+ ampm;
}