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
        
        let recipeId = (response[x].id);

        console.log(recipeId);
        
        let informationUrl = "https://api.spoonacular.com/recipes/" + recipeId + "/information?includeNutrition=false&apiKey=74fc4298bde04bef9ffd2a2a8b92fde7"

        $.ajax({
            url: informationUrl,
            method: "GET"
        }).then(function (response) {
             let stepsUrl = response.sourceUrl;
             console.log(stepsUrl);

             const settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi",
                "method": "POST",
                "headers": {
                    "content-type": "text/plain",
                    "x-rapidapi-key": "4d4f277aa3msha3110580eaa86b7p12632ejsn334b93f0e599",
                    "x-rapidapi-host": "mycookbook-io1.p.rapidapi.com"
                },
                "data": stepsUrl
            };
            
            $.ajax(settings).done(function (response) {
                console.log(response);
                console.log(response[0].ingredients);
                var ingredients = response[0].ingredients;
                var text = "";
                var i;

                for (i = 0; i < ingredients.length; i++) {
                text += ingredients[i] + "<br>";
                }

                console.log(text);

                $("#steps").empty();

                $("#steps").append(text);
            });
        });

        // Append content to appropriate location 

        $("#title").append(recipeTitle);

        // Get ID of selected recipe, and pass it into get recipe information endpoint

        // Get url of recipe from get recipe information endpoint, and pass it into the mycookbook.io endpoint 

        // Pull steps from mycookbook.io endpoint and append them to recipe steps div
    });
}

$( "#test" ).click(function() {
    ingredients = myProtein.options[myProtein.selectedIndex].text;
    console.log(ingredients);
    getRecipe(ingredients);
  });
