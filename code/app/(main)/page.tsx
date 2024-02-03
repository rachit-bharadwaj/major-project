import { Header, Posts, Stories } from "@/components/home";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <Header />

      <Stories />

      <hr className="border-primary-400" />

      <Posts />
    </main>
  );
}
