import { Header } from "@/components/story";

const StoryPage = ({ params }: { params: { id: string } }) => {
  const image = "/images/mili-user.jpeg";
  const bgImageStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div style={bgImageStyle} className="bg-cover bg-no-repeat h-screen">
      <Header />
    </div>
  );
};

export default StoryPage;
