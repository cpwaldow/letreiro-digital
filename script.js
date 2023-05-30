const btn = document.querySelector('button');
const h2 = document.getElementById('text');
const textArea = document.querySelector('textarea');
const container = document.querySelector('.text-container');
btn.addEventListener('click', () => {
  h2.innerText = textArea.value.toUpperCase();
  textArea.value = '';
  container.style.display = 'block';
});

h2.addEventListener('click', () => {
  container.style.display = 'none';
});
