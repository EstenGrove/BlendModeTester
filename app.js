const img = document.querySelector('#img-container');

const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const blend = e.target.textContent;
        img.style.backgroundBlendMode = blend;
    })
})