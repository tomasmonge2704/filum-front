import { useState } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_KEY;

export default function LoginPage() {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleUsernameChange = (event) => setUsername(event.target.value)
  const handlePasswordChange = (event) => setPassword(event.target.value)
  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      const { token } = await response.json()
      localStorage.setItem('token', token)
      window.location.href = '/'
    } else {
      // mostrar un error al usuario
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Iniciar sesión</button>
    </form>
  )
}
