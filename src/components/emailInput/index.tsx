import { IconMail } from "@tabler/icons-react";
import { TextInput } from "@mantine/core";
import { useContext, useState } from "react";

import { FunctionPointInsertModalContext } from "@/app/components/InsertModal/context";

export const EmailInput = () => {
    const [emailError, setEmailError] = useState<string>("");
    const { email, setEmail } =
        useContext(FunctionPointInsertModalContext) || {};

    const verifyEmail = (email: string) => {
        if (!setEmail) return;

        const emailIsOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        setEmailError(!emailIsOk ? "Indirizzo e-mail non valido" : "");
        setEmail(email || "");
    };

    return (
        <TextInput
            error={emailError}
            label="Notifica a:"
            value={email}
            leftSection={<IconMail />}
            onChange={(e) => verifyEmail(e.currentTarget.value)}
            description="Inserisci un indirizzo e-mail per ricevere una notifica di fine elaborazione"
        />
    );
};
