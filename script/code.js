let productArray = [{
    id: 1,
    productImg: 'https://i.postimg.cc/y8YcmTz2/pexels-pixabay-371924.jpg',
    productTitle: 'Switch',
    productText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit iste perferendis enim aspernatur debitis. Libero natus soluta illo nihil rem?',
    productPrice: 17000
},{
    id: 2,
    productImg: 'https://i.postimg.cc/Xvt50Sy0/pexels-jeshootscom-442576.jpg',
    productTitle: 'Ps5',
    productText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit iste perferendis enim aspernatur debitis. Libero natus soluta illo nihil rem?',
    productPrice: 17000
},{
    id: 3,
    productImg: 'https://i.postimg.cc/0QmwkWpK/pexels-j-shoots-21067.jpg',
    productTitle: 'PS4 Controller',
    productText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit iste perferendis enim aspernatur debitis. Libero natus soluta illo nihil rem?',
    productPrice: 17000
},{
    id: 4,
    productImg: 'https://i.postimg.cc/Z573Vybn/pexels-jens-mahnke-776092.jpg',
    productTitle: 'Classic Controller',
    productText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit iste perferendis enim aspernatur debitis. Libero natus soluta illo nihil rem?',
    productPrice: 17000
},{
    id: 5,
    productImg: 'https://i.postimg.cc/YSvFVq03/pexels-stas-knop-1298601.jpg',
    productTitle: 'XBOX 360 Controller',
    productText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit iste perferendis enim aspernatur debitis. Libero natus soluta illo nihil rem?',
    productPrice: 17000
}]

let productSection = document.querySelector('#product-section')

productSection.innerHTML = ''
productArray.forEach((content) =>{
    productSection.innerHTML +=
    `
    <div class="col">
            <div class="card" style="width: 18rem">
              <img
                src="${content.productImg}"
                class="card-img-top img-size"
                alt="..."
                loading="lazy"
              />
              <div class="card-body">
                <h5 class="card-title">${content.productTitle}</h5>
                <p class="card-text">${content.productText}</p>
                <a href="#" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
    `
})