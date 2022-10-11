import SvgWrapper from '../../common/components/SvgWrapper';

const CriteriaTitle = ({ title, IconCmp }) => (
  <div className="w-full h-16 flex items-center justify-between text-2xl bg-primary-alt shadow-md rounded-md overflow-hidden">
    <div className="flex-1 p-2 font-semibold overflow-hidden whitespace-nowrap text-ellipsis">{title}</div>
    <div className="flex-[0_0_4rem] h-full p-2">
      <SvgWrapper>
        <IconCmp />
      </SvgWrapper>
    </div>
  </div>
);

export default CriteriaTitle;
