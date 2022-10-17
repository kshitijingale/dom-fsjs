const btn = document.querySelector('.btn-cta-big .login-btn-text')

btn.addEventListener('mouseover', (e) => {
    btn.style.background = 'red'
})

btn.addEventListener('mouseout', (e) => {
    btn.style.background = '#feac32'
})
