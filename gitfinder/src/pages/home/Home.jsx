import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Background from '../../assets/GitHub.svg'

import './HomeStyle.css'

function Home() {
  return (
    <>
      <Header />
      <div className='Imagens'>
        <img src={Background} className='Background' />
      </div>
      <div className='Informacoes'>
        <div className='Input'>
          <input name="Usuario" placeholder="@username" ></input>
          <button> Buscar </button>
        </div>
        <div className='Perfil'>
          <img src='https://avatars.githubusercontent.com/u/192158390?v=4' className='FotoPerfil'/>
          <div className='InformacoesPerfil'>
            <h3>Juan Pietro Kurtz</h3>
            <span>@juankurtzzz</span>
            <p>Descrição</p>
            <hr/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
