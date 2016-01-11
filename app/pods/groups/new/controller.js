import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newGroup(formData) {
            console.log(formData);
            var group = this.store.createRecord(
                'group', 
                Object.assign(
                    {
                        name: 'csapatnév',
                        firstMemberName: '#1',
                        secondMemberName: '#2'
                    }, 
                    formData
                )
            );
            group.save();
            this.transitionToRoute('groups.list');
        }
    }
});
