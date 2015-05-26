// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(obj === null) {
  	return "null";
  }
  else if(obj === undefined) {
  	return "undefined";
  }
  else if (typeof obj === "string") {
  	return '\"' + obj + '\"';
  } 
  else if (typeof obj === "number" || typeof obj === "boolean") {
    return obj.toString();
  }
  else if (Array.isArray(obj)) {
  	var str = "[";
    _.each(obj, function(element, index) {
      str += stringifyJSON(element);
      if(index < obj.length - 1) {
        str += ",";
      }
    });
    str += "]";

    return str;
  }
  else if (typeof obj === "object") {
    var str = "{";
    _.each(obj, function(value, key) {
      if(value === undefined || typeof value === "function") {
        return;
      }
      
      if(str.length > 1) {
        str += ",";
      }
      str += stringifyJSON(key) + ":" + stringifyJSON(value);
    })
    str += "}";
    return str;
  }
};