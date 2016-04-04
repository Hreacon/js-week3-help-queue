import Ember from 'ember';

export default Ember.Component.extend({
  ticketList: Ember.computed(function() {
    var tList = this.get('model');
    var output = [];
    console.log(tList.length);
    for(var i = 0; i < tList.length; i++) {
      if(tList[i].get('open')) {
        output.push(tList[i]);
      }
    }
    console.log(output);
    return tList;
  })
});
