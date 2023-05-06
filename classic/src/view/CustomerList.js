Ext.define('MyApp.view.CustomerList', {
    extend: 'Ext.grid.Panel',
    xtype: 'customerlist',

    title: 'Customer List',

    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email' },
        { text: 'Phone Number', dataIndex: 'phoneNumber' },
        { text: 'Age', dataIndex: 'age' }
    ]
});