var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let a=0;
// Write a while loop that prints out the contents of ingredients:
while (a<ingredients.length){
  console.log(ingredients[a]);
  a++;
}
// Write a for loop that prints out the contents of ingredients:
for (b=0;b<ingredients.length;b++){
  console.log(ingredients[b]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (c=1;c<=ingredients.length;c++){
  console.log(ingredients[ingredients.length-c]);
}
