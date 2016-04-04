import DS from 'ember-data';

export default DS.Model.extend({
  students: DS.attr(),
  location: DS.attr(),
  problem: DS.attr(),
  timestamp: DS.attr(),
});
