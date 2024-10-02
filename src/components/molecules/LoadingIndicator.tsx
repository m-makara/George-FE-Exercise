import { Spinner } from "../atoms";

export const LoadingIndicator = () => (
  <div className="flex grow justify-center items-center py-4">
    <Spinner />
  </div>
);
