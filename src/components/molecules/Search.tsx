import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectSearchQuery, setSearchQuery } from "../../redux/slices";
import { SearchIcon } from "../icons";

export const Search = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector(selectSearchQuery);
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-900 dark:text-white">
        <SearchIcon />
      </div>
      <input
        type="search"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search currency"
        value={query}
        onChange={(e) => dispatch(setSearchQuery(e.currentTarget.value))}
      />
    </div>
  );
};
