const div = document.getElementById("container");
console.log(div);
const li = document.getElementsByTagName("li");
console.log(li);
console.log(li[6]);
const classs = document.getElementsByClassName("btn");
console.log(classs);
console.log(classs[2]);
console.log(classs.length);
const description = document.querySelector("h1");
console.log(description);
const forEach = document.querySelectorAll("li");
console.log(forEach);
forEach.forEach((item, i) => {
  console.log(`${i + 1}. Это номер элемента,`, `а это сам элемент`, item);
});
