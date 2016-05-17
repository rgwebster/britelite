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

function responseInput() {
     $("#main").empty();
     $("#hiddenInputForm").show();
     $("#missingNI").keypress( function() {
           console.log("Handler for .keypress() called.")
     });
}
function showNumberMissingDigit() {
    $("#main").empty();
    let query = Stimulus.findOne({orderNumber: activeNumber});

    $("#main").append("<p id='responseID'>" + query.recallNumber + "</p>");
    $("#main").show();
    let startTime = (new Date()).getTime();
    $("#main").append(databaseMissing[activeNumber]);
// Instead of event.which I may be able to use event.key to get the actual key value but there seems to be some problem with browsers and that method.
// event.which returns the asci value.
     $("#responseID").keypress(function( event ) {
         let response = event.which;
         if (response > 47 && response < 58) {
              numberOfResponses++;
         let responsetTime = startTime - event.timeStamp;
              console.log(response);
              console.log(responsetTime);
              if (response == databaseMissingNumber[activeNumber]) {
                   correctResponses++;
                   let percentCorrect = (correctResponses/numberOfResponses)*100;
                   console.log(correctResponses)
               let correctResponse=true;
          } else {
               let correctResponse=false;
          }
         }
    });  // end keypress function

    activeNumber++
    if (activeNumber < numberStimuli) {
     //     console.log(activeNumber);
// This is a place holder until I figure out how to use the keypress function
// above to capture the keystroke of 0 to 9
// Also there will need to be some functionality to stop the experiment at 4 minutes rather than by loop count.
     setTimeout(function(){
          $("#main").empty();
              $("#main").hide();
           showPlus(showNumber);
     }, responseInputTime);
} else {
     // this will probably go to a thank you page for now but will in the
     // future go to the next part of the experiment.
     stop();
    }
};

function showNumber() {
    // activeNumber = Math.floor(Math.random()*database.length);
    let query = Stimulus.findOne({orderNumber: activeNumber});
    // $("#main").append(database[activeNumber]);
    $("#main").append(query.encodingNumber);
    $("#main").show();
    setTimeout(function () {
     $("#main").empty();
     $("#main").hide();
	showPlus(showNumberMissingDigit);
     console.log(activeNumber);
    }, numberTime);
}

function showPlus(f) {
    $("#plus").show();
    setTimeout(function() { $("#plus").hide(); f(); }, plusTime);
}

function begin() {
     $("#plus").hide();
     $("#feedbackText").hide();
    $("#instructions").show();
     $("button.iButton").click(function() {
          $("#instructions").hide();
          showPlus(showNumber);
     });
}
