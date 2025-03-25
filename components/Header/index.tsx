import Image from "next/image";
import HarryPotterIcon from "../../public/icons8-harry-potter-papercut-114.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__icon">
        <Image src={HarryPotterIcon} alt="icon" />
      </div>
      <div className="header__secondIcon">
        <Image src={HarryPotterIcon} alt="iconTwo" />
      </div>
    </header>
  );
};

export default Header;
