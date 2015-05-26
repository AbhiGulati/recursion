// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, root){
  root = root || document.body;

  var elements = [];
  if(root.classList.contains(className)) {
  	elements.push(root);
  }
  _.each(root.childNodes, function(child) {
  	if(child.nodeType !== 1) return;
  	elements = elements.concat(getElementsByClassName(className, child));
  });

  return elements;
};
