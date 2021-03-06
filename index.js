
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const express_handlebars_sections = require('express-handlebars-sections');
const MySQLStore = require('express-mysql-session')(session);

// const MySQLStore = require('express-mysql-session')(session);

const dbSession = require('./dbSession');

const minumanController = require('./controllers/minumanController');
const makananController = require('./controllers/makananController');
const manajerController = require('./controllers/manajerController');
const staffController   = require('./controllers/staffController');
const adminController   = require('./controllers/adminController');
const loginController 	= require('./controllers/loginUser');
const logOutController 	= require('./controllers/loginUser');
const cartController 	= require('./controllers/cartController');
const showCartController = require('./controllers/showCartController');
const direkturController = require('./controllers/direkturController');


const app = express();


const sessionStore = new MySQLStore(dbSession);

// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// express session
app.use(session({
	secret: 'secret',
	resave: false,
	store: sessionStore,
	saveUninitialized: false
}));
// Body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


// Redirect login
const redirectLogin = (req, res, next)=>{
	if(!req.session.username){
		res.redirect('/login');
	}else{
		next();
	}
}


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
app.use('/cart', cartController);
app.use('/showcart', showCartController);
app.use('/direktur',redirectLogin, direkturController);



// set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));