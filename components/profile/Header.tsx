import Image from "next/image";
import Link from "next/link";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";

const Header = () => {
  const image = "/images/profilebanner.jpg";

  const bgImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <header className="flex flex-col items-center">
      <div
        className="flex flex-col w-full aspect-[4/1] bg-cover bg-no-repeat justify-end items-end p-3"
        style={bgImageStyle}
      >
        <Link
          href="/messages"
          className="bg-primary-600 p-2 rounded-full border-primary-400 border-2 group hover:border-pink-500 transition-colors duration-300 ease-in-out"
        >
          <HiOutlineChatBubbleBottomCenter className="text-2xl group-hover:text-pink-500" />
        </Link>
      </div>

      <Image
        src="/images/mili-user.jpeg"
        alt="Profile Picture"
        width={100}
        height={100}
        className="h-24 w-24 rounded-full -mt-12"
      />
    </header>
  );
};

export default Header;
