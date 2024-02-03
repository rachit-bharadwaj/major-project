import Link from "next/link";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="p-3 flex justify-between items-center">
      <p className="text-4xl text-secondary-200 font-extrabold">Socio</p>

      <Link href="/messages">
        <HiOutlineChatBubbleBottomCenterText className="text-3xl" />
      </Link>
    </header>
  );
};

export default Header;
