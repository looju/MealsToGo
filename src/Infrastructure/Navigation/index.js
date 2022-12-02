import React,{useContext} from 'react'
import { Navigator } from './App-navigator'
import { AuthenticationContext } from '../../Services/Authentication/Authentication-context'
import {AccountNavigator} from './Account-navigator'

export const index=()=>{
    const {isAuthenticated}=useContext(AuthenticationContext)
 return isAuthenticated?<Navigator/>:<AccountNavigator/>
}