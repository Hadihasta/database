1. node js = npm init
2. Express js = npm install -- save express
3. nodemon = npm install nodemon
   "scripts": {
   "start": "nodemon index.js",
   }
4. dynamic routes
   router.get("/:name", function (req, res) {
   res.send("hellaoaaaaaaaaaaaaasasasaaa express" + req.params.name);
   });

5.npm install --save pg = menghubungkan express dan postgresql(data base) (pg adalah node postgres)

6. Instal Db migrate
   npm install -g db-migrate
   npm install -g db-migrate-pg

db-migrate create initialization --sql -file (saya tidak dapat memunculkan file migrate up / down dengan ini) karena hanya bisa di run menggunakan git bash
