import { useCallback, useState } from 'react';

import TextField from '../../common/components/TextField';

const PlayerList = () => {
  const [players, setPlayers] = useState(['']);

  const updatePlayer = useCallback((value, index) => {
    const newPlayers = [...players];

    newPlayers[index] = value;

    setPlayers(newPlayers);
  }, [players]);

  const addPlayer = useCallback(() => {
    const newPlayers = [...players];

    newPlayers.push('');

    setPlayers(newPlayers);
  }, [players]);

  return (
    <div className="w-full h-full flex flex-col items-center bg-red-600">
      {players.map((player, index) => (
        <div key={index} className="w-full flex p-2 bg-green-400">
          <TextField
            value={player}
            onChange={(value) => updatePlayer(value, index)}
            placeholder="Jogador"
          />
          <button onClick={addPlayer}>+</button>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;