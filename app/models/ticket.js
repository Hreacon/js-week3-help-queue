import DS from 'ember-data';

export default DS.Model.extend({
  students: DS.attr(),
  location: DS.attr(),
  problem: DS.attr(),
  timestamp: DS.attr('date', { defaultValue() { return new Date(); } }),
  open: DS.attr('boolean', { defaultValue() { return true; } } ),
});
