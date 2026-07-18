let zTop = 100

// open
function openModal(name) {
    const modal = document.getElementById('modal-' + name)
    modal.classList.add('open')
    modal.style.zIndex = ++zTop
    modal.style.transform = 'translate(-50%, -50%)'  // reset position to center
}

// close with animation
function closeModal(name) {
    const modal = document.getElementById('modal-' + name)

    modal.classList.add('closing')

    modal.addEventListener('animationend', () => {
        modal.classList.remove('open')
        modal.classList.remove('closing')
    }, { once: true })
}

// clicking a modal brings it to front
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('mousedown', () => {
        modal.style.zIndex = ++zTop
    })
})
