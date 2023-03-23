import * as C from './styles';
import Button from '../../components/button';
import {useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function Home() {
  const {signout} = useAuth();
  const navigate = useNavigate();

  const value = sessionStorage.getItem("user_token");
  const user = JSON.parse(value)
  
  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <h3>Olá {user.email}</h3>
      <Button Text="Sair" onClick={()=>[signout(),navigate("/")]}>Sair</Button>
    </C.Container>
  );
  }
  
  export default Home;
  