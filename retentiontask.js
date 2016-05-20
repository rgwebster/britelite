import { meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
// import { Random } from 'meteor/meteor-random';
// Random = require('meteor-random');

import { Stimulus } from '../api/retentiontask.js';

import './retentiontask.css';
import './retentiontask.html';
Meteor.subscribe('stimulus');

// This was original Template that I start with it gives me some starting numbers and database information
// Template.body.helpers({
//   'centerTarget': function() {
//      //   Meteor.subscribe('stimulus');
//        const rArray = ["0","1","2","3","4","5","6","7","8"];
//      let b = 1*(Random.choice(rArray));
//      // let b = 0;
//
//      // for (let b = 0; b < 9; b++)
//      //  console.log(b);
//        let query = Stimulus.findOne({orderNumber: b});
//        let a = query.encodingNumber;
//
//           return a;
//
// },
// });

const numberStimuli = 9;

// const database = ["12345", "67890", "71632", "8376483726"];
// const databaseMissing = ["12_45", "_7890", "7163_", "_376483726"];
// const databaseMissingNumber = ["3","6","2","8"];

const plusTime = 1000;
const instructionTime = 8000;
const numberTime = 1000;
const responseInputTime = 2000;
const resultsShowTime = 1500;

let activeNumber = 0;
let correctResponses = 0;
let reactionTime = 0;
let numberOfResponses = 0;


$(document).ready(function() {
    begin();
});


function showNumberMissingDigit() {
console.log("Starting showNumberMissingDigit function");
     $(".responseID").empty();
    $("rButtons").hide();

    let query = Stimulus.findOne({orderNumber: activeNumber});

    $(".responseID").append(query.recallNumber);
    // $("#main").show();
    $("#rButtons").show();
    // $(".responseID").focus();
    let startTime = (new Date()).getTime();
    // $("#main").append(databaseMissing[activeNumber]);
// Instead of event.which I may be able to use event.key to get the actual key value but there seems to be some problem with browsers and that method.
// event.which returns the asci value.
     // $(".responseID").keypress(function( event ) {
     //      let range='09';
	// let min = range.charCodeAt(0);
	// let max = range.charCodeAt(1);
     //     let response = event.key;
     //     if (response >= 0 && response < 10) {
     //          numberOfResponses++;
// deal with button input
$("button.bt9").click(function() {
     let response = "9";
     numberOfResponses++;
     let stopTime = (new Date()).getTime();
console.log("Clicked button " + response);
     handleResponse(response, numberOfResponses, startTime, stopTime);
     // response ="";
});
$("button.bt8").click(function() {
     let response = "8";
     numberOfResponses++;
     let stopTime = (new Date()).getTime();
console.log("Clicked button " + response);
     handleResponse(response, numberOfResponses, startTime, stopTime);
     response ="";
console.log("After key cleared " + response);
});
$("button.bt7").click(function() {
     let response = "7";
     numberOfResponses++;
     let stopTime = (new Date()).getTime();
console.log("Clicked button " + response);
     handleResponse(response, numberOfResponses, startTime, stopTime);
     // response ="";
});
$("button.bt6").click(function() {
     let response = "6";
     numberOfResponses++;
     let stopTime = (new Date()).getTime();
console.log("Clicked button " + response);
     handleResponse(response, numberOfResponses, startTime, stopTime);
     // response ="";
});
$("button.bt5").click(function() {
     let response = "5";
     numberOfResponses++;
     let stopTime = (new Date()).getTime();
console.log("Clicked button 5");
     handleResponse(response, numberOfResponses, startTime, stopTime);
     // response ="";
});
$("button.bt4").click(function() {
     let response = "4";
     numberOfResponses++;
     let stopTime = (new Date()).getTime();
console.log("Clicked button " + response);
     handleResponse(response, numberOfResponses, startTime, stopTime);
     // response ="";
});
$("button.bt3").click(function() {
     let response = "3";
     numberOfResponses++;
     let stopTime = (new Date()).getTime();
console.log("Clicked button " + response);
     handleResponse(response, numberOfResponses, startTime, stopTime);
     // response ="";
});
$("button.bt2").click(function() {
     let response = "2";
     numberOfResponses++;
     let stopTime = (new Date()).getTime();
console.log("Clicked button " + response);
     handleResponse(response, numberOfResponses, startTime, stopTime);
     // response ="";
});
$("button.bt1").click(function() {
     let response = "1";
     numberOfResponses++;
     let stopTime = (new Date()).getTime();
console.log("Clicked button " + response);
     handleResponse(response, numberOfResponses, startTime, stopTime);
     // response ="";
});
$("button.bt0").click(function() {
     let response = "0";
     numberOfResponses++;
     let stopTime = (new Date()).getTime();
console.log("Clicked button " + response);
     handleResponse(response, numberOfResponses, startTime, stopTime);
     // response ="";
});


          //     console.log(startTime);

          //     console.log(stopTime);

     //     let responsetTime = stopTime - startTime;
     //     let responseTimeSeconds = responsetTime/1000;
     //          console.log("Subject Response = " + response);
     //          console.log("Response Time in Seconds = " + responseTimeSeconds);
     //      //     let query = Stimulus.findOne({orderNumber: activeNumber});
     //          let correctAnswer = query.correctNumber;
     //          console.log("Correct Answer = " + correctAnswer);
         //
     //          if (response === correctAnswer) {
     //               correctResponses++;
     //               let percentCorrect = (correctResponses/numberOfResponses)*100;
     //               console.log("Number of Correct Responses at this point = " + correctResponses)
     //           let correctResponse=true;
     //           console.log("Was the response correct? " + correctResponse);
     //           displayResults(correctResponse, responseTimeSeconds, percentCorrect);
     //           activeNumber ++;
         //
     //      } else {
     //           let correctResponse=false;
     //           console.log("Was the response correct? " + correctResponse);
     //           let percentCorrect = (correctResponses/numberOfResponses)*100;
     //           displayResults(correctResponse, responseTimeSeconds, percentCorrect);
     //           activeNumber ++;
         //
     //     }
    // }  // key press if
    // });  // end keypress function
//     if (activeNumber < numberStimuli) {
//      //     clearMain();
//      //     showPlus(showNumber);
// } else {
// // this will probably go to a thank you page for now but will in the
// // future go to the next part of the experiment.
// stop();
// }

//     if (activeNumber < numberStimuli) {
//
//      //     console.log(activeNumber);
// // This is a place holder until I figure out how to use the keypress function
// // above to capture the keystroke of 0 to 9
// // Also there will need to be some functionality to stop the experiment at 4 minutes rather than by loop count.
//      // setTimeout(function(){
//      //
//      //       showPlus(showNumber);
//      // }, responseInputTime);
// } else {
//      // this will probably go to a thank you page for now but will in the
//      // future go to the next part of the experiment.
//      stop();
    // }
};

function handleResponse(response, numberOfResponses, startTime, stopTime) {
console.log("Start handle response start time = " + startTime);
console.log("Stop handle response start time = " + stopTime);
     let responseTime = stopTime - startTime;

     let responseTimeSeconds = responseTime/1000;
     console.log("Start handle response " + responseTimeSeconds);
console.log("Subject Response = " + response);
console.log("Response Time in Seconds = " + responseTimeSeconds);
          let query = Stimulus.findOne({orderNumber: activeNumber});
         let correctAnswer = query.correctNumber;
console.log("Correct Answer = " + correctAnswer);

         if (response === correctAnswer) {
               correctResponses++;
               let percentCorrect = (correctResponses/numberOfResponses)*100;
               console.log("Number of Correct Responses at this point = " + correctResponses)
           let correctResponse=true;
console.log("Was the response correct? " + correctResponse);
           $("#rButtons").hide();

           displayResults(correctResponse, responseTimeSeconds, percentCorrect);
console.log("after displayResults called for true");



      } else {
           let correctResponse=false;
console.log("Was the response correct? " + correctResponse);
           let percentCorrect = (correctResponses/numberOfResponses)*100;
           $("#rButtons").hide();
           displayResults(correctResponse, responseTimeSeconds, percentCorrect);
console.log("after displayResults called for false");
          }

//      if (activeNumber < numberStimuli) {
//      //     clearMain();
//      //     showPlus(showNumber);
// } else {
// // this will probably go to a thank you page for now but will in the
// // future go to the next part of the experiment.
// stop();
// }
}; // Endo of handleResponse function

function showNumber() {
    // activeNumber = Math.floor(Math.random()*database.length);
    // console.log("Beginning of showNumber funcion");

    let query = Stimulus.findOne({orderNumber: activeNumber});
    // $("#main").append(database[activeNumber]);
    // $("#main").append(query.encodingNumber);
    // (".responseID").empty();
    $(".responseID").append(query.encodingNumber);
    $("#rButtons").show();
    $(".responseID").show();
    setTimeout(function () {
     //     (".responseID").empty();
         $("#rButtons").hide();
     // clearMain();
     console.log("Just before callin showPlus calling showNumberMissingDigits");
	showPlus(showNumberMissingDigit);
     console.log("Show active number at end of showNumber function = " + activeNumber);
    }, numberTime);
}

function showPlus(f) {
console.log("Beginning of showPlus function");
     $("#feedbackText").hide();
     $(".responseID").empty();
     $(".responseID").append("+");
     $("#rButtons").show();
    // $("#plus").show();
    setTimeout(function() {
     //     $("#plus").hide();
          $(".responseID").empty();
          $("#rButtons").hide();
         f();
    }, plusTime);
}

function begin() {
console.log("Beginning of begin function");

     $("#plus").hide();
     $("#feedbackText").hide();
     $("#rButtons").hide();
     $(".ThankYou").hide();
    $("#instructions").show();
     $("button.iButton").click(function() {
          $("#instructions").hide();
          showPlus(showNumber);
     });
}

function killSession() {
     $("#rButtons").hide();
     $(".ThankYou").show();

    alert("Done");
}

function displayCorrect(wasCorrect) {
    if (wasCorrect) {
     $("#incorrect").hide();
	$("#correct").show();

    } else {
	$("#correct").hide();
	$("#incorrect").show();
    }
}


function showResponseTime(t) {
    $("#responseTime").empty();
    $("#responseTime").append(t);
}

function showPercentCorrect(p) {
    $("#percentCorrect").empty();
    $("#percentCorrect").append(p);
}

function displayResults(cR, rTS, pC) {
console.log("In displayResults correct response = " + cR);
     $("#rButtons").hide();
     $("#feedbackText").show();
     displayCorrect(cR);
     showResponseTime(rTS);
     showPercentCorrect(pC);
console.log("activeNumber in displayResults function  = " + activeNumber + " before incrementing.");
                     activeNumber= activeNumber+1;
console.log("number of stimuli in displayResults function = " + numberStimuli);

                     if (activeNumber >= numberStimuli) {
                          killSession();
                     }
console.log("activeNumber in isplayResults function = " + activeNumber + " after incrementing.");
// insert info into database
          setTimeout(function(){

               $(".responseID").empty();
               $("#rButtons").hide();
               // clearMain();
               showPlus(showNumber);
          }, resultsShowTime);
}

function clearMain() {
     $("#main").empty();
     $("#main").hide();
     $(".responseID").empty();
     // $(".responseID").hide();
     // $("#feedbackText").empty();
     // $("#feedbackText").hide();

}
