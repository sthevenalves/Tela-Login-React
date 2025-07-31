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
        <div className="recall-forget">
          <label htmlFor="">
            <input type="checkbox" />
            Lembre de Mim
          </label>
          <a href="#">Esqueceu a Senha?</a>
        </div>
        
        <button>Entrar</button>
      <div className="singup-link">
        <p>Não tem uma conta? <a href="#">Registrar</a></p>
      </div>
      </form>
    </div>
  )
}

export default login
