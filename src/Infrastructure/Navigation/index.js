import React,{useContext} from 'react'
import { AppNavigation } from './App-navigator'
import { AuthenticationContext } from '../../Services/Authentication/Authentication-context'
import {AccountNavigation} from './Account-navigator'

export const Navigation=()=>{
 const {isAuthenticated}=useContext(AuthenticationContext)
 
 return isAuthenticated? <AppNavigation/>:<AccountNavigation/>

}