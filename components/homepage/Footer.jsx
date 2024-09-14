import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";




function Footer() {
    return (
        <footer className="max-w-8xl  container mx-auto p-5 md:p-0">
            <div className="bg-green-800 p-8 rounded-3xl mb-10">
                <button className="mt-4 mb-4 w-60 flex items-center justify-between px-4 py-3 bg-white text-green-600 rounded-xl">
                    <span>Donate now</span>
                    <div className="w-6 h-6 bg-lime-300 rounded-full flex justify-center items-center">
                        <FiArrowUpRight />
                    </div>
                </button>
                <hr className="bg-white" />

                <div className="flex flex-wrap justify-between mt-5 gap-5">

                    <div className="inline-flex gap-3 md:gap-10 text-white text-xs md:text-normal">
                        <p>2023 Geo NGO.</p>
                        <p><a href="#">Privacy Policy</a></p>
                        <p><a href="#">Term of Use</a></p>
                    </div>

                    <div className="inline-flex gap-3 md:gap-10 text-white">
                        <a href="#" className="text-white hover:text-green-800 transition duration-300"><BsTwitterX /></a>
                        <a href="#" className="text-white hover:text-green-800 transition duration-300"><FaLinkedin /></a>
                        <a href="#" className="text-white hover:text-green-800 transition duration-300"><FaFacebook /></a>
                    </div>
                </div>

                <div className="text-white my-5 text-xs md:text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam veritatis dolore, ea non nemo enim explicabo consequatur minima molestias dicta id praesentium ab repudiandae dolores minus rem deserunt, atque quo aut iste perferendis magni? Dicta, quia quidem. Voluptatem, eligendi quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit iure nulla libero accusamus distinctio, ad fugiat facilis accusantium molestias illum cupiditate, quae eius commodi voluptatum perferendis quidem dignissimos corrupti enim.
                </div>
            </div>

        </footer>
    )
}

export default Footer