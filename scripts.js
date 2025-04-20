const toggleBtn = document.getElementById('dark-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
