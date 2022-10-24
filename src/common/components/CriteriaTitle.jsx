import Ellipsis from './Ellipsis';
import SvgWrapper from './SvgWrapper';

const CriteriaTitle = ({ title, playerName, IconCmp }) => (
  <div className="w-full h-16 flex items-center justify-between text-2xl bg-primary-alt shadow-md rounded-md overflow-hidden">
    <div className="flex-1 flex flex-col justify-center p-2 font-semibold overflow-hidden">
      <Ellipsis>{title}</Ellipsis>
      {playerName && <Ellipsis smallText>{playerName}</Ellipsis>}
    </div>
    {IconCmp && (
      <div className="flex-[0_0_4rem] h-full p-2">
        <SvgWrapper>
          <IconCmp />
        </SvgWrapper>
      </div>
    )}
  </div>
);

export default CriteriaTitle;
