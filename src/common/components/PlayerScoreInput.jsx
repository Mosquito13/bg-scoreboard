import BooleanField from './Fields/BooleanField';
import NumberField from './Fields/NumberField';
import Ellipsis from './Ellipsis';

const TYPE_NUMBER = 'number';
const TYPE_BOOLEAN = 'boolean';

const PlayerScoreInput = ({ players, score, onChange, type = TYPE_NUMBER }) => {
  return (
    <div className="w-full flex flex-col">
      {players.map((name, index) => (
        <div key={index} className="flex mt-4">
          <div className="flex-1 flex items-center text-xl overflow-hidden">
            <Ellipsis>
              {name}
            </Ellipsis>
          </div>
          <div className="flex-[0_0_5rem] ml-2 flex justify-end">
            {type === TYPE_NUMBER && (
              <NumberField
                min={0}
                value={score[index]}
                onChange={(value) => onChange(value, index)}
              />
            )}
            {type === TYPE_BOOLEAN && (
              <BooleanField
                checked={score[index]}
                onChange={() => onChange(index)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export { TYPE_BOOLEAN, TYPE_NUMBER };
export default PlayerScoreInput;
