import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    var self = this;
    var runlater = function() {
      Ember.run.later(function() {
        console.log('running');
        if(self) {
          self.set('now', new Date().getTime());
          runlater();
        }
      }, 1000);
    };
    runlater();
    this._super();
  },
  now: new Date().getTime(),
  waitTime: Ember.computed('ticket.timestamp', 'now', function() {
    var startTime = new
    Date(this.get('ticket.timestamp')).getTime();
    var now = this.get('now');
    var difference = now - startTime;
    return difference;
  }),
});
