import { NotFoundIcon } from "../icons";

export const NoResults = () => (
  <div className="dark:bg-gray-800 dark:text-white text-gray-800 bg-white flex flex-col p-4 items-center justify-center grow">
    <NotFoundIcon />
    <p className="dark:text-white text-gray-800 bold text-2xl">
      No results found for query
    </p>
  </div>
);
