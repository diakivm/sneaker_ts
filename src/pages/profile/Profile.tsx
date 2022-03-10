import React from 'react'
import {FC} from "react";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import LoginPage from "../login/LoginPage";
import {useAction} from "../../hooks/useAction";
import LoginedPage from "../logined/LoginedPage";


const Profile: FC = () => {

   const { isAuth} = useTypeSelector(i => i.user)

   return (
          isAuth ?
                 <LoginedPage/>
                 :
                 <LoginPage/>
   )
}

export default Profile
