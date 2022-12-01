function filterWords(words, letters) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    var result = words.filter(item => letters.split("").some(item2 => item.includes(item2)))
    return result;
}