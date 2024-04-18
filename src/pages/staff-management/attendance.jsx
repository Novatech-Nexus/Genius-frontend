 //import dependencies
 const express =require ('express')
 const QRcode = require('qrcode');
 const app = express();
// const PORT = 3000;

 //define QR Generation route
 app.get('/qrcode', (req,res) => {
  //define the url that we would like to convert into qrcode
         const url = 'https://www.google.com/';

         //convert url into data url
         QRcode.toDataURL(url, (err, qrCodeUrl) => {

          //handle qr code generation errors
          //conditional statement
          if (err) {
            //if there is an error we will an error response '500 Internel server error'
            res.status(500)('Internel Server Error')
          }else {
            //if there is no error we will send a response that includes HTML page
            res.send(`
                 <!Doctype HTML>
                 <html>
                    <head>
                       <title>QR code generator</title>    
                    </head>     
                    <body>
                       <h1>QR Code generator</h1>
                       <img src="${qrCodeUrl}" alt="QR Code">
                       <p>Scan the QR code for mark attendence</p>
                    </body>
                 </html>
            `);
          }

         });
 });

 //Start the server and listen to request
 app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
 })