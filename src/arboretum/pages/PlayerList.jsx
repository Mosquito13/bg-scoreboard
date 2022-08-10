import { useCallback, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import Button from '../../common/components/Button';
import TextField from '../../common/components/TextField';
import StepButton, { TYPE_NEXT } from '../../common/components/StepButton';

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 4;

const PlayerList = () => {
  const navigate = useNavigate();
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
    <div className="w-full h-full flex flex-col items-center">
      <div className="text-2xl">
        Jogadores
      </div>
      <div className="flex items-center mt-4">
        <div className="w-8 h-8 mr-5">
          <Button
            icon={<FiMinus />}
            text="Diminuir"
            onClick={decreasePlayers}
            disabled={players.length === MIN_PLAYERS}
          />
        </div>
        <div className="text-5xl">
          {players.length}
        </div>
        <div className="w-8 h-8 ml-5">
          <Button
            icon={<FiPlus />}
            text="Aumentar"
            onClick={increasePlayers}
            disabled={players.length === MAX_PLAYERS}
          />
        </div>
      </div>
      {players.map((player, index) => (
        <div key={index} className="w-full flex mt-4">
          <TextField
            value={player}
            onChange={(value) => updatePlayer(value, index)}
            placeholder={`Jogador #${index + 1}`}
          />
        </div>
      ))}
      <StepButton
        type={TYPE_NEXT}
        onClick={() => navigate('../arboretum/colors', { replace: true })}
      />
    </div>
  );
};

export default PlayerList;
