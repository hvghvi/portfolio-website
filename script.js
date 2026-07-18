let isDragging = false
let offsetX = 0
let offsetY = 0
let draggedModal = null
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


//for drag:
//mousedown + mousemove + mouseup

document.querySelectorAll('.modal-top-bar').forEach(titlebar => {
    titlebar.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('dot')) return

        isDragging = true
        draggedModal = titlebar.closest('.modal')
        draggedModal.style.zIndex = ++zTop

        offsetX = e.clientX - draggedModal.getBoundingClientRect().left
        offsetY = e.clientY - draggedModal.getBoundingClientRect().top
    })
})

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return

    draggedModal.style.left = e.clientX - offsetX + 'px'
    draggedModal.style.top  = e.clientY - offsetY + 'px'
    draggedModal.style.transform = 'none'
})


document.addEventListener('mouseup', () => {
    isDragging = false
    draggedModal = null
})
