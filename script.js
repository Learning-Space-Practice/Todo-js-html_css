const txt = document.querySelector(".input");
const btn = document.querySelector("#btn");
const ul = document.querySelector(".ul");

let arr = [{ text: "test", cheked: false }];

btn.addEventListener("click", () => {
  creatLi(txt.value);

  let newList = { text: txt.value, cheked: false };
  arr.push(newList);
  console.log(arr);
});

function creatLi(a) {
  let li = document.createElement("li");
  li.textContent = a;

  let close = document.createElement("button");
  close.textContent = "X";

  li.append(close);

  ul.append(li);

  txt.value = "";

  close.addEventListener("click", (e) => {
    let btn = e.target;
    console.log(btn.parentElement);

    let li = btn.parentElement;
    li.classList.add("remove");
  });
}

if (arr.length === 0) {
  ul.innerHTML = "у вас кончились дела ";
} else {
  for (let i = 0; i < arr.length; i++) {
    creatLi(arr[i].text);
    console.log(arr);
  }
}
