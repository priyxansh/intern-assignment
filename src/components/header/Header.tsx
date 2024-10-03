import badgeIcon from "../../assets/icons/badge.svg";
import basketIcon from "../../assets/icons/basket.svg";
import { SITE_TITLE } from "../../constants/site-title";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return (
    <header className="py-4 px-2 w-full">
      <div className="container mx-auto flex items-center gap-2">
        <div className="text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-6 sm:w-8 object-contain"
          />
          <span className="text-lg">{SITE_TITLE}</span>
        </div>
        <nav className="hidden sm:block ml-auto mr-24 lg:mr-32">
          <ul className="flex space-x-8 text-white">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2 ml-auto sm:ml-0">
          <span>
            <img src={badgeIcon} alt="Badge icon" />
          </span>
          <button>
            <img src={basketIcon} alt="Basket icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
