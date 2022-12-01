import {FC} from 'react';
interface IProps{
    connectedUser:any
}
const Dashboard:FC<IProps> = ({connectedUser}) => {
  return (
    <div>
      <h1>Hello <span>{connectedUser.username}</span></h1>
    </div>
  )
}

export default Dashboard;
