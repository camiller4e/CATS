var CAT_ARRAY [
  {}
]

let addCat = function(name, favFood, image){
  let newCat = createNewCat();
  let catName = createCatName(name);
  let catFood = createCatFood(favFood);
  let catPic = createCatPic(image);

  appendElements(newCat, catName, catFood, catPic);
}

let createNewCat = function(){
  var newCat = document.createElement('ul');
  newCat.classList.add('cat');
  return newCat;
}

let createCatName = function(name){
  let catName = document.createElement('li');
  catName.innerText = name;
  return catName;
}

let createCatFood = function(favFood){
  let catfood = document.createElement('li');
  catfood.innerText = favFood;
  return catfood;
}

let createCatPic = function(image){
  let catpic = document.createElement('img');
  catpic.src = "";
  return catpic;
}

let appendElements = function(newCat, catName, catfood, catpic){
  newCat.appendChild(catName);
  newCat.appendChild(catfood);
  newCat.appendChild(catpic);
  var cats = document.querySelector('#cats');
  cats.appendChild(newCat);
}


var app = function() {

  addCat("Spooky", "ham", "put a picture here");

};



window.onload = app;
