import {
    Bike,
    Clock3,
    Star
} from "lucide-react";

const stats = [
    {
        icon: Bike,
        text: "Fast Delivery"
    },
    {
        icon: Clock3,
        text: "15-20 Min"
    },
    {
        icon: Star,
        text: "Fresh Daily"
    }
];

const CTAStats = () => {
    return (
        <div className="hidden sm:visible mt-8 sm:flex flex-wrap justify-center lg:justify-start gap-5">

            {stats.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.text}
                        className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-white/90
                        "
                    >
                        <Icon size={18} />

                        {item.text}
                    </div>
                );
            })}
        </div>
    );
};

export default CTAStats;