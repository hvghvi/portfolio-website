function openModal(name) {
    document.getElementById('overlay-' + name).classList.add('open')

}

function closeModal(name) {
    const overlay = document.getElementById('overlay-' + name)
    overlay.classList.add('closing')

    overlay.addEventListener('animationend', () => {
        overlay.classList.remove('open')
        overlay.classList.remove('closing')
    }, { once: true }) //listener goes away after closing
}


// these listeners should be updated !! 

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

//document.addEventListener('keydown', (e) => {
    //if (e.key === 'Escape') {
   //     closeModal('about')
   // }
// these current listeners would not work when theres multiple open
//feature might be removed in the future.
//not needed at all!

//drag feature below:

