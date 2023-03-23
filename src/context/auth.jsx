import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [user,setUser] = useState();
    useEffect(()=>{
        const userToken = sessionStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");
        
        if(userToken && usersStorage){
            const hasUser = JSON.parse(userToken)?.filter(
               (user) => user.email === JSON.parse(userToken).email
            );
                
            if(hasUser) setUser(hasUser[0]);
        }


    },[]);

    const signin = (email,password) =>{
        const usersStorage = JSON.parse(localStorage.getItem('users_db'));
        const hasUser = usersStorage?.filter((user) =>user.email === email)

        if(hasUser?.length){
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.random().toString(16).substring(2);
                sessionStorage.setItem("user_token",JSON.stringify({email,token}));
                setUser({email,password});
                return;
            }else{  
                return "Usuario ou Email Incorretos";
            }
        }else{
            return "Usuario não cadastrado!";
        }


    }

    const signup = (email,password)=>{
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const hasUser = usersStorage?.filter((user)=> user.email === email);

        if(hasUser?.length){
            return "Já tem uma conta com esse E-mail";
        }

        let newUser;

        if(usersStorage){
            newUser = [...usersStorage, {email, password}];
        }else{
            newUser = [{email,password}];
        }

        localStorage.setItem("users_db",JSON.stringify(newUser))
        return;
    }

    const signout = ()=>{
        setUser(null);
        sessionStorage.removeItem("user_token");

    }


    return <AuthContext.Provider value={{user,signed: !! user ,signin,signup,signout }}>{children}</AuthContext.Provider>
};

