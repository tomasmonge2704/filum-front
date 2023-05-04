import Router from 'next/router'
import { useEffect } from 'react'
import {verify} from 'jsonwebtoken'
const secretKey = process.env.CLAVE_TOKEN

function validateToken(token){
    try{
        const decoded = verify(token, secretKey)
        return decoded
    }
    catch (err){
        return err
    }
}

export function CheckAuth() {
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token || !validateToken(token).userId) {
          Router.push('/login')
        }
      }, [])    
  }