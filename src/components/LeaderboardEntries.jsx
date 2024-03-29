import { useOutletContext } from "react-router-dom";

export default function LeaderboardEntries({ lbGame }) {
    const { lbEntries } = useOutletContext();
    let placeCounter = 1;

    return (
        <>
            <h2 className="lb-game-title">{lbGame.title}</h2>
            <div className="lb-table">
                <table>
                    <thead>
                        <tr>
                            <th>Lugar</th>
                            <th>Nombre</th>
                            <th>Tiempo</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lbEntries
                            .filter((entry) => entry.game === lbGame._id)
                            .map((entry) => {
                                return (
                                    <tr key={entry._id}>
                                        <td>{placeCounter++}</td>
                                        <td className="entry-name">{entry.name}</td>
                                        <td>
                                            {entry.seconds < 3600
                                                ? new Date(entry.seconds * 1000).toISOString().slice(14, 19)
                                                : new Date(entry.seconds * 1000).toISOString().slice(11, 19)}
                                        </td>
                                        <td>{new Date(entry.timestamp).toLocaleDateString()}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
}