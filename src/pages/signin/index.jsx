import { useState } from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import * as C from './styles';
import { Link,useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function Signin() {
  const {signin} = useAuth();
  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  const [error,setError] = useState("");
  
  const handleLogin = () =>{
    if (!email){
      setError("Preencha todos os campos");
      return;
    }
    const res = signin(email,senha);
    if(res){
      setError(res);
      return;
    }
    navigate("/home");
  };

  return (
    <C.Container>
      <h1>SISTEMA AULA</h1> 
      <C.Label>Entrar</C.Label>
      <C.Content>
          <Input type="email" placeholder="Digite o seu email" value={email} onChange={(e)=>[setEmail(e.target.value ),setError("")]}/>
          <Input type="password" placeholder="Digite sua Senha" value={senha} onChange={(e)=>[setSenha(e.target.value ),setError("")]}/>
          <C.LabelError>{error}</C.LabelError>
          <Button Text="Entrar" onClick={handleLogin}/>
          <C.LabelSignup>
            Não tem ainda uma conta?
            <C.Strong>
              <Link to="/signup">&nbsp;Registre-se</Link>
            </C.Strong>
          </C.LabelSignup>
        
      </C.Content>  
    </C.Container>
  );
}
  
export default Signin;
  