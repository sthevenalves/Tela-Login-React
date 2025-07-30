import {FaUser, FaLock} from "react-icons/fa";

const login = () => {
  return (
    <div className="container">
      <form>
        <h1>Acesse o Sistema</h1>
        <div>
          <input type="email" placeholder='E-mail' />
          <FaUser className="icon" />
        </div>
        <div>
          <input type="password" placeholder='Senha'/>
          <FaLock className="icon" />
        </div>
        <button>Entrar</button>
      </form>
    </div>
  )
}

export default login
