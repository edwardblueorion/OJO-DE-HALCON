let nav = document.getElementById('hidden-menu')
let show = document.getElementById('show-menu')
let hidden = document.getElementById('hidden--menu')


show.addEventListener('click', () => {
    nav.classList.add("show")
});

hidden.addEventListener('click', () => {
    nav.classList.remove("show")
})
