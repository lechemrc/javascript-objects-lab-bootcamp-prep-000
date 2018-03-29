var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  recipes = {recipe1: 'tomato soup'};
  var recipe2 = Object.assign({recipe2: 'grilled cheese'}, recipes);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes.recipe3 = 'pizza';
  return ();
}

function deleteFromObjectByKey(object, key){
  
}

function destructivelyDeleteFromObjectByKey(object, key){
  
}