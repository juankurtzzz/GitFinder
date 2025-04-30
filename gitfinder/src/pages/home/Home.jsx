import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import ItemList from '../../components/ItemList/ItemList';
import Background from '../../assets/GitHub.svg';
import { useState } from 'react';

import './HomeStyle.css';

function Home() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleGetData = async () => {
    try {
      const userData = await fetch(`https://api.github.com/users/${user}`);
      const newUser = await userData.json();

      if (newUser.name) {
        const { avatar_url, name, bio, login } = newUser;
        setCurrentUser({ avatar_url, name, bio, login });

        const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
        const newRepos = await reposData.json();

        if (Array.isArray(newRepos)) {
          setRepos(newRepos);
        }
      } else {
        setCurrentUser(null);
        setRepos([]);
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <>
      <Header />
      <div className='Imagens'>
        <img src={Background} className='Background' alt="Background" />
      </div>
      <div className='Informacoes'>
        <div className='Input'>
          <input
            name="Usuario"
            value={user}
            onChange={event => setUser(event.target.value)}
            placeholder="@username"
          />
          <button onClick={handleGetData}>Buscar</button>
        </div>

        {currentUser && (
          <div className='Perfil'>
            <img
              src={currentUser.avatar_url}
              className='FotoPerfil'
              alt="Foto de Perfil"
            />
            <div className='InformacoesPerfil'>
              <h3>{currentUser.name}</h3>
              <span>@{currentUser.login}</span>
              <p>{currentUser.bio}</p>
            </div>
          </div>
        )}

        {repos.length > 0 && (
          <div className='ItemList'>
            <hr />
            <h3>Repositórios</h3>
            {repos.map((repo) => (
              <ItemList
                key={repo.id}
                title={repo.name}
                description={repo.description || 'Sem descrição'}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
