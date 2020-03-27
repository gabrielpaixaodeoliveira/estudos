import React , {useState} from 'react';
import {FiLogIn} from 'react-icons/fi'
import './styles.css';
import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api'
export default function Login(){
    const [id, setId] = useState("");
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try {  
            var response = await api.post("sessions", {id});
            localStorage.setItem('ongID',id);
            localStorage.setItem('ongName',response.data.name);
            history.push("/profile")
            
        } catch (error) {
            alert("Falha no login");
        }      
    }
    return(
        
        <div className="login-container">
            <section className="form">
            <img src={logoImage} alt="Be the hero" />
            <form onSubmit={handleLogin} >
                <h1>Faça seu logon</h1>
                <input placeholder="Sua ID"  value={id} onChange={e => setId(e.target.value)}/>
                <button className="button" type="submit">Entrar</button>
                <Link className="backlink" to="/register"><FiLogIn size={16} color="#E02041"/> Não tenho cadastro</Link>
            </form>
            </section>
            <img src={heroesImage} alt="Heroes" />
        </div>
    )
}