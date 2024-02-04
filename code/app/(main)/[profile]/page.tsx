import { Header, Info } from "@/components/profile";

const ProfilePage = ({ params }: { params: { profile: string } }) => {
  return (
    <div>
      <Header />

      <Info />
    </div>
  );
};

export default ProfilePage;
