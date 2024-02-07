import { Posts } from "@/components/home";
import { Header, Info } from "@/components/profile";

const ProfilePage = ({ params }: { params: { profile: string } }) => {
  return (
    <div>
      <Header />

      <Info />

      <div className="p-3 mt-10 mb-20 flex flex-col">
        <p className="uppercase text-lg sticky top-0 py-5 z-50 bg-primary-600">
          Posts
        </p>
        <Posts />
      </div>
    </div>
  );
};

export default ProfilePage;
