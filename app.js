let a = prompt("Nechta rang kerak");
const list = document.querySelector("ol");
const color = document.querySelector("h1");
const clearBtn = document.querySelector("#clear");

const colors = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const randomColor = () => {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += colors[Math.trunc(Math.random() * colors.length)];
  }
  return color;
};

for (let i = 0; i < Number(a); i++) {
  const color = randomColor();

  list.innerHTML += `<li style="color: ${color}">${color} 
  <button class="btn" >Apply</button>
  <button class="btn" >Delete</button>
 </li>`;
}

clearBtn.addEventListener("click", () => {
  list.textContent = " ";
});
