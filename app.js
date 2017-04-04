// your code here!
//wait for page load
$(function(){
    $('.js-text-input-form').submit(function(e){
        //prevents default form behavior
        e.preventDefault();
        // alert("here");
        var userInput = $('.js-text-input').val();

        var subString = divideString(userInput);
        console.log(subString);
        var stringCount = totalWordCount(subString);
        console.log(stringCount);
        var avgWordLength = averageWordLength(subString);
        console.log(avgWordLength);
    });

    function divideString(userInput){
        var subString = userInput.split(" ");
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
})
