Ext.define('MyApp.view.RentalDetailGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'rentaldetailgrid',
    bind: '{selectedHeader.details}',
    columns: [
        { text: 'Movie', dataIndex: 'movie' },
        { text: 'Date Rented', dataIndex: 'dateRented', xtype: 'datecolumn', format: 'm/d/Y' },
        { text: 'Date Returned', dataIndex: 'dateReturned', xtype: 'datecolumn', format: 'm/d/Y' }
    ],
    

});