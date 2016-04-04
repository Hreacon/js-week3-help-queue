import Ember from 'ember';

export function calculateTime(args) {
  var time = args[0];
  var label = "ms";
  if (time > 1000) {
    time = time/1000;
    label = "s";
    if (time > 60) {
      time = time/60;
      label = "m";
      if (time > 60) {
        time = time/60;
        label = "hr";
        if (time > 24) {
          time = time/24;
          label = "days";
        }
      }
    }
  }
  if(time > 0) {
    return Math.floor(time) + label;
  } else {
    return '0m';
  }
}

export default Ember.Helper.helper(calculateTime);
