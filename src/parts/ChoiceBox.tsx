export const ChoiceBox = () => {
  const timer = "../assets/svg/bx-timer.svg";

  return (
    <>
      <div className="flex justify-center gap-6">
        <div className="border border-black shadow-lg">
          <img src={timer} alt="timer" />
        </div>
        <div className="border border-black shadow-lg">s</div>
        <div className="border border-black shadow-lg">s</div>
      </div>
    </>
  );
};
