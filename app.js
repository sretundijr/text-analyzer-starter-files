// your code here!
//wait for page load
$(function(){
    $('.js-text-input-form').submit(function(e){
        //prevents default form behavior
        e.preventDefault();
        
        //tried a few differnt methods to eliminate the empty string bug
        var userInput = $('.js-text-input').val();
        //.replace(/\r?\n|\r/g, "");
        
        var subString = divideString(userInput);
        console.log(subString);
        var stringCount = totalWordCount(subString);
        // console.log(stringCount);
        var avgWordLength = averageWordLength(subString);
        // console.log(avgWordLength);

        var filtered = wordsThatAreNotUnique(subString);
        console.log(filtered);

        showResults(stringCount, filtered, avgWordLength);
    });
})

function divideString(userInput){
        var subString = userInput.toLowerCase()
            .split(/[\s\r*,\(\)]+/);
            // .split(/\b/g);
            //work around, when there is multiply carriage returns I found that 
            //the last index of my array would contain an empty string
            //this determines whether the last index contains an empty string
            //and removes it
            if(subString[subString.length - 1] === ""){
                subString.pop();
            }

        return subString;
    }

    function totalWordCount(stringArray){
        return stringArray.length;
    }

    function averageWordLength(stringArray){
        //declare locals to calc avg length
        var avgWordLength = 0;
        var total = 0;
        //loop through the array of strings to calc avg
        for(var i = 0; i < stringArray.length; i++){
            total += stringArray[i].length;
        }
        avgWordLength = total / totalWordCount(stringArray);
        return avgWordLength;
    };

    function wordsThatAreNotUnique(stringArray){
        var notUnique = [
            'to',
            'the',
            'and',
            'on'
        ];
   
        var countUniqueWords = 0;
        for(var i = 0; i < stringArray.length; i++){
            var counter = 0;
            for(var j = 0; j < notUnique.length; j++){
                // console.log(stringArray[i]);
                // console.log(notUnique[j])
                if(stringArray[i] === notUnique[j]){
                    counter++;
                }
            }
            if(counter === 0){
                countUniqueWords++;
            }
        }
        
        return countUniqueWords;
    }

    function showResults(count, unique, avg){
        $(".text-report").removeClass("hidden");
        console.log(count);
        $('.js-word-count').text(count);
        $('.js-unique-count').text(unique);
        $('.js-avg').text(avg);
    }