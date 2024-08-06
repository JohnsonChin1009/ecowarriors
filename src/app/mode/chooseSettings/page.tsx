import BackButton from "@/components/custom/BackButton"
import Header from "@/components/custom/Header"
import Footer from "@/components/custom/Footer"
import SelectMapBox from "@/components/custom/SelectMapBox"


export default function GameSettingsPage() {
    return (
        <>
            <Header />
            <BackButton />
            <div className="flex flex-col items-center justify-center space-y-2 min-h-[60vh]">
                <h2 className="font-bold text-[14px]">Choose your map:</h2>
                <div><SelectMapBox /></div>
            </div>
            <Footer />
        </>
    )
}