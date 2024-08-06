import Header from "@/components/custom/Header"
import Footer from "@/components/custom/Footer"
import Menu from "@/components/custom/NavigationMenu"
import Back from "@/components/custom/BackButton"

export default function ModePage() {
    const navigationItems = [
        { title: "SINGLE PLAYER", url: "/mode/chooseSettings" },
        { title: "CREATE LOBBY", url: "/about" },
        { title: "JOIN LOBBY", url: "/wiki" }
      ]
    return (
        <>  
            <Header />
            <Back />
            <div>
                <Menu items={navigationItems}/>
            </div>
            <Footer />
        </>
    )
}