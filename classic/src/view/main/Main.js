/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MovieRentalApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MovieRentalApp.view.main.MainController',
        'MovieRentalApp.view.main.MainModel',
        'MovieRentalApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    items: [
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            title: 'Movie List',
            iconCls: 'fa-video',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        },{
            title: 'Customer List  ',
            iconCls: 'x-fa fa-list',
            items: [{
                xtype: 'customerlist'
            }]
        },{
            title: 'Rental Transaction',
            iconCls: 'x-fa fa-table',
            items: [{
                xtype: 'rentaltransaction'
            }]
        }]
        });

// Import the class
const db_connection = require('./db_connection');

// Create an instance of the class
const db = new db_connection();

// Call a method on the instance
const records = db.connectToDb();
 console.log(records);
