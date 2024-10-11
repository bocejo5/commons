import { Center, Flex, Loader } from "@mantine/core";

export const LoaderInMiddleOfTheScreen = () => {
    return (
        <Flex
            mih={50}
            gap="md"
            w="100%"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <Center w="100%">
                <Loader color="blue" size="xl" />
            </Center>
        </Flex>
    );
};
