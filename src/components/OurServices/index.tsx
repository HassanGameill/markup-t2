"use client";
import SectionTitle from "../Common/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuBarChart3 } from "react-icons/lu";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { HiMap } from "react-icons/hi2";




import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: number;
  rating: number;
}

const postData: DataType[] = [
  {
    heading: "Full stack modern",
    heading2: "javascript",
    name: "Colt stelle",
    imgSrc: "/assets/courses/courseone.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Design system",
    heading2: "with React programme",
    name: "Colt stelle",
    imgSrc: "/assets/courses/coursetwo.png",
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt stelle",
    imgSrc: "/assets/courses/coursethree.png",
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt stelle",
    imgSrc: "/assets/courses/courseone.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt stelle",
    imgSrc: "/assets/courses/coursetwo.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt stelle",
    imgSrc: "/assets/courses/coursethree.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
];

// CAROUSEL SETTINGS

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  // centerMode: true,
  slidesToScroll: 2,
  arrows: true,
  autoplay: false,
  speed: 500,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};



const OurServices = () => {
  return (
    <>
      <section id="services" className="py-10 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="shadow-courses m-3  rounded-2xl  px-3 pb-12 pt-3 cursor-pointer  bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark   ">
                  <div className="relative rounded-3xl">
                    <div className="bg-blue-400 w-[50px] h-[50px] rounded-lg flex justify-center items-center ">
                    <span className=" text-[40px] text-white">
                       <LuBarChart3 />
                    </span>

                    </div>
                    
                  </div>

                  <div className="px-3">
                    <h4 className="pt-6 text-2xl font-bold text-black dark:text-white">
                      {items.heading} 
                    </h4>
                    

                    <div>
                      <h3 className="pt-3 text-base font-normal opacity-75">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, reprehenderit.
                      </h3>
                    </div>

                    <div>
                      <h3 className="pt-6 text-base font-normal opacity-75">
                        {items.name} 
                      </h3>
                    </div>

                    <hr style={{ color: "#C4C4C4" }} />

                    <div className="flex justify-between pt-6">
                      <div className="flex gap-4">
                        <span className="text-[24px] text-orange-400 dark:text-white">
                        <HiMap />

                        </span>
                        
                        <h3 className="text-base font-medium text-black opacity-75 dark:text-gray-200">
                          {items.classes} classes
                        </h3>
                      </div>
                      <div className="flex gap-4 items-center">
                        <span className="text-[24px] text-orange-400 dark:text-white">
                          <HiChatBubbleOvalLeftEllipsis />
                        </span>
                      

                        <h3 className="text-base font-medium text-black opacity-75 dark:text-gray-200">
                          {items.students} students
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            
          </Slider>
        </div>
      </section>
    </>
  );
};

export default OurServices;