import { BiSolidSend } from "react-icons/bi";

const NewComment = () => {
  return (
    <section className="fixed bottom-0 bg-[#181a1c] p-3 w-full">
      <form>
        <div className="bg-[#323436] rounded-full p-3 flex">
          <input
            type="text"
            placeholder="Type your comment here..."
            className="bg-transparent flex-1 outline-none"
          />
          <button>
            <BiSolidSend className="text-3xl hover:fill-green-500" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewComment;
