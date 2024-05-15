interface ComponentSwitchProps {
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
}

export const ComponentSwitch: React.FC<ComponentSwitchProps> = ({
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
