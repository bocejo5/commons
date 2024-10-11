import { notifications } from "@mantine/notifications";
import NotificationErrorStyle from "./error/style.module.css";
import NotificationWarningStyle from "./warning/style.module.css";

export const notifyCustom = (
    message: string,
    title: string,
    color: string,
    classNames: any
) => {
    notifications.show({
        color: color,
        title: title,
        message: message,
        classNames: classNames,
    });
};

export const notifySuccess = (message: string, title?: string) => {
    notifyCustom(message, title || "Salvataggio completato", "green", null);
};

export const notifyWarning = (message: string, title?: string) => {
    notifyCustom(
        message,
        title || "Warning",
        "orange",
        NotificationWarningStyle
    );
};

export const notifyError = (message: string, title?: string) => {
    notifyCustom(message, title || "Errore", "red", NotificationErrorStyle);
};
