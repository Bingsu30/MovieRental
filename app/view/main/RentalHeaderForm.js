Ext.define('MyApp.view.RentalHeaderForm', {
    extend: 'Ext.form.Panel',
    xtype: 'rentalheaderform',
    items: [
        { xtype: 'textfield', name: 'name', fieldLabel: 'Name' },
        { xtype: 'datefield', name: 'rentDate', fieldLabel: 'Rent Date' },
        {
            xtype: 'button',
            text: 'Delete',
            handler: function() {
                // Code to handle delete button click
            }
        }
    ]
}); 