const images = [
  {
    title:"greece",
    image:"https://source.unsplash.com/random/500x500/?greece",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"canada",
    image:"https://source.unsplash.com/random/500x500/?canada",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"malta",
    image:"https://source.unsplash.com/random/500x500/?malta",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"city",
    image:"https://source.unsplash.com/random/500x500/?city",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"italy",
    image:"https://source.unsplash.com/random/500x500/?italy",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"france",
    image:"https://source.unsplash.com/random/500x500/?france",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"road",
    image:"https://source.unsplash.com/random/500x500/?road",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"travel",
    image:"https://source.unsplash.com/random/500x500/?travel",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"lake",
    image:"https://source.unsplash.com/random/500x500/?lake",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"sky",
    image:"https://source.unsplash.com/random/500x500/?sky",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"people",
    image:"https://source.unsplash.com/random/500x500/?people",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"cars",
    image:"https://source.unsplash.com/random/500x500/?cars",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"morning",
    image:"https://source.unsplash.com/random/500x500/?morning",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"food",
    image:"https://source.unsplash.com/random/500x500/?food",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"sunset",
    image:"https://source.unsplash.com/random/500x500/?sunset",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"hotel",
    image:"https://source.unsplash.com/random/500x500/?hotel",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"rain",
    image:"https://source.unsplash.com/random/500x500/?rain",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"sun",
    image:"https://source.unsplash.com/random/500x500/?sun",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"village",
    image:"https://source.unsplash.com/random/500x500/?village",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"earth",
    image:"https://source.unsplash.com/random/500x500/?earth",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"thunder",
    image:"https://source.unsplash.com/random/500x500/?thunder",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"ship",
    image:"https://source.unsplash.com/random/500x500/?ship",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"fire",
    image:"https://source.unsplash.com/random/500x500/?fire",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"wind",
    image:"https://source.unsplash.com/random/500x500/?wind",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"iceland",
    image:"https://source.unsplash.com/random/500x500/?iceland",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"sauna",
    image:"https://source.unsplash.com/random/500x500/?sauna",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"coffee",
    image:"https://source.unsplash.com/random/500x500/?coffee",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"buildings",
    image:"https://source.unsplash.com/random/500x500/?buildings",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"trophy",
    image:"https://source.unsplash.com/random/500x500/?trophy",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"stairs",
    image:"https://source.unsplash.com/random/500x500/?stairs",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  },
  {
    title:"bed",
    image:"https://source.unsplash.com/random/500x500/?bed",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit."
  }
  
]

const gallery = document.getElementById('gallery')
const pagination = document.querySelector(".pagination")
const modal = document.querySelector('.modal-wrapper')
const imgContainer = modal.querySelector('.modal .img-container')
const current_item = document.querySelector('.num-items')
const prev = modal.querySelector('.fa-arrow-left')
const next = modal.querySelector('.fa-arrow-right')
const deleteBtn = modal.querySelector('.delete-btn')

let currentPage = 1;
let numItems = 8;

function DisplayItems(items, wrapper, items_per_page, page) {
  wrapper.innerHTML = "";
  page--;

  let start = items_per_page * page;
  let end = start + items_per_page;
  let paginatedItems = items.slice(start,end);
  for (let i = 0; i < paginatedItems.length; i++) {
    const item = paginatedItems[i];
    let item_element = document.createElement('div');
    item_element.classList.add('flip-box');
    item_element.innerHTML = `
    <div class="flip-inner">
      <div class="front">
        <img src=${item.image} alt="">
      </div>
      <div class="back">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <button class="view">View</button>
      </div>
      </div>
    `;
    wrapper.appendChild(item_element);
  }
  
  // JS media queries
  // let size = window.matchMedia("(max-width: 800px)");
  // function openMobile(size){
  //   let boxes = gallery.querySelectorAll('.flip-box')
  //   if (size.matches){
  //     boxes.forEach(box => {
  //       box.addEventListener('click', function(){
  //         console.log(box);
  //       })
  //     })
  //   }
  // }
  // openMobile(size)
  

  // Pagination Event
  gallery.addEventListener('click', function DisplayModal(e) {
    if(e.target.className !== "view") return;
    let clickedImage = e.target.parentNode.previousElementSibling.firstElementChild;
    let imageSrc = clickedImage.src
    updateImage(imageSrc)

    modal.classList.remove('hidden')
  })
  
  modal.addEventListener('click', function(e){
    if (e.target == deleteBtn){
      modal.classList.add('hidden')
    }
  })
  
  function updateImage(image_source){
    imgContainer.innerHTML = `<img src="${image_source}" alt="">`;
    numimage(image_source);
  }

  function numimage(image_source){
    let Image = images.filter(image => {
      if (image.image == image_source){
        return image
      }
    })[0];
    let imgIndex = images.indexOf(Image) + 1;
    current_item.innerText = `${imgIndex} of ${images.length}`
  }

}


let buttons = document.querySelectorAll('.pagination button')
buttons.forEach(btn => {
  btn.addEventListener('click', function (){
    let current = this.innerText;
    currentPage = current;
    DisplayItems(images, gallery, numItems, current);
    let current_btn = document.querySelector('.pagination button.active')
    current_btn.classList.remove('active')

    btn.classList.add('active')
    
  })
})

DisplayItems(images, gallery, numItems, currentPage);