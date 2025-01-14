import TopNavbar from "./TopNavbar";
import SearchNavbar from "./SearchNavbar";


function Navbar() {
  return (
    <nav className="sticky top-0 z-10">
      <TopNavbar />
      <SearchNavbar />
    </nav>
  );
}

export default Navbar;
