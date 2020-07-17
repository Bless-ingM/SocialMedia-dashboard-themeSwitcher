const checked = document.querySelector('#checkbox')

checked.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
})