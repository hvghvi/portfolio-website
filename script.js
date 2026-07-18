function openModal(name) {
    document.getElementById('overlay-' + name).classList.add('open')

}

function closeModal(name) {
    document.getElementById('overlay-' + name).classList.remove('open')
}

// click outside to close feature for a modal 
document.getElementById('overlay-about').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeModal('about')
    }
})


// click outside to close feature for a modal 
document.getElementById('overlay-projects').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeModal('projects')
    }
})


// click outside to close feature for a modal 
document.getElementById('overlay-contact').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeModal('contact')
    }
})