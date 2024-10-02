type Props = { currency: string };

export const CountryCurrency = ({ currency }: Props) => (
  <span className="flex flex-row gap-2 items-center">
    <p className="text-xl text-gray-900 dark:text-white">Currency:</p>
    <p className="text-2xl font-bold text-gray-900 dark:text-white">
      {currency}
    </p>
  </span>
);
