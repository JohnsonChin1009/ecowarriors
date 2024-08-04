import MainMenu from "@/components/custom/MainMenu";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
        <MainMenu />
      <Footer />
    </main>
  );
}
