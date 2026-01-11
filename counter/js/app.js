const counterElement = document.getElementById("counter");
const pluBtn = document.getElementById("pluBtn");
const minusBtn = document.getElementById("minusBtn");

let counter = 0;

const updateCounter = (value)=>{
  counter += value
  counterElement.textContent=counter;
  pluBtn.disabled = counter >=10;
  minusBtn.disabled = counter <=0 ;
}
updateCounter(0)
pluBtn.addEventListener("click",()=>{
  updateCounter(1)
})
minusBtn.addEventListener("click",()=>{
  updateCounter(-1)
})

