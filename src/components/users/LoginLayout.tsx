import React,{FC,ReactElement,useContext} from 'react';
import { redirectTo } from '@contentpi/lib';
import { UserContext } from '../../contexts/users';
import Login from './Login';

interface IProps{
    currentUrl:string
}
const LoginLayout:FC<IProps> = ({currentUrl}):ReactElement => {
    const {login} =useContext(UserContext);

  return (
    <Login login={login} 
    currentUrl={currentUrl}/>

  )
}

export default LoginLayout;
