/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MovieRentalApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    

    onChecked:function(sender, record, isSelected){
        debugger;
        var updateBtn = this.lookupReference('btnedit'),
        removebtn = this.lookupReference('btndelete');
        if( isSelected>=1)
        {
            isSelected=1;
            console.log(isSelected);
            updateBtn.setDisabled(false);
            removeBtn.setDisabled(false);
            this.requires=record; 
        } 
        else if(isSelected<0){
            removeBtn.setDisabled(true);
            updateBtn.setDisabled(true);
        }
        else if(isSelected==0){
            updateBtn.setDisabled(false);
            removeBtn.setDisabled(false);
            this.requires=record;
        }
    },
    onChecked: function(sender, record, isSelected){},
     onItemSelected: function (sender, record, isSelected) {
        Ext.Msg.confirm('Confirm to rent movie', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    addPopup: function(){
        var form=Ext.create('MovieRentalApp.view.main.MainController');
        form.show();
    },
    updatePopup:function(){
        var form=Ext.create('MovieRentalApp.view.main.MainController');
        form.show();
    }
});
