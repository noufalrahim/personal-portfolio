import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function BlogCard() {
    return (
        <Card placeholder={undefined} className="pt-6 w-96 bg-black mb-20">
            <CardHeader placeholder={undefined} className="relative h-56">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                />
            </CardHeader>
            <CardBody placeholder={undefined}>
                <Typography placeholder={undefined} variant="h5" color="white" className="mb-2 text-white/80">
                    UI/UX Review Check
                </Typography>
                <Typography placeholder={undefined} color="white" className="text-white/80">
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    voluptatum.
                    De bitachos de la vida loca. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam voluptatum.
                    De bitachos de la vida loca. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam voluptatum.
                </Typography>
            </CardBody>
            <CardFooter placeholder={undefined} className="flex justify-between items-center pt-0">
                <Typography placeholder={undefined} color="white" className="text-white/80">
                    2 days ago
                </Typography>
            </CardFooter>
        </Card>
    );
}