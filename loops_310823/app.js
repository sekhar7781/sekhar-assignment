//  for (let table = 1; table <= 20; table++){
//         console.log(`Table of ${table}:`);
//     for (let num = 1; num <= 10; num++) {
//        console.log(`${table} x ${num} = ${table*num}`);
//    }
//  }

 let table = 1;

  while (table <= 20) {
   let num = 1;
  
    while (num <= 10) {
      let result = table * num;
      console.log(table + " x " + num + " = " + result);
      num++;
    }
  
    console.log("-----------------------");
    table++;
  }

//  let num = 1;

//  do {
//    console.log(`Multiplication Table of ${num}:`);
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
//   }
//   num++;
//  } while (num <= 20);


  