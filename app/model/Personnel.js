Ext.define('MovieRentalApp.model.Personnel', {
    extend: 'MovieRentalApp.model.Base',

    fields: [
       {name: "id", type: "int"},
       {name: "movie", type: "string"},
       {name: "genre", type: "string"},
       {name: "release_date", type: "int"},
       {name: "rental_price", type: "int"},
    ],
    proxy: {
        type: 'rest',
        url: 'http://example.com/api/customers'
    }
});
