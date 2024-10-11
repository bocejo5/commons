import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Alert, Collapse, Button } from "@mantine/core";
import { Code, Text, Space, Group } from "@mantine/core";
import { IconArrowRight, IconExclamationCircle } from "@tabler/icons-react";

export function ErrorAlert({
    error,
    title = "Errore",
    showDetails = true,
    additionalInfo = {},
    logger,
}: {
    error: AxiosError;
    title?: string;
    logger?: (title: string, info: any) => void;
    showDetails?: boolean;
    additionalInfo?: any;
}) {
    const [opened, { toggle }] = useDisclosure(false);
    const router = useRouter();

    logger &&
        logger(title, {
            error,
            ...additionalInfo,
        });

    return (
        <Alert
            mt={20}
            variant="light"
            color="red"
            radius="xl"
            title={title}
            icon={<IconExclamationCircle />}
        >
            <Text c="dimmed">
                Si è verificato un errore durante il caricamento dei dati.
            </Text>
            <Space h="xl" />

            {showDetails && (
                <>
                    <Group>
                        <Button variant="light" color="red" onClick={toggle}>
                            Visualizza dettagli
                        </Button>
                        <Button
                            variant="light"
                            onClick={() => router.push("/")}
                            rightSection={<IconArrowRight size={14} />}
                        >
                            Vai alla pagina principale
                        </Button>
                    </Group>
                    <Collapse in={opened}>
                        <Code>
                            <Text fw={700}>{error.code}</Text>
                            {error.message}
                        </Code>
                    </Collapse>
                </>
            )}
        </Alert>
    );
}
