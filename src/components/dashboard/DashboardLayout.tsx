import React,{FC,ReactElement,useContext} from 'react'
import { UserContext } from '../../contexts/users'
import Dashboard from './Dashboard';
const DashboardLayout :FC = ():ReactElement => {
  const {connectedUser} = useContext(UserContext);
  if(connectedUser){
    return (
      <Dashboard connectedUser={connectedUser}/>
    )
  }
  return <div></div>
}

export default DashboardLayout
