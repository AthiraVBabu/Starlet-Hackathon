const colorTherapy = document.querySelector('.color-therapy');
const colorName = document.querySelector('.color-name');

// Array of colors associated with different emotions or moods
const colors = [
  { color: '#4287f5', emotion: 'Calmness' },
  { color: '#ffcc00', emotion: 'Happiness' },
  { color: '#00cc66', emotion: 'Tranquility' },
  { color: '#ff6666', emotion: 'Energizing' },
  { color: '#9933ff', emotion: 'Creativity' },
  { color: '#ff9900', emotion: 'Confidence' },
  { color: '#66ccff', emotion: 'Peace' },
  { color: '#ff3399', emotion: 'Passion' }
];

// Function to change the background color on click
function changeBackgroundColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const { color, emotion } = colors[randomIndex];
  colorTherapy.style.backgroundColor = color;
  colorTherapy.textContent = emotion;
}
function animateColorName() {
    colorName.classList.toggle('enlarged');
    colorName.classList.remove('enlarged');
    void colorName.offsetWidth; // Trigger reflow to restart animation
    colorName.classList.add('enlarged');
  }
  
  colorName.addEventListener('animationend', animateColorName);
  
  // Trigger initial animation
  animateColorName();

colorTherapy.addEventListener('click', changeBackgroundColor);
