import { Alert } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

export function SuccessAlert({
    children,
    showCloseButton = false,
}: {
    children: React.ReactNode;
    showCloseButton: boolean;
}) {
    return (
        <Alert
            variant="light"
            color="green"
            radius="xl"
            withCloseButton={showCloseButton}
            icon={<IconCircleCheck />}
        >
            {children}
        </Alert>
    );
}
