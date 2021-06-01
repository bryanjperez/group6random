var myProtein = document.getElementById("protein-choice");

var getRecipe = function(ingredients) {
    // format the url 
    var ingredientUrl = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredients + "&apiKey=74fc4298bde04bef9ffd2a2a8b92fde7&number=10"

    // make a request to the url 
    $.ajax({
        url: ingredientUrl,
        method: "GET"
    }).then(function (response) {
         console.log(response);

        // Empty containers before appending new content 
        $("#title").empty();

        // Add content to variables 
        let x = Math.floor(Math.random() * 10)
        let recipeTitle = (response[x].title);
        
        // Append content to appropriate location 
        $("#title").append(recipeTitle);
    });
}

$( "#test" ).click(function() {
    ingredients = myProtein.options[myProtein.selectedIndex].text;
    console.log(ingredients);
    getRecipe(ingredients);
  });