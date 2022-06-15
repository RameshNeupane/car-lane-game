const road = document.querySelector(".road");
const myCar = document.createElement("img");
myCar.setAttribute("src", "../assets/my-car.png");
myCar.setAttribute("alt", "my car");
myCar.classList.add("my-car");
road.appendChild(myCar);

console.log(myCar.getBoundingClientRect());

document.addEventListener("keydown", (event) => {
  console.log(event);
});
