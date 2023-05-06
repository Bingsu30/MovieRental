// app/model/RentalHeader.js
Ext.define('MyApp.model.RentalHeader', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'customerId', type: 'int' },
        { name: 'rentDate', type: 'date' }
    ],
    hasMany: { model: 'MyApp.model.RentalDetail', name: 'details' },
    proxy: {
        type: 'rest',
        url: 'http://example.com/api/customers'
    }
});


// app/model/RentalDetail.js
Ext.define('MyApp.model.RentalDetail', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'movie', type: 'string' },
        { name: 'dateRented', type: 'date' },
        { name: 'dateReturned', type: 'date' }
    ],
    belongsTo: 'MyApp.model.RentalHeader',
    proxy: {
        type: 'rest',
        url: 'http://example.com/api/customers'
    }
});