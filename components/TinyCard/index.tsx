import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { FaBook } from "react-icons/fa";

interface TinyCardProps {
    title: string;
    content: string;
    icon: any;
}

export function TinyCard({ title, content, icon}: TinyCardProps) {
    return (
        <Card className="mt-6 w-96 bg-transparent" placeholder={undefined}>
            <CardBody placeholder={undefined}>
                <div className="flex justify-center mb-5">
                    {icon}
                </div>
                <Typography placeholder={undefined} variant="h5" color="white" className="text-white mb-2 flex justify-center">
                    {title}
                </Typography>
                <Typography placeholder={undefined}
                    className="text-blue-gray-500 text-center text-white"
                >
                    {content}
                </Typography>
            </CardBody>
        </Card>
    );
}