import { Header, Search } from "../molecules";

export const HeaderWithSearch = () => {
  return (
    <div className="sticky top-0">
      <Header />
      <Search />
    </div>
  );
};
