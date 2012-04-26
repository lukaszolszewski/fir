document.addEventListener("deviceready", onDeviceReady, false);

         function onDeviceReady() {
             var db = window.openDatabase("warehouse", "1.0", "warehouse", 100000);
             db.transaction(populateDB, errorCB, successCB);
         }
         function populateDB(tx) {
             tx.executeSql('CREATE TABLE IF NOT EXISTS products (name, code, pkwiu, description)');
         }
         function successCB() {

         }
         function errorCB(err) {
             navigator.notification.alert("Error processing SQL: "+err.code);
         }

         function addProduct() {
             var name = document.getElementById("product-name").value;
             var code = document.getElementById("product-code").value;
             var pkwiu = document.getElementById("product-pkwiu").value;
             var description = document.getElementById("product-description").value;
             var db = window.openDatabase("warehouse", "1.0", "warehouse", 100000);
             db.transaction(function(tx) {
                tx.executeSql('INSERT INTO products VALUES (?,?,?,?)',[name, code, pkwiu, description], successCB, errorCB);
             });
         }

         function getProduct() {
             var db = window.openDatabase("warehouse", "1.0", "warehouse", 100000);
             db.transaction(function(tx) {
                 tx.executeSql('SELECT * FROM products ',[], querySuccess, errorCB);
             });
         }

         function queryDB(tx) {
             tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
         }
         function querySuccess(tx, results) {
           navigator.notification.alert("Returned rows = " + results.rows.length);
           navigator.notification.alert("data in first row" + results.rows.item(1).name);
         }