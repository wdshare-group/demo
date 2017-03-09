function add(...values) {
   let sum = 0;
 
   for (var val of values) {
      sum += val;
   }
   
 document.write("add(1, 2, 3):"+sum);
   return sum;

}
 
add(1, 2, 3) // 6