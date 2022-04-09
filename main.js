function addPage () {
 window.location = "addition.html"
} 
function subPage () {
    window.location = "subtraction.html"
   } 
   function mulPage () {
    window.location = "multiplication.html"
   }
   function divPage () {
    window.location = "division.html"
   }
   function addOperation () {
        var addAnswer = Number(document.getElementById("add_input_1").value) +
        Number(document.getElementById("add_input_2").value);
       document.getElementById("addResult").innerHTML = addAnswer;  
   }
   function subOperation () {
    var subAnswer = Number(document.getElementById("sub_input_1").value) -
    Number(document.getElementById("sub_input_2").value);
   document.getElementById("subResult").innerHTML = subAnswer;  
}
function mulOperation () {
    var mulAnswer = Number(document.getElementById("mul_input_1").value) *
    Number(document.getElementById("mul_input_2").value);
   document.getElementById("mulResult").innerHTML = mulAnswer;  
}
function divOperation () {
    var divAnswer = Number(document.getElementById("div_input_1").value) /
    Number(document.getElementById("div_input_2").value);
   document.getElementById("divResult").innerHTML = divAnswer;  
}