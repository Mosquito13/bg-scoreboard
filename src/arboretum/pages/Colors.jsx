import colorMapping from '../mapping/color';

const Colors = () => {
  const colorIcons = [];

  Object.keys(colorMapping).forEach((key) => {
    const { IconCmp, title } = colorMapping[key];

    colorIcons.push(
      <div key={key} className="flex items-center h-12">
        <div className="w-12 h-full [&>svg]:w-full [&>svg]:h-full">
          <IconCmp />
        </div>
        <div className="ml-4">{title}</div>
      </div>
    );
  });

  return <div className="flex flex-col bg-slate-500">{colorIcons}</div>;
};

export default Colors;
