console.log("hello world");
const output = Object.create((e) => {
  console.log(e);
  {
    mother: "5";
  }
});

const result = output.mother;
console.log(result);
