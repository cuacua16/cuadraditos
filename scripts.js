const div = document.getElementById("container");

const nCuadraditos = 500;

const hexa = [
  "0",
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

const randomHexa = () => {
  return hexa[Math.floor(Math.random() * 16)];
};

const randomColor = () => {
  return `#${randomHexa()}${randomHexa()}${randomHexa()}${randomHexa()}${randomHexa()}${randomHexa()}`;
};

const fragment = document.createDocumentFragment();

for (let i = 0; i < nCuadraditos; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  fragment.append(square);
}

div.append(fragment);

const cuadraditos = document.querySelectorAll(".square");

for (let cuadradito of cuadraditos) {
  cuadradito.addEventListener("mouseover", () => {
    let color = randomColor();
    cuadradito.style.background = color;
    cuadradito.style.boxShadow = `0 0 14px ${color}`;
    setTimeout(() => {
      cuadradito.style.background = "#1d1d1d";
      cuadradito.style.boxShadow = `0 0 2px #000`;
    }, 500);
  });
}
