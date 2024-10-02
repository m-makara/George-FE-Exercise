import { ErrorIcon } from "../icons";

export const Error = () => (
  <div className="dark:bg-gray-800 dark:text-white text-gray-800 bg-white flex flex-col p-4 items-center justify-center grow">
    <ErrorIcon />
    <p className="dark:text-white text-gray-800 bold text-2xl">
      Unable to fetch exchange information
    </p>
  </div>
);
