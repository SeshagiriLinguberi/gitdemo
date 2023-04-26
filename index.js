const app = require('express');
app.get('/api//get/users',(req,res)=>{

})
/*const { stat } = require('fs');
const http = require('http');
var port = 8000;
let employees= [
    {
        id:123,
        email:"abc@gmail.com",
        personalDetals:
    {
        name:"chinna",
        mobile:1234567890,
        salary:120000
    }},
    {  
         id:456,
        email:"def@gmail.com",
        personalDetals:
        {
            name:"naresh",
            mobile:1234567890,
            salary:120000
        }},
        {
            id:789,
            email:"ghi@gmail.com",
            personalDetals:
            {
                name:"suresh",
                mobile:1234567890,
                salary:120000
            }}
]
var url = require('url');
// var add ='http://localhost:8000/api/add/user';
var server = http.createServer(function (req,res)
{
    let resp = {};
    var message='';
    const p = new URL(req.url,"http://localhost:8000")
    //console.log("url::----------",ur);
    //let p = url.parse(req.url,true);
    
    // console.log("path::",p);

    if(p.pathname == "/api/get/users")
    {
        console.log("method:::",req.method);
        console.log("entered into /api/get/users");
        
         res.write(JSON.stringify({status:200,resp:employees}));
        res.end();
    }
     else if(p.pathname == "/api/add/user")
    {
        console.log("enttered /api/add/user");
        var manager={name:'swami',id:4566}
        employees.push(manager);
         res.write(JSON.stringify({status:200,resp:employees}));
         res.end();
    }
     else if(p.pathname == "/api/get/user/by/id"){
    // {   console.log("path:::",p);
    //     console.log("ggg",p.searchParams.get('id'));
        var userid=p.searchParams.get('id');
        console.log(userid);
        let newArr=[];
        var status= false;
        employees.filter((value)=>{
            if(value.id==userid)
            {
                newArr.push(value);
                console.log("employee information :>>>>>>"+newArr);
                 status=true;
                 res.write(JSON.stringify({status:200,resp:newArr}));
                 res.end();
               
            }
        }) 
        if(status==true)
        {
            res.write(res.write(JSON.stringify({status:200,resp:newArr})));
            res.end();
        }
        else
        {
            res.write(JSON.stringify({status:-999,error:'true',message:'user not found'}))
            res.end();
        }
        if(newArr.length!=0)
        {
            res.write(res.write(JSON.stringify({status:200,resp:newArr})));
            res.end();
        }
        else
        {
            console.log(" o  juser");
            res.write(JSON.stringify({status:-999,error:'true',message:'user not found'}))
            res.end();
        }
    }
    else if(p.pathname == "/api/update/user/by/id")
    { 
        let status=false;
        var userid=p.searchParams.get('id');
        console.log(userid);
        employees.filter((value)=>{
            if(value.id==userid)
            {
                 value.name="update";
                 value.mobile="update";
                 status=true;
                console.log("employee information :>>>>>>"+employees);
                res.write(JSON.stringify({status:200,resp:employees}));
                res.end();
                
            }
        })
        if(status==true)
        {
            res.write(res.write(JSON.stringify({status:200,resp:employees})));
            res.end();
        }
        else
        {
            res.write(JSON.stringify({status:-999,error:'true',message:'user not found'}))
            res.end();
        }
        

    }
    else if(p.pathname == "/api/delete/user/by/id")
    {
        var filteredData;
        var userid=p.searchParams.get('id');
        var status=false;
       employees.filter((value)=>{
        if(value.id == userid){ 
            status= true
              filteredData= employees.filter((item)=>{
                if(item.id!=userid)
                {
                    return value;
                }
        
            })
            
        }
        })

        if(status)
        {
            console.log(filteredData);
            res.write((JSON.stringify({status:200,resp:filteredData})));
            res.end();
        }
        else
        {
            res.write(JSON.stringify({status:-999,error:'true',message:'user not found'}))
            res.end();
        }
        
    }
    
});
server.listen(port,()=>{
    console.log(`server running on localhost ${port}`);
});*/



