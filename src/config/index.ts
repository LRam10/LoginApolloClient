import common from './common.json';
import local from './local.json';
import production from './production.json';

interface IConfig{
    baseUrl:string
    apiUrl:string
    server:{
        port:number
    }
    security:{
        secretKey:string
        expiresIn:string
    }
}

const{NODE_ENV = 'development'} = process.env;
let environment = 'local'; 
if(NODE_ENV !=='development'){
    environment = NODE_ENV;
}
//configuration by environment
const config:IConfig = {
    ...common,
    ...(environment === 'local' ? local : production)
}

export default config;