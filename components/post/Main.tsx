import { Post } from "@/templates/home";

const Main = () => {
  return (
    <section className="flex flex-col gap-5 p-3">
      <h1 className="text-center text-lg uppercase">Post</h1>

      <Post
        creatorImg="/images/user.jpg"
        creatorName="Rachit Bharadwaj"
        timestamp="20m ago"
        text="“If you think you are too small to make a difference, try sleeping with a mosquito.”
        ~ Dalai Lama"
        image={["/images/land.png", "/images/land2.jpg", "/images/land2.avif"]}
        likes={["Ravi", "Rahul", "Rachit", "Rohit", "Rajat"]}
        comments={["Hello there", "General Kenobi", "You are a bold one"]}
      />
    </section>
  );
};

export default Main;
