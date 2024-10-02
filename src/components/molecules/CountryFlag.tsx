import { useState } from "react";

type Props = {
  flagCode: string;
};

export const CountryFlag = ({ flagCode }: Props) => {
  const [hasError, setHasError] = useState(false);

  return !hasError ? (
    <img
      width={70}
      height={47}
      src={`/flags/${flagCode}.png`}
      onError={() => setHasError(true)}
    />
  ) : null;
};
