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
  console.log(color);

  list.innerHTML += `<li style="color: ${color}">${color} <div> 
  <button class="btn" data-color="${color}">Apply</button>
  <button class="btn">Delete</button>
  </div>  </li>`;
}

clearBtn.addEventListener("click", () => (list.textContent = " "));

document.addEventListener("click", (e) => {
  if (e.target.textContent == "Delete") {
    e.target.parentElement.parentElement.remove();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.textContent == "Apply") {
    const colorr = e.target.dataset.color;
    document.body.style.backgroundColor = colorr;
    console.log(colorr);
  }
});

document.getElementById("refreshBtn").addEventListener("click", function () {
  location.reload();
});
