const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const app = express();
const passport = require('passport');
const session = require('express-session');
const findOrCreate = require('mongoose-findorcreate')
const path = require('path');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({extends:true}));

app.use(express.static(path.join(__dirname+"/public")))
//app.set('view engine','jsx');

app.use(session({
    secret:"Our little secret.",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

// mongoose.connect('mongodb://localhost:27017/todolistDB');
mongoose.connect('mongodb+srv://admin-chris:Yan990724!@cluster0.meh9dpn.mongodb.net/todolistDB');

const taskSchema = new mongoose.Schema({
    title:String,
    content:String,
    time:String,
    priority:String
})

const filterSchema = new mongoose.Schema({
    name:String,
    query:String
})

const labelSchema = new mongoose.Schema({
    name:String
})

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    tasks:[taskSchema],
    filters:[filterSchema],
    labels:[labelSchema]
})



userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model('User',userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get("/api/login",function (req,res){
//     res.redirect("/login");
// })

// app.get('*',function (req,res){
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// })

app.get('/app/today',function (req,res){
    res.sendFile(path.join(__dirname,'/public','index.html'));
})

app.get('/app/inbox',function (req,res){
    res.sendFile(path.join(__dirname,'/public','index.html'));
})

app.get('/app/filters-labels',function (req,res){
    res.sendFile(path.join(__dirname,'/public','index.html'));
})

app.get('/app/upcoming',function (req,res){
    res.sendFile(path.join(__dirname,'/public','index.html'));
})

app.get('/login',function (req,res){
    res.sendFile(path.join(__dirname,'/public','index.html'));
})

app.get('/signup',function (req,res){
    res.sendFile(path.join(__dirname,'/public','index.html'));
})

app.get("/api/app",function (req,res){
    if(req.isAuthenticated()){
        res.redirect("/app/today");
    }else{
        res.redirect("/login");
    }
})

app.get("/api/logout",function (req,res){
    req.logout();
    res.redirect("/");
})

app.get("/api/userinfo",function (req,res){
    User.find({})
        .then((items)=>res.json(items))
        .catch((err)=>console.log(err));
    });

app.post("/api/login",function (req,res){
    const  user = new User({
        username:req.body.username,
        password:req.body.password
    });
    console.log(req.body);
    req.login(user,function (err){
        if(err){
            console.log('fail');
            // res.redirect("/login");
        }else{
            passport.authenticate("local", {failureRedirect: "/login"})(req,res,function (){
                // res.redirect("/app/today");
                res.send('200');
                console.log('Log in successfully');
            })
        }
    })
    // User.findOne({username:req.body.username},function (err,user){
    //     if(user.password!==req.body.password){
    //         res.redirect("/login");
    //     }else{
    //         res.redirect("/app");
    //     }
    // })
})

app.post("/api/signup",function (req,res){

    User.register({username:req.body.username},req.body.password,function (err,user){
        if(err){
            console.log(err);
            res.send('404');
        }else{
            passport.authenticate("local")(req,res,function (){
                res.send('200');
            })
        }
    })

})

app.post('/api/addTask/:username',function (req,res){
    const username = req.params.username;
    const page = req.body.page;
    console.log(req.body);
    let preTasks = [];
    User.find({username:username},function (err,foundList){
        if(!err){
            if(foundList[0]){
                preTasks = foundList[0].tasks;
                const newTask = {
                    title:req.body.title,
                    content:req.body.content,
                    time:req.body.time,
                    priority:req.body.priority
                }
                preTasks.push(newTask);
                User.updateOne({username:username},{tasks:preTasks},function (err){
                    if(err){
                        console.log(err);
                    }else{
                        res.send('200');
                        console.log("Successfully add task");
                    }
                });
            }
        }else{
            console.log(err);
        }
    })
})

app.post('/api/deleteTask',function (req,res){
    const username = req.body.username;
    const id = req.body.id;
    console.log(id);
    console.log(username);
    // const title = req.body.title;
    // const time = req.body.time;
    // const priority = req.body.priority;
    let preTasks = [];
    User.find({username:username},function (err,foundList){
        if(!err){
            if(foundList[0]){
                preTasks = foundList[0].tasks;
                let curTasks = preTasks.filter(task =>{
                    return !(task.id===id)
                })
                User.updateOne({username:username},{tasks:curTasks},function (err){
                    if(err){
                        console.log(err);
                    }else{
                        res.send('200');
                        console.log("Successfully delete task");
                    }
                });
            }
        }else{
            console.log(err);
        }
    })

})

app.post('/api/addFilter',function (req,res){
    const username = req.body.username;
    const name = req.body.name;
    const query = req.body.query;
    User.find({username:username},function (err,foundList){
        if(!err){
            if(foundList[0]){
                let preFilters = foundList[0].filters;
                const newFilter = {
                    name:name,
                    query:query
                }
                preFilters.push(newFilter);
                User.updateOne({username:username},{filters:preFilters},function (err){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Successfully add filter.");
                    }
                });
            }
        }
    })

})

app.post('/api/deleteFilter',function (req,res){
    const username = req.body.username;
    const id = req.body.id;

    User.find({username:username},function (err,foundList){
        if(!err){
            if(foundList[0]){
                let preFilters = foundList[0].filters;
                let curFilters = preFilters.filter(filter =>{
                    return !(filter.id===id);
                })
                User.updateOne({username:username},{filters:curFilters},function (err){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Successfully delete filter");
                    }
                });
            }
        }else{
            console.log(err);
        }
    })

})

app.post('/api/deleteLabel',function (req,res){
    const username = req.body.username;
    const id = req.body.id;
    User.find({username:username},function (err,foundList){
        if(!err){
            if(foundList[0]){
                let preLabels = foundList[0].labels;
                let curLabels = preLabels.filter(label =>{
                    return !(label.id===id);
                })
                User.updateOne({username:username},{labels:curLabels},function (err){
                    if(err){
                        console.log(err);
                    }else{
                        res.send('200');
                        console.log("Successfully delete label");
                    }
                });
            }
        }else{
            console.log(err);
        }
    })

})

app.post('/api/addLabel',function (req,res){
    const username = req.body.username;
    const name = req.body.name;
    User.find({username:username},function (err,foundList){
        if(!err){
            if(foundList[0]){
                let preLabels = foundList[0].labels;
                const newLabel = {
                    name:name,
                }
                preLabels.push(newLabel);
                User.updateOne({username:username},{labels:preLabels},function (err){
                    if(err){
                        console.log(err);
                    }else{
                        res.send('successfully add label.');
                        console.log("Successfully add label.");
                    }
                });
            }
        }
    })

})

let port = process.env.PORT;
if(port==null||port==""){
    port=3030;
}

app.listen(port,function (){
    console.log("Server running on port 3030!");
})