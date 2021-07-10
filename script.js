const images = document.getElementById('images');
const btn = document.getElementById('btn');

btn.addEventListener('click', RandomCats);

async function RandomCats(params) {
    const url = 'https://api.thecatapi.com/v1/images/search';
    const CatsImages = await fetch(url);
    const Cats = await CatsImages.json();
    images.innerHTML =`<img src="${Cats[0].url}" style="width:500px; height:300px" class="img-fluid" alt="Responsive image">`
}