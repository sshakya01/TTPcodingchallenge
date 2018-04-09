// Question 3 -- getClosingParen(sentence, openingParenIndex): "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing." Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis. Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).
function getClosingParen(sentence, openingParenIndex) {
  var count = 0;
  for (var position = openingParenIndex + 1; position < sentence.length; position++){// loops over characters in the sentence.
    let char = sentence[position];
    if (char === '('){// checks if character is (
      count = count + 1;
    }

    else if (char ===')'){//checks if character is )
      if (count === 0){// checks of paren counter is 0 to check each '(' has one ')'
        return position;
      }

      else{
        count = count - 1;
      }
    }
  }
}

//getClosingParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10);
