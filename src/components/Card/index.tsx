import { useState } from 'react';
import { useAuth } from '../../contexts/auth';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function Card({id, memberId, name, description, priority, finished, deleteTask}: any) {
    const navigate = useNavigate();
    const handleDelete = () => {
        deleteTask(id);
    }
    const handleEdit = () => {
        navigate(`/task/edit/${id}`);
    }
    const auth = useAuth();
    const [userId] = useState(auth.member.id);
    return (
    <div className="cardContainer">
        <div>
            <h2 className="titleCard">{id}</h2>
            <p className="textCard">{name}</p>
            <div className="body">
                <p className="textDescription">{description}</p>
                <p className={`textPriority ${(priority === 0 ? "low" : (priority === 1 ? "medium" : "high"))}`}>Prioridade: {priority === 0 ? "Baixa" : (priority === 1 ? "Média" : "Alta")}</p>
            </div>
        </div>
        {userId === memberId && <div>
            <button className="deleteBtn" onClick={handleDelete}>Excluir</button>
            <button className="editBtn" onClick={handleEdit}>Editar</button>
        </div>}
    </div>)
}