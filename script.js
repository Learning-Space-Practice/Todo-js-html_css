const inputValue = document.querySelector(".input").value;
const btn = document.querySelector("#btn");
const ul = document.querySelector(".ul");
console.log(ul);
let arr = [{ text: "text" }, { text: "text" }];

function renderList() {
  let element = document.createElement("li");
  ul.append((element.textContent = inputValue));
  console.log(element);
}

btn.addEventListener("click", () => {
  console.log(arr);
  renderList();
  return arr.push({ inputValue });
});
