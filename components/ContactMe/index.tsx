import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '@material-tailwind/react';
import { useRouter } from 'next/router';

export default function ContactMe() {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            message: Yup.string().required('Message is required')
        }),
        onSubmit: values => {
            console.log(values);
            const recipientEmail = 'noufalrahim6784@gmail.com';
            const subject = 'Request for contact';
            const senderEmail = values.email;
            const body = values.message;

            // Constructing the mailto URL with encodeURIComponent for safe URL encoding
            const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&cc=${senderEmail}`;

            // Use router.push to open the mailto link in the same window
            router.push(mailtoUrl);

        }
    });

    return (
        <div className="w-full mt-16 justify-center items-center flex flex-col mx-10 mb-10">
            <h4 className="dark:text-white text-black text-2xl mb-10 text-center">
                <code>
                    Contact Me
                </code>
            </h4>
            <div className="w-full flex justify-around items-center">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-full flex-col justify-center items-center flex">
                    <h1 className="dark:text-white text-black text-2xl text-center">
                        <code>
                            Send me a message
                        </code>
                    </h1>
                    <p className="dark:text-white text-black text-md text-center mt-4">
                        <code>
                            Fill up this form to contact me
                        </code>
                    </p>
                    <form className='w-3/4' onSubmit={formik.handleSubmit}>
                        <div className="w-full mt-4">
                            <Input
                                crossOrigin={'true'}
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full p-2 focus:outline-none bg-transparent border-b dark:text-white text-black dark:border-white border-black"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.name && formik.errors.name ? true : false}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <p className="text-red-500 text-sm italic">{formik.errors.name}</p>
                            ) : null}
                        </div>
                        <div className="w-full mt-4">
                            <Input
                                crossOrigin={'true'}
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full p-2 focus:outline-none bg-transparent border-b dark:text-white text-black dark:border-white border-black"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && formik.errors.email ? true : false}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <p className="text-red-500 text-sm italic">{formik.errors.email}</p>
                            ) : null}
                        </div>
                        <div className="w-full mt-4">
                            <textarea
                                name="message"
                                placeholder="Message"
                                className="w-full p-2 focus:outline-none bg-transparent border-b dark:text-white text-black dark:border-white border-black"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <p className="text-red-500 text-sm italic">{formik.errors.message}</p>
                            ) : null}
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <button type='submit' className="dark:bg-white bg-black text-white dark:text-black px-2 py-1 w-24 rounded-md text-sm items-center justify-center flex mt-4">
                                Send
                                <FaPaperPlane className="inline-block ml-1" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
