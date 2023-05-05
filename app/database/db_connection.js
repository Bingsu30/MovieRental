class  db_connection {
    constructor() {
      console.log('ExampleClass constructor called');
    }
    
    sayHello() {
      console.log('Hello from ExampleClass');
    }

    connectToDb () {
        const sql = require('mssql');
        const config = {
            server: 'OPREKIN-PC\\SQLEXPRESS',
            database: 'MovieRental',
            user: 'admin',
            password: '1234',
            port: 8000,
            options: {           
                encrypt: false
            }
            
        }
        var records = null;
        sql.connect(config, (err) => {
            if (err) console.log(err);
            else {
                console.log('Connected to SQL database!');
                // create a request object
            const request = new sql.Request();

            // execute a SQL query to select all records from a table
            request.query('SELECT * FROM Movies', (err, result) => {
                if (err) console.log(err);
                else{
                //console.log(result.recordset); // log the results to the console
                    console.log("Success"); // log the results to the console
                    records = result.recordset.values();           
                } 
            }); 
            }
        });
        return records;
    }

  }
  
  // Export the class
  module.exports = db_connection;




    









