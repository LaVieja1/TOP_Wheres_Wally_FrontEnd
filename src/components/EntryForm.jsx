import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";

import './styles/EntryForm.css';

export default function EntryForm({ game, gameTimer }) {
    const [name, setName] = useState('');
    const { updateLeaderboard, setUpdateLeaderboard } = useOutletContext();
    const navigate = useNavigate();

    // Handle enviar form a leaderboard api
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                'https://top-wheres-wally-api.onrender.com/api/games/' + game._id + '/entries',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: name,
                        seconds: gameTimer,
                    }),
                },
            );
            if (response.status === 200) {
                setName('');
                setUpdateLeaderboard(!updateLeaderboard);
                navigate('/leaderboard/' + game.key);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="entry-form">
            <div className="form-group">
                <label htmlFor="name">
                    Escribir nombre
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    pattern="[a-zA-Z0-9]+"
                    maxLength={30}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <input type="hidden" name="seconds" value={gameTimer} />
            <button type="submit">Enviar</button>
        </form>
    );
}