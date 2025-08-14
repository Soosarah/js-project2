function reverseString(str) {
  const charArray = str.split('');
  const reversedArray = charArray.reverse();
  const reversedStr = reversedArray.join('');
  return reversedStr;
}

function countCharacters(str) {
  return str.length;
}


str="hanafi sarra "
function capitalizeWords(str) {
  const words = str.toLowerCase().split(' ');
  const capitalizedWords = words.map(word => {
    if (word.length === 0) {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(' ');
}

function Max_Min(arr){
const min_value = Math.min(...arr);
const max_value = Math.max(...arr);
  return(min_value,max_value);
}

function sum(arr){
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function filtering(numbers){
const evenNumbers = numbers.filter(function(number) {
  return( number % 2 === 0);
});
return (evenNumbers); 
}


