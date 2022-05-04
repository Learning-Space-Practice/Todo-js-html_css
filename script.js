const txt = document.querySelector(".input");
const btn = document.querySelector("#btn");
const ul = document.querySelector(".ul");

// let arr = [{ 
//   id: Date.now(),
//   text: "test", 
//   cheked: false 
// }];

btn.addEventListener("click", () => {
  if(txt.value === '')return

  creatLi(txt.value);

  // let newList = { 
  //   id: Date.now(),
  //   text: txt.value, 
  //   cheked: false 
  // };
  // arr.push(newList);
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

    let li = btn.parentElement;
    li.classList.add("remove");

  });
}

// if (arr.length === 0) {
//   ul.innerHTML = "у вас кончились дела ";
// } else {
//   for (let i = 0; i < arr.length; i++) {
//     creatLi(arr[i].text);

//   }
// }
