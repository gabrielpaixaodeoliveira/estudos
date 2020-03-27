import React, {useEffect,useState} from 'react';
import './styles.css';
import logoImage from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi'

import api from '../../services/api'

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongID');
    const history = useHistory();
    useEffect(()=>{api.get('profile', {
        headers:{
            Authorization: ongId
        }
    }).then(response => {
        setIncidents(response.data)
    })
}, [ongId]);
    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId
                }});
        } catch (error) {
            alert("Erro ao deletar o caso");
        }

        setIncidents(incidents.filter(incident=> incident.id !== id ));
    }
    function handleLogout(){
        localStorage.clear();
        history.push("/");
    }
    return(
        <div className="profile-container">
            <header>
            <img src={logoImage} alt="Be the hero"></img>
            <span>Bem vindo {ongName}</span>
            <Link className="button" to="/newIncident">Cadastrar novo caso</Link>
            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#E02041"/>
            </button>
            </header>
            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                            <li key={incident.id}>
                            <strong>CASO: </strong>
                            <p>{incident.title}</p>

                            <strong>DESCRICAO</strong>
                            <p>{incident.description}</p>

                            <strong>VALOR: </strong>
                            <p>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}</p>

                            <button onClick={()=>handleDeleteIncident(incident.id)} type="button">
                                <FiTrash2 size={20} color="#a8a8b3"/>
                            </button>
                            </li>

                ))}
            </ul>

        </div>
    );
}