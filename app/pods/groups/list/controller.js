import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newGroup(formData) {
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
            $('.modal').modal('hide');
            //this.transitionToRoute('groups.list');
        }
    }
});
