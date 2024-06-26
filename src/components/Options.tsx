import { Link } from "react-router-dom";

export const Options = () => {
  return (
    <nav>
      <p className="mb-6 flex justify-center text-3xl font-light">
        Select Option
      </p>
      <div className="mb-16 flex flex-wrap items-center justify-center gap-6">
        <div className="flex w-fit items-center rounded-md border border-black shadow-md transition-all hover:scale-110 dark:border-[#ccc]">
          <Link to="/todo" className="p-12">
            <svg
              className="box"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#999"
              width="64"
              height="64"
            >
              <path d="M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z"></path>
              <path d="m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z"></path>
            </svg>
          </Link>
        </div>

        <div className="flex w-fit items-center rounded-md border border-black shadow-md transition-all hover:scale-110 dark:border-[#ccc]">
          <Link to="/notes" className="p-12">
            <svg
              className="box"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#999"
              width="64"
              height="64"
            >
              <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"></path>
              <path d="M7 9h10v2H7zm0 4h5v2H7z"></path>
            </svg>
          </Link>
        </div>

        <div className="flex w-fit items-center rounded-md border border-black shadow-md transition-all hover:scale-110 dark:border-[#ccc]">
          <Link to="/timer" className="p-12">
            <svg
              className="box"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#999"
              width="64"
              height="64"
            >
              <path d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path>
              <path d="M11 9h2v5h-2zM9 2h6v2H9zm10.293 5.707-2-2 1.414-1.414 2 2z"></path>
            </svg>
          </Link>
        </div>

        <div className="flex w-fit items-center rounded-md border border-black shadow-md transition-all hover:scale-110 dark:border-[#ccc]">
          <Link to="/pomodoro" className="p-12">
            <svg
              className="box"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#999"
              width="64"
              height="64"
            >
              <path d="m21.707 11.293-2-2L19 8.586V6a1 1 0 0 0-1-1h-2.586l-.707-.707-2-2a.999.999 0 0 0-1.414 0l-2 2L8.586 5H6a1 1 0 0 0-1 1v2.586l-.707.707-2 2a.999.999 0 0 0 0 1.414l2 2 .707.707V18a1 1 0 0 0 1 1h2.586l.707.707 2 2a.997.997 0 0 0 1.414 0l2-2 .707-.707H18a1 1 0 0 0 1-1v-2.586l.707-.707 2-2a.999.999 0 0 0 0-1.414zm-4.414 3-.293.293V17h-2.414l-.293.293-1 1L12 19.586l-1.293-1.293-1-1L9.414 17H7v-2.414l-.293-.293-1-1L4.414 12l1.293-1.293 1-1L7 9.414V7h2.414l.293-.293 1-1L12 4.414l1.293 1.293 1 1 .293.293H17v2.414l.293.293 1 1L19.586 12l-1.293 1.293-1 1z" />
              <path d="M12 8v8c2.206 0 4-1.794 4-4s-1.794-4-4-4z" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};
