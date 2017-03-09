
    var target = { a: 1 };
 		
    var source1 = { b: 2 };
    var source2 = { c: 3 };
    document.write("===var target = { a: 1 };==<br>"); 
    document.write("===var source1 = { b: 2 };==<br>"); 
    document.write("===var source2 = { c: 3 };==<br>"); 
    Object.assign(target, source1, source2);
    document.write("value:"+JSON.stringify(target)); 