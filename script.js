let isDragging = false
let offsetX = 0
let offsetY = 0
let draggedModal = null
let zTop = 100

// open
function openModal(name) {
    const modal = document.getElementById('modal-' + name)
    
    modal.style.display = 'flex'  // make it visible first
    
    // now it has a size, calculate center
    modal.style.left = (window.innerWidth / 2 - modal.offsetWidth / 2) + 'px'
    modal.style.top = (window.innerHeight / 2 - modal.offsetHeight / 2) + 'px'
    modal.style.transform = 'none'
    modal.style.zIndex = ++zTop

    modal.classList.add('open')  // triggers animation after position is set
}


// close with animation
function closeModal(name) {
    const modal = document.getElementById('modal-' + name)

    modal.classList.add('closing')

    modal.addEventListener('animationend', () => {
        modal.classList.remove('open')
        modal.classList.remove('closing')
        modal.style.display = 'none'  // add this
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


// test area below

const btns = document.querySelectorAll('a');

btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    removeActiveClass();
    btn.classList.add('active');
  })
})

function removeActiveClass() {
  btns.forEach(function(btn) {
    btn.classList.remove('active');
  })
}