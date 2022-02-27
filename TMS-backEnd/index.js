const express = require('express');
const cors = require('cors');
const enrollment = require('./src/model/EnrollmentModel');
const enrollmentRouter = require('./src/routes/EnrollmentRoute');
const path = require('path')

const app = express();
app.use(cors());
// Post Method
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('./build/'));




app.use('/api/enrollments',enrollmentRouter); 


// app.get('/*',function(req,res){
//     res.sendFile(path.join(__dirname+'/build/index.html'));
// });





app.listen(process.env.PORT || 5001,()=>{
    console.log("Server Ready on 5001"); 
});