function translate(text) {
  // Write your code here
  // To debug: console.error('Debug messages...');
  return text.replace(
    /^[aeiouy\u00C0-\u017F]|[bcdfghjklmnpqrstvwxz\u00C0-\u017F][aeiouy\u00C0-\u017F]/gi,
    function (match) {
      return match.length > 1 ? match.split("").join("av") : "av" + match;
    }
  );
}
