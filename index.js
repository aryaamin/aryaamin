function websiteVisits(response) {
    document.querySelector(".website-counter").textContent = response.value;
}

    var i = 0;
    var j = 0;
    var txt = 'Hi, I am Arya.';
    var txt1 = 'CSE Sophomore @ IIT Bombay.';
    var speed = 200;
    var speed1 = 200;
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();

    function typeWriter1() {
      if (j < txt1.length) {
        document.getElementById("demo1").innerHTML += txt1.charAt(j);
        j++;
        setTimeout(typeWriter1, speed1);
      }
    }

    typeWriter1();

    var count = 0;

  function myFunction() {

   if(count%5 == 0){
    document.body.style.background = "linear-gradient(-45deg, khaki, orange, brown, skyblue)";
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "gradient 20s ease infinite";
    document.body.style.height = "100%";
   }
   if(count%5 == 1){
    document.body.style.background = "linear-gradient(-45deg, #ee7752, purple, #23a6d5, #23d5ab)";
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "gradient 20s ease infinite";
    document.body.style.height = "100%";
   }
   if(count%5 == 2){
    document.body.style.background = "linear-gradient(-45deg, #988012, #591298, black, #981249)";
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "gradient 20s ease infinite";
    document.body.style.height = "100%";
   }
   if(count%5 == 3){
    document.body.style.background = "linear-gradient(-45deg, cyan, seagreen, indigo, gray)";
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "gradient 20s ease infinite";
    document.body.style.height = "100%";
   }
   if(count%5 == 4){
    document.body.style.background = "linear-gradient(-45deg, red, black, darkgreen, darkblue)";
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "gradient 20s ease infinite";
    document.body.style.height = "100%";
   }
   count++;
}

// function CopyNumber() {

//   navigator.clipboard.writeText("+917567140864");

// }
