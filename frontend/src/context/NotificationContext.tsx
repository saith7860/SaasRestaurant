import { createContext, useContext, type ReactNode, } from "react";
import { notificationService } from "../services/NotificationService";
import { useEffect } from "react";
interface NotificationContextType {
    notifyNewOrder: (customerName?: string) => void;
    unlockAudio: () => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

interface Props {
    children: ReactNode;
}

export const NotificationProvider = ({
    children,
}: Props) => {
    const notifyNewOrder = (
        customerName?: string
    ) => {
        notificationService.notifyNewOrder(customerName);
    };
    const unlockAudio = () => {

        notificationService.unlockAudio();

    };
    useEffect(() => {

        const unlock = () => {

            unlockAudio();

            window.removeEventListener(
                "click",
                unlock
            );

        };

        window.addEventListener(
            "click",
            unlock
        );

        return () => {

            window.removeEventListener(
                "click",
                unlock
            );

        };

    }, []);
    return (
        <NotificationContext.Provider
            value={{
                notifyNewOrder,
                unlockAudio
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const context = useContext(NotificationContext);

    if (!context) {
        throw new Error(
            "useNotification must be used inside NotificationProvider"
        );
    }

    return context;
};