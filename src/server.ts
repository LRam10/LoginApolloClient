import express,{Request, Response,NextFunction} from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import morgan from 'morgan';
import{isConnected} from './lib/middlewares/user';

import config from './config';
import { common } from '@mui/material/colors';
dotenv.config();
const app = express();
const port = process.env.NODE_PORT || 3000;
const DIST_DIR = path.join(__dirname,'../dist');
const HTML_FILE = path.join(DIST_DIR,'index.html');

app.use(morgan("common"));
//making the dist directory static
app.use(express.static(DIST_DIR));

//middleware
app.use(
    session({
        resave:false,
        saveUninitialized:true,
        secret:config.security.secretKey
    })
);

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));
app.use(cookieParser(config.security.secretKey));
app.use(cors({
    credentials:true,
    origin:true
}));

//routes
app.get('/dashboard',isConnected(true,['god','admin'],'/login?redirectTo=/dashboard'),(req:Request,res:Response,next:NextFunction)=>{
next();
});

app.get('/login',isConnected(false),(req:Request,res:Response,next:NextFunction)=>{
next();
});

app.get('/logout',(req:Request,res:Response)=>{
res.clearCookie('at');
res.redirect('/');
});

app.get('*',(req:Request,res:Response)=>{
    res.sendFile(HTML_FILE);
});
app.listen(port,()=>console.log(`Running at htttp://localhost:${port}`));