const number = document.getElementById('number');
const generateBtn = document.getElementById('generateBtn');

const randomNumberGenerator = () => {
  const randomNumber = Math.floor(Math.random() * 3 + 1)+24;
  number.textContent = randomNumber + " September Would be a perfect date for swagatam";
  newwevent();
};
const newwevent=()=>{
    const at=document.getElementById('after');
    at.style.display="block"
}
generateBtn.addEventListener('click', randomNumberGenerator);

// randomNumberGenerator();