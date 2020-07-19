# Airport-Fuel-Inventory
This project helps keeping track of all Fuel transaction

# Run the Application straight away with existing client side code present in Public directory of Express
 
  1.open Express->Airport-Fuel-Inventory in the terminal
  2.In app.js file and give your mongodb uri
  3.npm install
  4.npm start

# Run Angular dev server and Express server separately
  
  #For Express
  1.open Express->Airport-Fuel-Inventory in the terminal
  2.In app.js file and give your mongodb uri
  3.npm install
  4.npm start
  
  #For Angular
  1.open Angular->Airport-Fuel-Inventory in the terminal
  2.npm install 
  3.make changes in url field in UtilityService.component.ts file and set it where express server is running
  4.ng serve --o

# Login Credential
   email: admin@airport.com
   password : Admin@2020


# sample data for schema in database

    Sample data for Transaction schema

       [
           {
               _id:"43955",
               airport_name:"Bhubaneswar Airport (BBI)",
               fuel_available:21500,
               Transaction:[
                   {
                       _id:"48795",
                       date_time:"2020-7-19 21:16:39",
                       Type:"IN",
                       aircraft:"",
                       fuel:"3000",
                       transaction_id_parent:"43955"
                   },
                    {
                       _id:"56793",
                       date_time:"2020-7-19 21:14:03",
                       Type:"OUT",
                       aircraft:"6E292",
                       fuel:"1400",
                       transaction_id_parent:"43955"
                   }
               ]

           }
       ]
 
  
