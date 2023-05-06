Ext.define('MovieRentalApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    

    requires: [
        'MovieRentalApp.store.Personnel' // removed comma here
    ],

    title: 'Movie List',

    store: { 
        type: 'personnel'
    },

    columns: [
        { text: 'I.d',  dataIndex: 'id'},
        { text: 'Movie', dataIndex: 'movie', flex: 1 },
        { text: 'Genre', dataIndex: 'genre', flex: 1 },
        { text: 'Release date', dataIndex: 'release_date', flex: 1 },
        { text: 'Rental price', dataIndex: 'rental_price', flex: 1 }
    ],
    proxy: {
        type: 'rest',
        url: '/api/movies',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    
    tbar:[{
        xtype: 'button',
        itemId:'add',
        text:'Add',
        iconCls: 'x-fa-fa-plus',
        reference: 'btnadd',
        handler: function(button) {
            var form = Ext.create('Ext.form.Panel', {
                bodyPadding: 10,
                defaultType: 'textfield',
                items: [{
                    fieldLabel: 'Name',
                    name: 'name',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Age',
                    name: 'age',
                    allowBlank: false
                },{
                    fieldLabel: 'Rent Date',
                    xtype: 'datefield',
                    name: 'release_date',
                    allowBlank: false
                },{
                    fieldLabel: 'Rental Price',
                    name: 'rental_price',
                    allowBlank: false
                }],
                buttons: [{
                    text: 'Save',
                    handler: function() {
                        var form = this.up('form').getForm();
                        if (form.isValid()) {
                            var values = form.getValues();
                            this.up('window').destroy();
                            // Get reference to rental transaction store
                            var rentalDetailStore = button.up('panel').down('rentaldetailgrid').getStore();
                            var selectedHeader = this.getView().getViewModel().get('selectedHeader');
                            var newRecord = rentalDetailStore.create({
                                movie: values.name,
                                dateRented: values.release_date,
                                rentalPrice: values.rental_price
                            });
                            selectedHeader.details().add(newRecord);
                        }
                        rentalTransactionStore.add({
                            name: values.name,
                            age: values.age,
                            release_date: values.release_date,
                            rental_price: values.rental_price
                        });
                    }
                },{
                    text: 'Cancel',
                    handler: function() {
                        this.up('window').destroy();
                    }
                }]
            });

            var win = Ext.create('Ext.window.Window', {
                title: 'Add Movie Rental',
                layout: 'fit',
                modal: true,
                items: [form]
            });

            win.show();
        }
        
    },{
        xtype: 'button',
        itemId:'edit',
        text:'Edit',
        iconCls: 'x-fa-fa-pencil',
        reference: 'btnedit',
        handler: function(button) {
            var form = Ext.create('Ext.form.Panel', {
                bodyPadding: 10,
                defaultType: 'textfield',
                items: [{
                    fieldLabel: 'Name',
                    name: 'name',
                    allowBlank: false
                },{
                    fieldLabel: 'Age',
                    name: 'age',
                    allowBlank: false
                },{
                    fieldLabel: 'Rent Date',
                    xtype: 'datefield',
                    name: 'release_date',
                    allowBlank: false
                },{
                    fieldLabel: 'Rental Price',
                    name: 'rental_price',
                    allowBlank: false
                }],
                buttons: [{
                    text: 'Save',
                    handler: function() {
                        var form = this.up('form').getForm();
                        if (form.isValid()) {
                            var values = form.getValues();
                            this.up('window').destroy();
                            // TODO: Add code to
                        }
                    }
                },{
                    text: 'Cancel',
                    handler: function() {
                        this.up('window').destroy();
                    }
                }]
            });

            var win = Ext.create('Ext.window.Window', {
                title: 'Add Movie Rental',
                layout: 'fit',
                modal: true,
                items: [form]
            });

            win.show();
        }
        
        
    }, {
        xtype: 'textfield',
        emptyText: 'Search movie',
        width: 250,
        listeners: {
            change: function(field, value) {
                var store = field.up('grid').getStore();
                store.clearFilter();
                if (value) {
                    store.filterBy(function(record) {
                        var regex = new RegExp(value, 'i');
                        return regex.test(record.get('movie')); 
                    });
                }
            }
        }
    }],

    renderTo:Ext.getBody(),
    selModel: {
        selType: 'checkboxmodel',
        listeners:{
            select: 'onChecked'
        }
    }
});