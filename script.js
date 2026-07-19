let isDragging = false
let offsetX = 0
let offsetY = 0
let draggedModal = null
let zTop = 100
const isMobile = () => window.innerWidth <= 768

// open
function openModal(name) {
    const modal = document.getElementById('modal-' + name)
    if (modal.classList.contains('open')) return

    modal.style.display = 'flex'

    if (!isMobile()) {
        modal.style.left = (window.innerWidth / 2 - modal.offsetWidth / 2) + 'px'
        modal.style.top = (window.innerHeight / 2 - modal.offsetHeight / 2) + 'px'
        modal.style.transform = 'none'
    }

    modal.style.zIndex = ++zTop
    modal.classList.add('open')
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
//disabled for mobile devices
document.querySelectorAll('.modal-top-bar').forEach(titlebar => {
    titlebar.addEventListener('mousedown', (e) => {
        if (isMobile()) return
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

    let newLeft = e.clientX - offsetX
    let newTop = e.clientY - offsetY

    const maxLeft = window.innerWidth - draggedModal.offsetWidth
    const maxTop = window.innerHeight - draggedModal.offsetHeight

    newLeft = Math.max(0, Math.min(newLeft, maxLeft))
    newTop = Math.max(0, Math.min(newTop, maxTop))

    draggedModal.style.left = newLeft + 'px'
    draggedModal.style.top = newTop + 'px'
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

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode')
    const icon = document.getElementById('darkmode-icon')
    icon.src = document.body.classList.contains('dark-mode') ? 'images/sun.svg' : 'images/moon.svg'
}


