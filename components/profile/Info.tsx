const Info = () => {
  return (
    <section className="flex flex-col gap-5 p-3">
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-bold">Mili Srivastava</p>
        <p>Next JS Developer</p>
        <p className="text-sm text-primary-300">
          Ready to Learn and Contribute
        </p>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-10">
          <button>
            <p className="text-primary-100 font-bold">2451</p>
            <p className="text-primary-300">Followers</p>
          </button>

          <button>
            <p className="text-primary-100 font-bold">2451</p>
            <p className="text-primary-300">Following</p>
          </button>
        </div>

        <button className="border border-primary-300 px-10 py-2 rounded-full hover:text-primary-600 hover:bg-primary-200 transition-all ease-in-out duration-500">
          Edit Profile
        </button>
      </div>
    </section>
  );
};

export default Info;
