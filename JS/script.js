console.log("JS Connected");

const loadCategory = () => {
    const url = " https://taxi-kitchen-api.vercel.app/api/v1/categories"
    fetch(url) // promise for response
        .then(res => res.json())
        .then(data => displayCategory(data.categories))
};

const loadFoods =(id)=>{
    const url = id
    ? ` https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`
    : `https://taxi-kitchen-api.vercel.app/api/v1/foods/random`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.foods))
}

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
        // console.log(categorie);

        const categoryCard = document.createElement('div')
        categoryCard.innerHTML = `
            <button onclick ="loadFoods(${categorie.id})" class="btn btn-block shadow btn-category">
                <img
                src="${categorie.categoryImg}"alt=""
                class="w-10"/>${categorie.categoryName}
            </button>
        `

        catContainer.append(categoryCard)
    }
}


// {
//     "id": 52927,
//     "title": "Montreal Smoked Meat",
//     "catId": 1,
//     "foodImg": "https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg",
//     "price": 394,
//     "category": "Beef"
// }

const displayFoods = (foods)=> {
    console.log(foods);
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = "";

    for (let food of foods) {
        console.log(food);
        const foodCard = document.createElement('div');
        foodCard.innerHTML = `
            <div class="p-5 bg-white flex gap-3 shadow rounded-xl">
            <div class="img flex-1">
              <img
                src="${food.foodImg}"
                alt=""
                class="w-[160px] rounded-xl h-[160px] object-cover"
              />
            </div>
            <div class="flex-2">
              <h1 class="text-xl font-bold">
                ${food.title}
              </h1>

              <div class="badge badge-warning">${food.category}</div>

              <div class="divider divider-end">
                <h2 class="text-yellow-600 font-semibold">
                  $ <span class="price">${food.price}</span> BDT
                </h2>
              </div>

              <button class="btn btn-warning">
                <i class="fa-solid fa-square-plus"></i>
                Add This Item
              </button>
            </div>
          </div>
        `
        foodContainer.append(foodCard)
    };
}

loadFoods(11)

loadCategory()