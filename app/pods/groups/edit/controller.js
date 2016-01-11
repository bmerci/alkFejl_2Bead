import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyGroup(formData) {
            let group = this.get('model');
            console.log(group);
            group.setProperties(formData);
            return group.save().then(() => {
                this.transitionToRoute('groups.list');
            });
        }
    }
});
