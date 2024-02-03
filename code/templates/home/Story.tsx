import Link from "next/link";
import Image from "next/image";
import { Story } from "@/types";

const Story = ({ creatorImg, image, url }: Story) => {
  const bgImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <Link
      href={url}
      className="rounded-2xl bg-white flex flex-col aspect-[3/4] h-44 bg-cover bg-no-repeat justify-end items-center p-3"
      style={bgImageStyle}
    >
      <Image
        src={creatorImg}
        alt="Creator"
        width={500}
        height={500}
        className="h-14 w-fit rounded-full ring-4 ring-secondary-100"
      />
    </Link>
  );
};

export default Story;
