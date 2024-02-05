import { Comments, Main, NewComment } from "@/components/post";

const PostPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col gap-5">
      <Main />

      <hr className="border-primary-500" />

      <Comments />

      <NewComment />
    </div>
  );
};

export default PostPage;
