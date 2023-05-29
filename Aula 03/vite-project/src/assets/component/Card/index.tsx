import './style.css'
import foto from '/home/administrador/Documentos/Dev-Web/Aula 03/vite-project/src/assets/component/Card/foto.jpeg'

function Card(){
    return (
        <div className='card'>
        <div className='title'>Flamengo</div>

        <div className='content'>
          <div className='descriptinon'>Uma vez Flamengo, sempre Flamengo.</div>
          <div className='image'>
            <img src={foto} className='avatar' />
          </div>
        </div>
      </div>

    )
}
    
    export default Card