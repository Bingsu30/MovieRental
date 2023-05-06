Ext.define('MyApp.view.RentalTransaction', {
    extend: 'Ext.container.Container',
    xtype: 'rentaltransaction',
  
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'rentalheaderform',
            reference: 'headerForm',
            flex: 1,
            margin: '10 10 0 10'
        },
        {
            xtype: 'rentaldetailgrid',
            flex: 2,
            margin: '10 10 10 10'
        }
    ]
});