// your code here!
//wait for page load
$(function(){
    $('.js-text-input-form').submit(function(e){
        //prevents default form behavior
        e.preventDefault();
        // alert("here");
        var userInput = $('.js-text-input').val();
        // console.log(userInput);
        // var userInputArr = userInput.split(" ");
        // console.log(userInputArr);
        var subString = divideString(userInput);
        console.log(subString);
        var stringCount = totalWordCount(subString);
        console.log(stringCount);
        var avgWordLength = averageWordLength(subString);
        console.log(avgWordLength);

        var filtered = wordsThatAreNotUnique(subString);
        console.log(filtered);
    });
})

function divideString(userInput){
        var subString = userInput.toLowerCase()
            .split(/[\s\r*,\(\)]+/);
            //work around
            subString.pop();
        return subString;
    }

    function totalWordCount(stringArray){
        return stringArray.length;
    }

    function averageWordLength(stringArray){
        //declare locals to calc avg length
        var currentWordLength = 0;
        var avgWordLength = 0;
        var total = 0;
        //loop through the array of strings to calc avg
        for(var i = 0; i < stringArray.length; i++){
            total += stringArray[i].length;
        }
        avgWordLength = total / totalWordCount(stringArray);
        return avgWordLength;
    };

    // function lowerCase(stringArray){
    //     var lowerCaseArray = [];
    //     for(var i = 0; i < stringArray.length; i++){
    //         lowerCaseArray.push(stringArray[i].toLowerCase());
    //     }
    //     return lowerCaseArray;
    // }

    function wordsThatAreNotUnique(stringArray){
        var notUnique = [
            'to',
            'the',
            'and',
            'on'
        ];
        console.log(notUnique);
        // for(var i = 0; i < stringArray.length; i++){
        //     var filteredArray = stringArray.find(function(notUnique){
        //         return stringArray !== notUnique;
        //     });
        // }
        // var isUnique;
        var countUniqueWords = 0;
        for(var i = 0; i < stringArray.length; i++){
            var counter = 0;
            // isUnique = false;
            for(var j = 0; j < notUnique.length; j++){
                // console.log(stringArray[i]);
                // console.log(notUnique[j])
                if(stringArray[i] === notUnique[j]){
                    counter++;
                }
            }
            if(counter === 0){
                // isUnique = true;
                countUniqueWords++;
            }
        }
        
        return countUniqueWords;
    }
