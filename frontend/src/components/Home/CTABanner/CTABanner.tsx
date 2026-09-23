import CTAContent from "./CTAContent";

const CTABanner = () => {
    return (
        <section className="py-24 px-4">

            <div
                className="
                relative
                overflow-hidden
                rounded-[40px]
                bg-gradient-to-r
                from-[var(--primary-color)]/40
                via-[var(--button-color)]
                to-[var(--button-color)]
                px-8
                py-20
                md:px-16
                "
            >

                {/* Glow */}

                <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-white/10 blur-[140px]" />

                <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-[140px]" />

                <div className="relative z-10">

                    <CTAContent />

                </div>

            </div>

        </section>
    );
};

export default CTABanner;