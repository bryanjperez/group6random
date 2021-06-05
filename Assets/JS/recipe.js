var myProtein = document.getElementById("protein-choice");

// var titleStorage = $("#title").text();

// console.log(titleStorage);

// console.log(titleStorage.length);

var getRecipe = function(ingredients) {
    // format the url 
    var ingredientUrl = "https://api.edamam.com/search?q=" + ingredients + "&app_id=f5531771&app_key=e387c767349ba49eb1367aded3883751"
    
    // make a request to the url
    
    $.ajax({
        url: ingredientUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        let x = Math.floor(Math.random() * 10);
        
        console.log(response.hits[x].recipe.label);

        console.log(response.hits[x].recipe.uri);

        var recipeTitle = response.hits[x].recipe.label;

        $("#title").empty();

        $("#title").append(recipeTitle);

        var titleStorage = $("#title").text();

        localStorage.setItem("Recipe Title",titleStorage);

        var text = "";

        for (i = 0; i < response.hits[x].recipe.ingredientLines.length; i++) {
        text += response.hits[x].recipe.ingredientLines[i] + "<br>";
        }

        $("#steps").empty();

        $("#steps").append(text);

        var stepsStorage = $("#steps").text();

        localStorage.setItem("Recipe Steps",stepsStorage);
    })
}   

var getWinePairing = function(ingredients) {
    
    var wineUrl = "https://api.spoonacular.com/food/wine/pairing?food="  + ingredients + "&apiKey=74fc4298bde04bef9ffd2a2a8b92fde7"

    $.ajax({
        url: wineUrl,
        method: "GET"
    }).then(function (response) {
        
        $("#winePairing").empty();
  
        let winePairing = (response.productMatches[0].title);
        
        $("#winePairing").append(winePairing);

        var wineStorage = $("#winePairing").text();

        localStorage.setItem("Wine",wineStorage);

      });
    }
  

$( "#test" ).click(function() {
    ingredients = myProtein.options[myProtein.selectedIndex].text;
    getRecipe(ingredients);
    getWinePairing(ingredients);
});

// Title storage start
function getTitleStorage () {
    $("#title").text(localStorage.getItem("Recipe Title"));
}

var titleKey = window.localStorage.getItem("Recipe Title");
if (titleKey === null) {

} else {
    getTitleStorage();
}
// Title storage end

// Steps storage start
function getStepsStorage () {
    $("#steps").text(localStorage.getItem("Recipe Steps"));
}

var stepsKey = window.localStorage.getItem("Recipe Steps");
if (stepsKey === null) {
    
} else {
    getStepsStorage();
}
// Steps storage end

// Wine storage start
function getWineStorage () {
    $("#winePairing").text(localStorage.getItem("Wine"));
}

var wineKey = window.localStorage.getItem("Wine");
if (wineKey === null) {
    console.log("this is working");
} else {
    getWineStorage();
}




     
