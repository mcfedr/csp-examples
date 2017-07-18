document.addEventListener('DOMContentLoaded', () => {
  eval("document.querySelector('#test2').textContent = 'Hi from eval';")
  setTimeout("document.querySelector('#test2').textContent = 'Hi from eval';")
})
