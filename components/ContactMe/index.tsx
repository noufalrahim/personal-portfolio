import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Instagram, Linkedin, Mail, MessageSquare, Phone, Slack, Twitter } from 'react-feather';
import { Input } from "@material-tailwind/react";

export default function () {
  return (
    <div>
      <div className='text-white flex flex-col items-center justify-center mt-36'>
        <h1 className='text-4xl font-bold'>
          Contact Me
        </h1>
        <p className='mt-4 text-md font-medium text-center'>
          Any questions or remarks? Just write me a message!
        </p>
        <div className='mt-8'>
          <div className='mt-8 align-center text-center lg:flex md:flex items-center justify-center w-full'>
            <div className='flex flex-col items-center justify-center w-full gap-6'>
              <Card placeholder={undefined} color="gray" variant="gradient" className="w-full max-w-[20rem] p-8 justify-center">
                <CardHeader
                  placeholder={undefined}
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none pb-8 text-center"
                >
                  <Typography
                    placeholder={undefined}
                    variant="small"
                    color="white"
                    className="font-normal text-2xl text-left"
                  >
                    Contact Information
                  </Typography>
                  <Typography
                    placeholder={undefined}
                    variant="small"
                    color="white"
                    className="font-normal text-sm mt-5 text-left text-white/80"
                  >
                    Fill up the form and our Team will get back to you within 24 hours.
                  </Typography>
                </CardHeader>
                <CardBody placeholder={undefined} className="p-0 border-b border-white/50 pb-10">
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                      <span className="p-1">
                        <Phone />
                      </span>
                      <Typography placeholder={undefined} className="font-normal">+1(424) 535 3523</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="p-1">
                        <MessageSquare />
                      </span>
                      <Typography placeholder={undefined} className="font-normal">hello@mail.com</Typography>
                    </li>
                  </ul>
                </CardBody>
                <CardFooter
                  placeholder={undefined}
                  className="flex gap-4 justify-center"
                >
                  <Instagram className="w-5 h-5" />
                  <Mail className="w-5 h-5" />
                  <Slack className="w-5 h-5" />
                  <Twitter className="w-5 h-5" />
                  <Linkedin className="w-5 h-5" />
                </CardFooter>
              </Card>
            </div>
            <div className='flex w-full flex-col gap-1 pl-5 items-center py-16'>
              <div>
                <Input type="text" variant='static' color="white" placeholder="First Name" crossOrigin={undefined} className='py-2'/>
                <Input type="text" variant='static' color="white" placeholder="Last Name" crossOrigin={undefined} className='py-2'/>
                <Input type="email" variant='static' color="white" placeholder="Email" crossOrigin={undefined} className='py-2'/>
                <Input type="text" variant='static' color="white" placeholder="Message" crossOrigin={undefined} className='py-2' />
              </div>
              <Button
                placeholder=""
                ripple={true}
                color="gray"
                variant="gradient"
                className="w-40 mx-auto mt-10"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
