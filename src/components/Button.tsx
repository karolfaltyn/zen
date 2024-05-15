interface ButtonProps {
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  active,
  children,
}) => {
  return (
    <button
      className={`pointer opacity-${active ? "100" : "50"} mb-8 font-sarabun text-2xl font-medium text-[#444] dark:text-[#fafafa]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
