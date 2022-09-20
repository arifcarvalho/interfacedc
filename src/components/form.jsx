import react from 'react'
import './form.css'


function Form() {
    return(
        <div className='formulario'> 
          <form>
            <h1>Login</h1>
            <input className='user' type="text" placeholder="Usuário" />
            <input className='senha' type="password" placeholder="******" />
            <button className='botao' type="submit">Acessar</button>            
          </form>
          
        </div>
    )
}
export default Form;