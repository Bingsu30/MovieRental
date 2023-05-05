Ext.define('MovieRentalApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MovieRentalApp.model.Personnel',

    data: { items: [
        { id:"1.",  movie: 'John wick 4',         genre: "Action",    release_date: "March 24, 2023",     rental_price: "450 pesos" },
        { id:"2.",  movie: 'Seven Sundays',       genre: "Drama",     release_date: "October 11, 2017",  rental_price: "450 pesos" },
        { id:"3.",  movie: 'Partners in crime',   genre: "Comedy",    release_date: "December 25, 2022", rental_price: "450 pesos" },
        { id:"4.",  movie: 'The healing',         genre: "Horror",    release_date: "July 25, 2012",     rental_price: "450 pesos" },
        { id:"5.",  movie: 'Hello, love, Goodbye',genre: "Romance",   release_date: "July 31, 2019",     rental_price: "450 pesos" }
    ]},

    proxy: {    
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
    
