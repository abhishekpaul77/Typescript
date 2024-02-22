const detectType = (val: number | string) => {
  if (typeof val === "string") {
    let uppercase = val.toUpperCase();
    return uppercase;
  }
  return val + 7;
};

function provideId(id: string | null){
    if(!id){
        console.log("ID not found");
        return
    }
    return id.toUpperCase();
}


// function printAll(strs: string | string[] | null) {
//     if (strs && typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     }
//   }

function printAll(strs: string | string[] | null) {
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
}