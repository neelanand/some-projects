angular.module('jiffApp').filter('beautifyText', function() {
  return function(text) {
    if (!text) {
      return text;
    }
    newText = text.split("_").join(" ");
    return newText.charAt(0).toUpperCase() + newText.slice(1);
  };
});
