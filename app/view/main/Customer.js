Ext.define('MyApp.view.CustomerList', {
    extend: 'Ext.grid.Panel',
    xtype: 'customerlist',

    title: 'Customer List',

    store: {
        type: 'customer'
    },

    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email' },
        { text: 'Phone Number', dataIndex: 'phone_Number' },
        { text: 'Age', dataIndex: 'age'}
    ],
});