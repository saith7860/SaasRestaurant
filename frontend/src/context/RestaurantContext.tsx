import {
    createContext,
    useContext,
    useState,
} from "react";
import type { ReactNode } from "react";
interface RestaurantContextType {
    restaurantData: any;
    setRestaurantData:
    React.Dispatch<
        React.SetStateAction<any>
    >;
}

const RestaurantContext =
    createContext<RestaurantContextType | null>(null);

export const RestaurantProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [restaurantData, setRestaurantData] = useState<any>(null);

    return (
        <RestaurantContext.Provider
            value={{
                restaurantData,
                setRestaurantData
            }}
        >
            {children}
        </RestaurantContext.Provider>
    );
};

export const useRestaurant = () => {
    const context =
        useContext(RestaurantContext);

    if (!context) {
        throw new Error(
            "useRestaurant must be used inside RestaurantProvider"
        );
    }

    return context;
};