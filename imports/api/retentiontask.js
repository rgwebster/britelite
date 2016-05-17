import { Mongo } from 'meteor/mongo';

export const Stimulus = new Mongo.Collection('stimulus');
if (Meteor.isServer){
     Meteor.publish("stimulus", function stimulusPublication(){
          return Stimulus.find({});

     });

}
