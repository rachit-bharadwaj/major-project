import { Comment } from "@/types";
import Image from "next/image";

const Comment = ({ comment, creatorImg, creatorName, timestamp }: Comment) => {
  return (
    <div className="flex gap-1">
      <Image
        src={creatorImg}
        alt="User Image"
        width={500}
        height={500}
        className="h-5 w-fit rounded-full"
      />
      <div>
        <p className="font-bold -mt-1 mb-1">{creatorName}</p>

        <p>{comment}</p>

        <p className="text-sm text-primary-400">{timestamp}</p>
      </div>
    </div>
  );
};

export default Comment;
