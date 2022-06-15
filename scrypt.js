console.log("active");

while (document.querySelectorAll("#Fahrenheit").value = !null) {
    document.querySelectorAll(".toggle").classList.toggle("active");
}
function run() {
  let celcius = document.querySelector("#celcius");
  let Fahrenheit = document.querySelector("#Fahrenheit");
  let kelvin = document.querySelector("#kelvin");
  let answer=document.querySelectorAll(".answer");

  if ((answer.value = null)) {
    answer.innerHTML = "enter a value to start";
    console.log(" no values");
} else {
    if (Fahrenheit =!null) {
    celcius.innerHTML = ((Fahrenheit.value-32)*(5/9));
      console.log('conerted from Fahrenheit')
    }
  }
 
  console.log("convert=complete");
}



document.getElementById('celcius').onclick = function() {
   if (document.querySelectorAll("#Fahrenheit").value = !null) {
       this.classList.toggle('active');
   } 
}