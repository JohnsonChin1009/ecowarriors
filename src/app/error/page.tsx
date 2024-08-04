export default function ErrorPage() {
    return (
        <>
            <div className="flex text-center items-center justify-center space-y-2 lg:space-y-5 min-h-screen lg:min-h-[50vh] flex-col">
                <h1 className="font-bold text-3xl lg:text-5xl">Oops!</h1>
                <p className="font-regular lg:text-xl">Sorry, something went wrong</p>
            </div>
        </>
    )
}