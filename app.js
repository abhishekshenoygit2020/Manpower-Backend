require("dotenv").config(); //configuring database
var express = require('express');
var cors = require('cors');
const path = require("path")
var bodyParser = require("body-parser");
var app = express();
const baseRoute = require("./api/Routes");
const { response } = require("express");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use('/Images', express.static('Images')); first method
app.use('/Images', express.static(path.join(__dirname, 'Images')));
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json());
app.use(baseRoute);

app.listen(process.env.APP_PORT,()=>{
    console.log("server is running......" ,process.env.APP_PORT);
});
console.log("database is connected successfully....");
console.log("sd is connected successfully....");

// SELECT 
//     m.month_num,
//     m.month_name,
//     COALESCE(d.record_count, 0) AS record_count
// FROM (
//     SELECT 1 AS month_num, 'January' AS month_name UNION ALL
//     SELECT 2, 'February' UNION ALL
//     SELECT 3, 'March' UNION ALL
//     SELECT 4, 'April' UNION ALL
//     SELECT 5, 'May' UNION ALL
//     SELECT 6, 'June' UNION ALL
//     SELECT 7, 'July' UNION ALL
//     SELECT 8, 'August' UNION ALL
//     SELECT 9, 'September' UNION ALL
//     SELECT 10, 'October' UNION ALL
//     SELECT 11, 'November' UNION ALL
//     SELECT 12, 'December'
// ) m
// LEFT JOIN (
//     SELECT  
//         MONTH(CurrentDate) AS month_num,  
//         SUM(warrantySoldFor) AS record_count 
//     FROM warranty 
//     WHERE YEAR(CurrentDate) = YEAR(CURRENT_DATE())
//     GROUP BY MONTH(CurrentDate)
// ) d ON m.month_num = d.month_num
// ORDER BY m.month_num;
