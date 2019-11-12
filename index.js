
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const express_handlebars_sections = require('express-handlebars-sections');



const minumanController = require('./controllers/minumanController');
const makananController = require('./controllers/makananController');
const manajerController = require('./controllers/manajerController');
const staffController   = require('./controllers/staffController');
const adminController   = require('./controllers/adminController');
const loginController 	= require('./controllers/loginUser');
const logOutController 	= require('./controllers/loginUser');


const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// Redirect login
const redirectLogin = (req, res, next)=>{
	if(!req.session.username){
		res.redirect('/login');
	}else{
		next();
	}
}

// express session
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}));
// Body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


app.get('/', (req, res) =>{

	console.log(req.session)

	if(req.session.loggedin){
		res.redirect('/admin');
	}else{
		res.render('login')
	}
    
});

app.get('/order',(req, res)=>{
	res.render('index');
});

app.use('/minuman', minumanController);
app.use('/makanan', makananController);
app.use('/manajer',redirectLogin, manajerController);
app.use('/staff',redirectLogin, staffController);
app.use('/admin',redirectLogin, adminController);
app.use('/login', loginController);
app.use('/logout', logOutController);



// set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5500;
app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));