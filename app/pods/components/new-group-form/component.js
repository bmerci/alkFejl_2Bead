import Ember from 'ember';

export default Ember.Component.extend({
    groups: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                name: this.$('#csapatnev').val(),
                firstMemberName: this.$('#elsoJatekosNeve').val(),
                secondMemberName: this.$('#masodikJatekosNeve').val(),
            });
        }
    },
    
    validate() {
        var name = this.$('#csapatnev').val();
        
        this.set('groups.name', name === '' ? 'Csapatnév kötelező' : '');
        
        return this.get('groups.name') === '';
    }
});
