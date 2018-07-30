var CAT_ARRAY = [
  {name: "Spooky", favFood: "Fried Chicken", image: "http://gifimage.net/wp-content/uploads/2017/10/cat-pixel-gif-7.gif"},
  {name: "Clorp", favFood: "Sandwiches", image: "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/09/2a/e3/092ae356-b1f5-55f2-31e8-14d619522a3b/AppIcon-1x_U007emarketing-85-220-0-5.png/246x0w.jpg"},
  {name: "Dr. Butts", favFood: "Pierogi", image: "https://i.pinimg.com/236x/65/bf/29/65bf29e93f43671504b5f80beb783414--animal-jam-pixel-art.jpg"},
  {name: "Keith", favFood: "Candyfloss", image: "https://image.shutterstock.com/image-vector/vector-illustration-cartoon-cat-pixel-260nw-387938092.jpg"},
  {name: "Pusheen", favFood: "Pizza", image: "https://i.gifer.com/XWeP.gif"},
  {name: "Treacle", favFood: "Cake", image: "https://pbs.twimg.com/profile_images/993230057240920065/omAKzSQ6_400x400.jpg"},
  {name: "Puff", favFood: "Mackerel", image: "https://media.giphy.com/media/ea74cjF0jieXu/giphy.gif"},
  {name: "Bert", favFood: "Sushi", image: "https://res.cloudinary.com/teepublic/image/private/s--RDXQX9ci--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1517094435/production/designs/2314766_0.jpg"}

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
  catName.innerText = `Name: ${name}`;
  return catName;
}

let createCatFood = function(favFood){
  let catfood = document.createElement('li');
  catfood.innerText = `Likes: ${favFood}`;
  return catfood;
}

let createCatPic = function(image){
  let catpic = document.createElement('img');
  catpic.src = image;
  catpic.width= 200;
  catpic.height= 200;
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
  for(var cat of CAT_ARRAY){
    addCat(cat.name, cat.favFood, cat.image);
  }
};



window.onload = app;
