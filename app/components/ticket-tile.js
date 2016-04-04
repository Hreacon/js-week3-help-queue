import Ember from 'ember';

export default Ember.Component.extend({
  waitTime: Ember.computed('ticket.timestamp', function() {
    var startTime = new Date(this.get('ticket.timestamp')).getTime();
    var now = new Date().getTime();
    var difference = now - startTime;
    return difference;
  }),
});
