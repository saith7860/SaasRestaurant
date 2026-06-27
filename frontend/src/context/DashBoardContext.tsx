import {
    createContext,
    useContext,
    useState,
    useCallback,
} from "react";
import type { ReactNode } from "react";
import api from "../api/api.js";

import type {
    Restaurant,
    BranchType,
    CategoryType,
    ItemType,
    OrderType
} from "../types/DashBoardtype";

interface DashboardContextType {
    restaurant: Restaurant | null;
    branches: BranchType[];
    category: CategoryType[];
    items: ItemType[];
    orders: OrderType[];

    loading: boolean;
    error: string | null;

    refreshDashboardData: () => Promise<void>;

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

    setOrders: React.Dispatch<
        React.SetStateAction<OrderType[]>
    >;
}

const DashboardContext =
    createContext<DashboardContextType | undefined>(
        undefined
    );

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

    const [orders, setOrders] =
        useState<OrderType[]>([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const refreshDashboardData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const token = localStorage.getItem("token");

            const res = await api.get(
                "/api/resturant/admin/dashboard",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log("Dashboard Data:", res.data.result);

            setRestaurant(res.data.result.resuturant);
            setBranches(res.data.result.branches || []);
            setCategory(res.data.result.category || []);
            setItems(res.data.result.items || []);
            setOrders(res.data.result.orders || []);

        } catch (error) {
            console.log("Dashboard refresh error:", error);
            setError("Failed to load dashboard data");
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <DashboardContext.Provider
            value={{
                restaurant,
                branches,
                category,
                items,
                orders,

                loading,
                error,

                refreshDashboardData,

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
    const context = useContext(DashboardContext);

    if (!context) {
        throw new Error(
            "useDashboard must be used inside DashboardProvider"
        );
    }

    return context;
};