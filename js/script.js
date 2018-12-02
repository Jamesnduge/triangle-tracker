var tTrack = function() {
    var sideA = parseInt(document.getElementById("one").value);
    var sideB = parseInt(document.getElementById("two").value);
    var sideC = parseInt(document.getElementById("three").value);
    var ans = document.getElementById("answer");
    if (sideB+sideC < sideA || sideC+sideA < sideB || sideB+sideA < sideC) {
        ans.innerHTML = 'Your shape is NOT a triangle!';
   }
   else if (sideA===sideB && sideB===sideC) {
       ans.innerHTML = 'Your shape is an Equilateral triangle!';
   }
   else if (sideA+sideB > sideC && sideB+sideC > sideA && sideA+sideC > sideB && sideA === sideB && sideB !== sideC && sideA !== sideC) {
       ans.innerHTML = 'Your shape is an Isosceles triangle!';
   }
   else if (sideA+sideB > sideC && sideB+sideC > sideA && sideA+sideC > sideB && sideB === sideC && sideB !== sideA && sideC !== sideA) {
       ans.innerHTML = 'Your shape is an Isosceles triangle!';
   }
   else if (ssideA+sideB > sideC && sideB+sideC > sideA && sideA+sideC > sideB && sideA === sideC && sideC !== sideB && sideA !== sideB) {
           ans.innerHTML = 'Your shape is an Isosceles triangle!';
   }
   else if (sideA+sideB > sideC && sideB+sideC > sideA && sideA+sideC > sideB && sideA !== sideB && sideB !== sideC && sideC !== sideA){
       ans.innerHTML = 'Your shape is an Scalene triangle!';
   }
   else {
       ans.innerHTML = 'Your shape is an Scalene triangle!';
   }
};
