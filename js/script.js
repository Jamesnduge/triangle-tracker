var tTrack = function() {
    var sideA = document.getElementById("one").value;
    var sideB = document.getElementById("two").value;
    var sideC = document.getElementById("three").value;
    var ans = document.getElementById("answer");
    if (sideA === sideB && sideB === sideC) {
     ans.innerHTML = 'Your shape is an Equilateral triangle!';
   }
   else if (sideA === sideB && sideB !== sideC && sideA !== sideC && sideA + sideB > sideC) {
       ans.innerHTML = 'Your shape is an Isosceles triangle!';
   }
   else if (sideB !== sideA && sideC !== sideA && sideB === sideC && sideB + sideC > sideA) {
       ans.innerHTML = 'Your shape is an Isosceles triangle!';
   }
   else if (sideB !== sideC && sideB !== sideA && sideA === sideC && sideA + sideC > sideB) {
           ans.innerHTML = 'Your shape is an Isosceles triangle!';
   }
   else if (sideA > sideB + sideC && sideB > sideC + sideA && sideC > sideA + sideB) {
       ans.innerHTML = 'Your shape is NOT a triangle!';
   } else {
       ans.innerHTML = 'Your shape is an Scalene triangle!';
   }
};
