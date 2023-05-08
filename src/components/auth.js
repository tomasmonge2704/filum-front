import { useEffect,useContext } from 'react'
import { UserContext } from '@/context/userContext'
import {verify} from 'jsonwebtoken'
const secretKey = process.env.CLAVE_TOKEN
import Router from 'next/router'

function validateToken(token){
    try{ 
        return verify(token, secretKey)
    }
    catch (err){
        return undefined
    }
}

export function CheckAuth({ children }) {
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token){
            Router.push('/login');
        } else{
            const decoded = validateToken(token)
            if(!decoded){
                Router.push('/login');
            }else{
                setUser(decoded.user);
            }
        }
      }, [])    
      return (
        <>
        {children}
        </>)
  }