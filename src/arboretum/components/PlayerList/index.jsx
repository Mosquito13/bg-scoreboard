import { useCallback, useState } from 'react';

const PlayerList = () => {
  const [players, setPlayers] = useState(['']);

  const onChangePlayer = useCallback((idx, value) => {
    const newPlayers = [...players];

    newPlayers[idx] = value;

    setPlayers(newPlayers);
  }, [players]);

  const onAddPlayer = useCallback(() => {
    const newPlayers = [...players];

    newPlayers.push('');

    setPlayers(newPlayers);
  }, [players]);

  return (
    <div className="arboretum-player-list">
      {players.map((player, index) => {
        return (
          <div className="arboretum-player-list__player" key={index}>
            <input type="text" value={player} onChange={(evt) => onChangePlayer(index, evt.target.value)} />
            <button type="button" onClick={onAddPlayer}>+</button>
          </div>
        );
      })}
    </div>
  );
};

export default PlayerList;