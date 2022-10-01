import { useCallback, useState } from 'react';

import Counter, { SIZE_MEDIUM } from '../components/Counter';
import TextField from '../components/Fields/TextField';
import NavigationStep from '../layouts/NavigationStep';

const SimplePlayerList = ({ min, max, onClickNext }) => {
  const [players, setPlayers] = useState(['', '']);

  const updatePlayer = useCallback(
    (value, index) => {
      const newPlayers = [...players];

      newPlayers[index] = value;

      setPlayers(newPlayers);
    },
    [players]
  );

  const increasePlayers = useCallback(() => {
    const newPlayers = [...players];

    newPlayers.push('');

    setPlayers(newPlayers);
  }, [players]);

  const decreasePlayers = useCallback(() => {
    const newPlayers = [...players];

    newPlayers.pop();

    setPlayers(newPlayers);
  }, [players]);

  return (
    <NavigationStep onClickNext={() => onClickNext(players)}>
      <div className="text-2xl mb-4">
        Jogadores
      </div>
      <Counter
        min={min}
        max={max}
        value={players.length}
        onIncrease={increasePlayers}
        onDecrease={decreasePlayers}
        size={SIZE_MEDIUM}
      />
      {players.map((player, index) => (
        <div key={index} className="w-full flex mt-4">
          <TextField
            value={player}
            onChange={(value) => updatePlayer(value, index)}
            placeholder={`Jogador #${index + 1}`}
          />
        </div>
      ))}
    </NavigationStep>
  );
};

export default SimplePlayerList;
