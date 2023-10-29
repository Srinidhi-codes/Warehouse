import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from "./Footer";

const About = () => {
  return (
    <div>
        <Navbar />
<section
  className="relative bg-[url(https://images.unsplash.com/photo-1622030411594-c282a63aa1bc?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Let us find 

        <strong className="block font-extrabold text-rose-700">
        Storage Solutions.
        </strong>
      </h1>

      <p className="mt-4 w-full text-2xl font-medium ">
      At Warehousing, we pride ourselves on offering a comprehensive range of warehouse services to meet your every need. Our state-of-the-art facilities are equipped to handle your storage, distribution, and logistics requirements with the utmost efficiency and care. Whether you're looking for secure storage solutions, streamlined order fulfillment, or just-in-time inventory management, our experienced team is dedicated to providing tailored solutions that keep your business running smoothly. With a commitment to reliability, precision, and customer satisfaction, we're your trusted partner for all your warehousing and supply chain needs.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          to={"/"}
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </Link>
      </div>
    </div>
  </div>
</section>
<Footer />
    </div>
  )
}

export default About