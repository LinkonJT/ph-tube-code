console.log("index is connected");

function loadCategories (){
    // console.log("category is loading")
    /**1. fetch data */
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    /**2.conver promise to Json */
    .then((response) => response.json()) //ekta promise return korbe
    /**3. send data to Display */
    .then(data => displayCategories(data.categories)) //promise ta ke ekhane data hisebe dhore output dekh hocche

}

/**
 * 
 *
category: "Music"
category_id: "1001"
 */

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

loadCategories();

