const container = document.getElementById('container');
const divs = Array(16);
for (let i = 0; i < divs.length; i++) {
  const temp = document.createElement('div');
  temp.classList.add('cell');
  console.log(container.offsetWidth);
  let width = (container.offsetHeight / 4)  + "px";
  temp.style.width = width;
  temp.style.height = width;
  container.appendChild(temp);
  divs[i] = temp;
}
console.log(divs);