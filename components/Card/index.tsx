import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  import { useRouter } from "next/router";
  export function CardDefault() {
    const router = useRouter();
    return (
      <Card className="mt-16 w-96 bg-[#303030]/90" placeholder={undefined}>
        <CardHeader className="relative h-56" placeholder={undefined}>
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody placeholder={undefined}>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-white/90" placeholder={undefined}>
            UI/UX Review Check
          </Typography>
          <Typography placeholder={undefined} className="text-white/90">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0" placeholder={undefined}>
          <Button placeholder={undefined}
          onClick={() => router.push('/Projects/pr1')}
          >Read More</Button>
        </CardFooter>
      </Card>
    );
  }
  