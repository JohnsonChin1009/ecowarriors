import Menu from "@/components/custom/NavigationMenu";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";

export default function HomePage() {
  const navigationItems = [
    { title: "PLAY", url: "/mode" },
    { title: "WIKI", url: "/wiki" },
    { title: "LORE", url: "/lore" },
  ]

  return (
    <main className="relative">
      <Header />
        <Menu items={navigationItems} />
      <Footer />
    </main>
  );
}
