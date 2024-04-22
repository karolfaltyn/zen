export const ChoiceBox = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row mb-16">
        <div className="flex w-fit items-center rounded-lg border border-black shadow-lg transition-all hover:scale-110 dark:border-[#ccc]">
          <button className="p-12">
            <svg
              className="box"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#444"
              width="64"
              height="64"
            >
              <path d="M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z"></path>
              <path d="m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z"></path>
            </svg>
          </button>
        </div>

        <div className="flex w-fit items-center rounded-lg border border-black shadow-lg transition-all hover:scale-110 dark:border-[#ccc]">
          <button className="p-12">
            <svg
              className="box"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#444"
              width="64"
              height="64"
            >
              <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"></path>
              <path d="M7 9h10v2H7zm0 4h5v2H7z"></path>
            </svg>
          </button>
        </div>

        <div className="flex w-fit items-center rounded-lg border border-black shadow-lg transition-all hover:scale-110 dark:border-[#ccc]">
          <button className="p-12">
            <svg
              className="box"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#444"
              width="64"
              height="64"
            >
              <path d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path>
              <path d="M11 9h2v5h-2zM9 2h6v2H9zm10.293 5.707-2-2 1.414-1.414 2 2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
