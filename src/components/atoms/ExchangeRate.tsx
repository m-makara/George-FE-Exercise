type Props = {
  exchangeRate: number;
  currency: string;
};
export const ExchangeRate = ({ exchangeRate, currency }: Props) => (
  <span className="flex flex-row gap-1 items-center">
    <p className="text-2xl font-bold text-gray-900 dark:text-white">
      {exchangeRate}
    </p>
    <p className="text-2xl  text-gray-900 dark:text-white">{currency}</p>
  </span>
);
