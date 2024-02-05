import Image from "next/image";

const Header = () => {
  return (
    <header className="p-3 flex flex-col gap-2">
      <div className="h-1.5 w-full flex gap-1">
        <div className="bg-primary-500 flex-1 rounded-full h-1.5"></div>
        <div className="bg-primary-500 flex-1 rounded-full h-1.5"></div>
        <div className="bg-primary-500 flex-1 rounded-full h-1.5"></div>
        <div className="bg-primary-500 flex-1 rounded-full h-1.5"></div>
      </div>

      <div className="flex gap-1">
        <Image
          src="/images/mili-user.jpeg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="h-10 w-10 rounded-full"
        />

        <div>
          <p>Mili Srivastava</p>
          <p className="text-xs">35m ago</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
