import * as C from "./styles";
import Input from '../../components/input';
import Button from '../../components/button';
import {Link,useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from "react";

function Signup() {
  const {signup} = useAuth();
  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [emailConf,setEmailConf] = useState("");
  const [senha,setSenha] = useState("");
  const [error,setError] = useState("");

  const handleSignup = ()=>{
    if(!email | !emailConf | !senha){
      setError("Preencha os campos");
      return;
    }else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;      
    }
    const res = signup(email,senha);
    if(res){
      setError(res);
      return;
    }
    setError("Cadastrado com Sucesso");
    navigate('/');
  }

    return (
     <C.Container>
        <C.Label>Sistema de Login</C.Label>
        <C.Content>
        <Input type="email" placeholder="Digite o seu email" value={email} onChange={(e)=>[setEmail(e.target.value ),setError("")]}/>
        <Input type="email" placeholder="Confirme seu email" value={emailConf} onChange={(e)=>[setEmailConf(e.target.value ),setError("")]}/>
          <Input type="password" placeholder="Digite sua Senha" value={senha} onChange={(e)=>[setSenha(e.target.value ),setError("")]}/>
          <C.LabelError>{error}</C.LabelError>
          <Button Text="Inscreva-se" onClick={handleSignup}/>
          <C.LabelSignup>
           Já tem conta?
            <C.Strong>
              <Link to="/signin">&nbsp;Entre</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.Content>
      
     </C.Container>
    );
  }
  
  export default Signup;
  