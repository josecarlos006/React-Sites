import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEntrar = () => {
    console.log(email);
    console.log(password);
  }

  return (
    <div>
      <form>
        <label>
          <span>E-mail</span>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
        </label>
        <label>
          <span>Senha</span>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
        </label>

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login
