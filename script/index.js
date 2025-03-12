console.log("index is connected");


function removeActiveClass(){
  const activeButtons = document.getElementsByClassName("active");

for (let btn of activeButtons){
  btn.classList.remove("active");
}

  // console.log(activeButtons);
}

//top category
function loadCategories (){
    // console.log("category is loading")
    /**1. fetch data */
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    /**2.convert promise to Json */
    .then((response) => response.json()) //ekta promise return korbe
    /**3. send data to Display */
    .then(data => displayCategories(data.categories)) //promise ta ke ekhane data hisebe dhore output dekh hocche

}


//video
function loadVideos(){
    fetch ("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then ((res)=> res.json())
    .then (data =>{

      removeActiveClass();
      document.getElementById("btn-all").classList.add("active");
      displayVideos(data.videos)
    })
};

const loadCategoryVideos = (id) =>{
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(url);

  fetch(url)
  .then(response => response.json())
  .then (data =>{
    removeActiveClass();
    //no active class
    const clickedButton = document.getElementById(`btn-${id}`);
    clickedButton.classList.add("active");
    // console.log(clickedButton);
    displayVideos(data.category)
  } );

}

/**
 * 
 *
category: "Music"
category_id: "1001"
 */

/***Display Functions */

//categories
function displayCategories (categories){
//get the container
const categoryContainer = document.getElementById("category-container");

//Loop operation on Array of object
for(let cat of categories){
    console.log(cat)

//create element
const categoryDiv = document.createElement("div");
categoryDiv.innerHTML = `
<button id="btn-${cat.category_id}" onclick = "loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`;

//Append the element
categoryContainer.append(categoryDiv);
}

}


// {category_id: '1001', video_id: 'aaaa', thumbnail: 'https://i.ibb.co/L1b6xSq/shape.jpg', title: 'Shape of You', authors: Array(1), …}
// authors
// : 
// [{…}]
// category_id
// : 
// "1001"
// description
// : 
// "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// others
// : 
// {views: '100K', posted_date: '16278'}
// thumbnail
// : 
// "https://i.ibb.co/L1b6xSq/shape.jpg"
// title
// : 
// "Shape of You"
// video_id
// : 
// "aaaa"
// [[Prototype]]
// : 
// Object

//videos (using arrow function)
const displayVideos = (videos) =>{
console.log(videos);

const videoContainer = document.getElementById("video-container");

if(videos.length == 0){
  videoContainer.innerHTML = ` <div class="col-span-full flex flex-col items-center text-center py-20">
        <img class="w-28" src="./assets/Icon.png" alt="">
        <h2 class="text-2xl font-bold">Oops! Sorry, There is no content here </h2>
      </div>`

      return;
}

videoContainer.innerHTML = "";

videos.forEach((video) => {
    console.log(video);

    const videoCard = document.createElement("div");
    videoCard.innerHTML =  `
        <div class="card bg-base-100">
        <figure class="relative">
          <img class = "w-full h-[150px] object-cover "
            src="${video.thumbnail}"
            alt="Shoes" />
            <span class="absolute bottom-2 right-2 text-sm bg-black text-white rounded px-2">3hrs 56 min ago</span>
        </figure>
        <div class="flex gap-3 px-0 py-5">
          
        <div class="profile">

            <div class="avatar">
                <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                  <img src="${video.authors[0].profile_picture}" />
                </div>
              </div>

        </div>


        <div class="intro">
            <h2 class="text-sm font-semibold">Midnight Serenade</h2>
            <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>

            <p class="text-sm text-gray-400">${video.others.views}</p>
        </div>
        
        </div>
      </div>

    `
videoContainer.append(videoCard);
})

};


loadCategories();
// loadVideos();
