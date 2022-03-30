interface Props {
  colors: {
    from: string;
    to: string;
  };
  id?: string;
  onClick: () => void;
  title?: string;
}

const GradientButton = ({ colors, id, onClick, title }: Props) => {
  return (
    <div
      onClick={onClick}
      key={id}
      style={{
        background: `linear-gradient(to right, ${colors.from}, ${colors.to})`,
      }}
      className="cursor-pointer w-36 p-[1px] rounded relative mr-2 mt-2"
    >
      <div className="font-bebas-neue rounded flex justify-center py-0.5 px-2 bg-black hover:bg-transparent">
        {title}
      </div>
    </div>
  );
};

export default GradientButton;
