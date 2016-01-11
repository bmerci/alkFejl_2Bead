import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteGroup(group) {
            //console.log(group);
            group.deleteRecord();
            group.save();
        }
    }
});
