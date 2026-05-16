import {
    createContext,
    useContext,
    useState,
} from "react";
import type { ReactNode } from "react";
import type {
    Restaurant,
    Branch,
    Category,
    Item
} from "../types/DashBoardtype"

interface DashboardContextType {
    restaurant: Restaurant | null;
    branches: Branch[];
    categories: Category[];
    items: Item[];

    setRestaurant: React.Dispatch<
        React.SetStateAction<Restaurant | null>
    >;

    setBranches: React.Dispatch<
        React.SetStateAction<Branch[]>
    >;

    setCategories: React.Dispatch<
        React.SetStateAction<Category[]>
    >;

    setItems: React.Dispatch<
        React.SetStateAction<Item[]>
    >;
}

const DashboardContext =
    createContext<
        DashboardContextType | undefined
    >(undefined);

interface DashboardProviderProps {
    children: ReactNode;
}

export const DashboardProvider = ({
    children
}: DashboardProviderProps) => {

    const [restaurant, setRestaurant] =
        useState<Restaurant | null>(null);

    const [branches, setBranches] =
        useState<Branch[]>([]);

    const [categories, setCategories] =
        useState<Category[]>([]);

    const [items, setItems] =
        useState<Item[]>([]);

    return (
        <DashboardContext.Provider
            value={{
                restaurant,
                branches,
                categories,
                items,

                setRestaurant,
                setBranches,
                setCategories,
                setItems
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboard = () => {
    const context =
        useContext(DashboardContext);

    if (!context) {
        throw new Error(
            "useDashboard must be used inside DashboardProvider"
        );
    }

    return context;
};