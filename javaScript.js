
const heading = document.getElementById('heading');
const progress = document.getElementById('progress');

let isFull = false; 

heading.addEventListener('click', () => {
if (isFull) {
    progress.style.width = '0%';
    isFull = false;
} else {
    progress.style.width = '100%';
    isFull = true;
}
});
