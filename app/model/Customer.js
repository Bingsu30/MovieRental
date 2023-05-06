Ext.define('MyApp.model.Customer', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phoneNumber', type: 'string' },
        { name: 'age', type: 'string' },
    ], 
    proxy: {
        type: 'rest',
        url: 'http://example.com/api/customers'
    }

});