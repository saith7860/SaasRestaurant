import CTAButton from "./CTAButton";
import CTAStats from "./CTAStats";

const CTAContent = () => {
    return (
        <div className="max-w-3xl">

            <span className="uppercase tracking-[0.35em] text-white/70 text-sm font-semibold">
                Ready To Order?
            </span>

            <h2
                className="
                mt-5
                text-3xl
                md:text-6xl
                font-black
                leading-tight
                text-white
                "
            >
                Feeling Hungry? 
                <br />
                <span className="text-2xl md:text-3xl text-[var(--primary-color)]">
                  Your Next Meal is Just a Click Away
                </span>
                  
            </h2>

            <p
                className="
                mt-6
                text-lg
                leading-8
                text-white/80
                "
            >
                Every meal is freshly prepared using quality ingredients.
                Skip the wait and enjoy restaurant-quality food at home.
            </p>

            <div className="mt-10">
                <CTAButton />
            </div>

            <CTAStats />

        </div>
    );
};

export default CTAContent;