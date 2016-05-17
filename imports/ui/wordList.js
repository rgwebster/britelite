import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './wordList.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter1 = new ReactiveVar(0);
  this.counter2 = new ReactiveVar(0);
  this.counter3 = new ReactiveVar(0);
  this.counter4 = new ReactiveVar(0);
  this.counter5 = new ReactiveVar(0);
});

Template.hello.helpers({
  counter1() {
    return Template.instance().counter1.get();
  },
  counter2() {
    return Template.instance().counter2.get();
  },
  counter3() {
    return Template.instance().counter3.get();
  },
  counter4() {
    return Template.instance().counter4.get();
  },
  counter5() {
    return Template.instance().counter5.get();
  },
});

Template.hello.events({
  'click button.bt1'(event, instance) {
    // increment the counter when button is clicked
    instance.counter1.set(instance.counter1.get() + 1);
  },
  'click .bt2'(event, instance) {
    // increment the counter when button is clicked
    instance.counter2.set(instance.counter2.get() + 1);
  },
  'click .bt3'(event, instance) {
    // increment the counter when button is clicked
    instance.counter3.set(instance.counter3.get() + 1);
  },
  'click .bt4'(event, instance) {
    // increment the counter when button is clicked
    instance.counter4.set(instance.counter4.get() + 1);
  },
  'click .bt5'(event, instance) {
    // increment the counter when button is clicked
    instance.counter5.set(instance.counter5.get() + 1);
  },
});
