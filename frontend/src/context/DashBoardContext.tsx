import {
    createContext,
    useContext,
    useState,
} from "react";
import type { ReactNode } from "react";
import type {
    Restaurant,
    BranchType,
    CategoryType,
    ItemType,
    OrderType
} from "../types/DashBoardtype"

interface DashboardContextType {
    restaurant: Restaurant | null;
    branches: BranchType[];
    category: CategoryType[];
    items: ItemType[];
    orders: OrderType[];
    setRestaurant: React.Dispatch<
        React.SetStateAction<Restaurant | null>
    >;

    setBranches: React.Dispatch<
        React.SetStateAction<BranchType[]>
    >;

    setCategory: React.Dispatch<
        React.SetStateAction<CategoryType[]>
    >;

    setItems: React.Dispatch<
        React.SetStateAction<ItemType[]>
    >;
    setOrders:React.Dispatch<
        React.SetStateAction<OrderType[]>
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
        useState<BranchType[]>([]);

    const [category, setCategory] =
        useState<CategoryType[]>([]);

    const [items, setItems] =
        useState<ItemType[]>([]);
    const [orders,setOrders]=useState<OrderType[]>([]);

    return (
        <DashboardContext.Provider
            value={{
                restaurant,
                branches,
                category,
                items,
                orders,
                setOrders,
                setRestaurant,
                setBranches,
                setCategory,
                setItems
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboard = () => {
    const context=useContext(DashboardContext);

    if (!context) {
        throw new Error(
            "useDashboard must be used inside DashboardProvider"
        );
    }

    return context;
};