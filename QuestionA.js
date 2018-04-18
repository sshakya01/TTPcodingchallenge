//Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
function sortByStrings(s,t) {
  var sortedString = ''; // empty string to store value
  for(var j = 0; j < t.length ; j++){ //loops the string t
    for(var i = 0; i < s.length ; i++){ //loops over string s
      if (t[j] === s[i]) { // tests if the alphabets are equal
        sortedString = sortedString + s[i]; // adds the alphabets to sortedString
      }
    }
  }
  return sortedString;
}
//sortByStrings("good","odg");
//sortByStrings("weather","therapyw");
