var nav = document.querySelector('sec_1')

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 700) {
    sec_1.classList.add('bg-dark', 'shadow')
  } else {
    sec_1.classList.remove('bg-dark', 'shadow')
  }
})
