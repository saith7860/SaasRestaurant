export const SplashScreen = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black">

            <div className="flex flex-col items-center">

                <div className="h-16 w-16 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"/>

                <h1 className="mt-6 text-3xl text-white font-bold">
                    Loading...
                </h1>

            </div>

        </div>
    );
};