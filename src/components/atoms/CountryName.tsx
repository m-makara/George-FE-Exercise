type Props = { name: string };

export const CountryName = ({ name }: Props) => (
  <span className="flex flex-row gap-2 items-center">
    <p className="text-xl text-gray-900 dark:text-white">Name:</p>
    <p className="text-2xl font-bold text-gray-900 dark:text-white">{name}</p>
  </span>
);
