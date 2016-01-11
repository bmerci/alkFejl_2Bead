import DS from 'ember-data';

const GroupModel = DS.Model.extend({
    name: DS.attr('string'),
    firstMemberName: DS.attr('string'),
    secondMemberName: DS.attr('string')
});

export default GroupModel;