const navModal = document.getElementById("navModal")
const burger = document.getElementById("burger")
const html = document.querySelector('html')

burger.addEventListener('click', () => {
    navModal.classList.toggle("active")
    burger.classList.toggle("active")
    if (html.style.overflow === "hidden") {
        html.style.overflow = 'auto'
    } else {
        html.style.overflow = 'hidden'
    }
})