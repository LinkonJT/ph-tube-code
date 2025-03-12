console.log("index is connected");


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
    .then (data => displayVideos(data.videos))
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
categoryDiv.innerHTML = `<button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`;

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

videos.forEach((video) => {
    console.log(video);

    const videoCard = document.createElement("div");
    videoCard.innerHTML =  `
    <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      ${video.title}
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    `
videoContainer.append(videoCard);
})

};



loadCategories();
loadVideos();
