import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import StepButton, { TYPE_NEXT, TYPE_PREVIOUS } from '../../common/components/StepButton';

import colorMapping from '../mapping/color';
import { getPlayerList } from '../redux/selectors';

const Colors = () => {
  const { colorIndex } = useParams();
  const navigate = useNavigate();
  const playerList = useSelector(getPlayerList);
  const colorIcons = [];

  // Object.keys(colorMapping).forEach((key) => {
  //   const { IconCmp, title } = colorMapping[key];

  //   colorIcons.push(
  //     <div key={key} className="flex items-center h-12">
  //       <div className="w-12 h-full [&>svg]:w-full [&>svg]:h-full">
  //         <IconCmp />
  //       </div>
  //       <div className="ml-4">{title}</div>
  //     </div>
  //   );
  // });

  // return <div className="flex flex-col bg-slate-500">{playerList}</div>;

  // const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colorKeys = Object.keys(colorMapping);
  const currentColor = colorKeys[colorIndex];
  const { title, IconCmp } = colorMapping[currentColor];

  return (
    <div className="w-full h-full flex flex-col items-center bg-slate-500">
      <div className="w-full flex items-center p-4 rounded-full border-2 border-blue-800 bg-white">
        <div className="">
          <IconCmp />
        </div>
        <div className="text-blue-800 text-2xl font-bold">
          {title}
        </div>
      </div>
      {colorKeys[colorIndex]}
      <StepButton
        type={TYPE_PREVIOUS}
        onClick={() => navigate(-1)}
      />
      <StepButton
        type={TYPE_NEXT}
        onClick={() => {
          // dispatch(setPlayerList(players));
          const nextIndex = parseInt(colorIndex, 10) + 1;
          let nextRoute = '../arboretum/result';

          if (colorKeys[nextIndex]) {
            nextRoute = `../arboretum/colors/${nextIndex}`;
          }

          navigate(nextRoute);
        }}
      />
    </div>
  );
};

export default Colors;
