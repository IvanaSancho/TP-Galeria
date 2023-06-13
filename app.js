
const imagenes = document.querySelectorAll('img');
const contenedorImagen = document.querySelector('.overlay');
const imageContainer =document.querySelector('.img-slideshow');
const copy = document.querySelector('.copy');
const closeModal = document.querySelector('.btn-cerrar');


imagenes.forEach(imagen => {
        imagen.addEventListener('click', ()=>{
        
        addImage(imagen.getAttribute('src'),imagen.getAttribute('alt'));

    })
})
const addImage =(srcImg, altImg) =>{
    contenedorImagen.classList.toggle('visible');
    imageContainer.src = srcImg;
    copy.innerHTML = altImg;
}


closeModal.addEventListener('click', () =>{
    contenedorImagen.classList.toggle('visible');
})



