import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/pagina-inicial");
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Pagina Inicial</button>
    </div>
  )
}

export default Login
