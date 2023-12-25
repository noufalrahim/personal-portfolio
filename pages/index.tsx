import HomePage from '../components/Home';
import { NavbarMenu } from '@/components/Navbar';
// import SocialConnect from '@/components/SocialConnect';
// import AboutMe from '@/components/AboutMe';
// import { Footer } from '@/components/Footer';
// import ContactMe from '@/components/ContactMe';
export default function Home() {
  return (
    <>
      <NavbarMenu />
      <main className="relative z-20 flex min-h-screen flex-col items-center justify-between py-24 px-20 overflow-y-auto mt-16 lg:mt-0 md:mt-0 xl:mt-0">
        <HomePage />
        {/* <SocialConnect />
        <AboutMe />
        <ContactMe />
        <Footer /> */}
      </main>
      <div className='fixed inset-0 z-0 bg-black'>
        <img src='/bg.jpg' alt='' className='opacity-30 w-full h-full object-cover' />
      </div>
    </>
  );
}
