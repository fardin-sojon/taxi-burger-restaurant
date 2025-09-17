console.log("JS Connected");


const loadCategory = () => {
    const url = " https://taxi-kitchen-api.vercel.app/api/v1/categories"
    fetch(url) // promise for response
        .then(res => res.json())
        .then(data => displayCategory(data.categories))
};

const displayCategory = (categories) => {
    // console.log(categories);
    const catContainer = document.getElementById('category-container');
    // console.log(catContainer);
    catContainer.innerHTML = "";


//     {
//     "id": 4,
//     "categoryName": "Lamb",
//     "categoryImg": "https://www.themealdb.com/images/category/lamb.png"
// }

    for (let categorie of categories) {
        console.log(categorie);

        const categoryCard = document.createElement('div')
        categoryCard.innerHTML = `
            <button class="btn btn-block shadow btn-category">
                <img
                src="${categorie.categoryImg}"alt=""
                class="w-10"/>${categorie.categoryName}
            </button>
        `

        catContainer.append(categoryCard)
    }
}

loadCategory()