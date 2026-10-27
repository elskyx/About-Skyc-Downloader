document.getElementById('cli-copy')?.addEventListener('click', function () {
  navigator.clipboard.writeText('npx @elskyx/skyc');
  this.textContent = 'Copied!';
  setTimeout(() => (this.textContent = 'Copy'), 1500);
});
