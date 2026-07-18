function openModal(name) {
    document.getElementById('overlay-' + name).classList.add('open')
    
}

function closeModal(name) {
    document.getElementById('overlay-' + name).classList.remove('open')
}
