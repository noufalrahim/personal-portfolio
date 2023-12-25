import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Globe } from "react-feather";

export function TinyCard() {
    return (
        <Card className="mt-6 w-96 bg-transparent" placeholder={undefined}>
            <CardBody placeholder={undefined}>
                <div className="flex justify-center">
                    <Globe className="text-white" size={50} />
                </div>
                <Typography placeholder={undefined} variant="h5" color="white" className="text-white mb-2 flex justify-center">
                    Frontend Web Developement:
                </Typography>
                <Typography placeholder={undefined}
                    className="text-blue-gray-500 text-center text-white"
                >
                    Creating beautiful and functional web experiences is my forte.
                    Using the latest technologies and best practices, I design and build websites
                    that captivate and engage users.
                </Typography>
            </CardBody>
        </Card>
    );
}