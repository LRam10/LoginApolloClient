import {
    FC,
    useEffect,
    useState,
    ReactElement, 
    createContext} from 'react';
    import { useCookies } from 'react-cookie';
    import { getGraphQlError,redirectTo} from '@contentpi/lib';
    import { useQuery,useMutation } from '@apollo/client';
    //GraphQL 
    import LOGIN_MUTATION from '../graphql/user/login.mutation';
    import GET_USER_DATA_QUERY from '../graphql/user/getUserData.query';
    //interfaces
    interface IUserContext{
        login(input:any):any
        connectedUser:any
    }
    interface IProps{
        page?:string
        children:ReactElement
    }
    //creating context
    export const UserContext = createContext<IUserContext>({
        login:()=>null,
        connectedUser:null
    });
const UserProvider:FC<IProps> =({page= '',children}):ReactElement=>{
        const [cookie,setCookie] = useCookies();
        const [connectedUser,setConnectedUser] = useState(null);
        const [loginMutation] = useMutation(LOGIN_MUTATION);
        const {data:getUserData} = useQuery(GET_USER_DATA_QUERY,{
            variables:{at:cookie.at || ''}
        });
        useEffect(()=>{
            if(getUserData){
               if( !getUserData.getUserData.id && page !== 'login' ){
                    redirectTo('login?redirectTo=/dashboard',false);
               }else{
                setConnectedUser(connectedUser=>({connectedUser,...getUserData.getUserData}));
               }
            }
        },[getUserData,page]);

        const login =async (input:{email:string,password:string}):Promise<any> => {
            try {
                const {data:dataLogin} = await loginMutation({
                    variables:{email:input.email,password:input.password}
                });
                if (dataLogin){
                    //save cookie token
                    setCookie('at',dataLogin.login.token,{path:'/'});
                }
                return dataLogin.login.token;
            } catch (error) {
                return getGraphQlError(error);
            }
        }
        const context ={
            login,connectedUser
        }
        return <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    
    } 
export default UserProvider;