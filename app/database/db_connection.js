Ext.define('MyApp.store.Movie', {
  extend: 'Ext.data.Store',
  model: 'MyApp.model.Movie',

  proxy: {
      type: 'rest',
      url: '/api/movies',
      reader: {
          type: 'json',
          rootProperty: 'data'
      },
      writer: {
          type: 'json',
          writeAllFields: true
      }
  }
});

var movieStore = Ext.create('MyApp.store.Movie');
movieStore.load();