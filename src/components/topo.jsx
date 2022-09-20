import react from 'react'
import topo from './topo.css'

function Topo() {
    return(
        <section> 
        <header className='cabecalho_caixa'>   

        <div className='logo_caixa'>
                    <img className='logo_imagem' src='logo.png'></img>
        </div>          

            <nav className='navegacao_caixa'>
                <a href='#'className='navegacao_lista'>Início</a>
                <a href='#'className='navegacao_lista'>Serviços</a>
                <a href='#'className='navegacao_lista'>Contato</a>                     

            </nav>

                
        </header>        
    </section>
    )
}
export default Topo;