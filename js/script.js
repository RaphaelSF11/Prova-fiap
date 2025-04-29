
// Barra de progresso

window.onscroll = function () {
    updateProgressBar();
};

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

// Imagem modal

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const img = document.querySelector(".container_secundario_img");
const closeModal = document.querySelector(".close-modal");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
closeModal.onclick = function () {
    modal.style.display = "none";
}
modal.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Scroll down

document.querySelector(".container_botao_scroll").addEventListener("click", function () {
    const primeriaSecao = document.getElementById("segunda_secao");
    primeriaSecao.scrollIntoView({ behavior: "smooth"});
    
});

// Scroll up

document.querySelector(".container_botao_seta_up").addEventListener("click", function () {
    const primeriaSecao = document.getElementById("primeira_secao");
    primeriaSecao.scrollIntoView({ behavior: "smooth" });

});

// Efeito surgir

const myObserver = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
        
})
})

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element));

// Mobile

const mobileObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

if (window.matchMedia("(max-width: 412px)").matches) {
    elements.forEach(el => {
        myObserver.unobserve(el);
        mobileObserver.observe(el);
    });
}

//accordions
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordions.addEventListener('click', () => {
        const content = accordion.querySelector('.accordion-content');
        content.classList.toggle('active')

    })
})