import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Projects() {
    const responsive = {
        desktop: {
            breakpoint: { max: 2560, min: 900 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 900, min: 0 },
            items: 1,
        },
    }
    return (
        <section className="bg-[#3a4443] py-[180px] text-white ">
            <div className="flex flex-col items-center justify-center gap-6">
                <div className="w-[42px] h-[8px] bg-white"></div>
                <div>
                    <p className="text-4xl text-center">Projects</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-6 max-w-[1200px] w-full mx-auto px-3 min-[1000px]:px-0 min-[1000px]:flex-row ">
                    <img
                        src="https://npwelch.com/wp-content/uploads/2022/06/video-placeholder-brain-bites.png"
                        className="object-cover object-center w-full h-auto max-w-[580px] max-h-[330px]"
                    ></img>
                    <div className="flex flex-col items-start justify-start gap-3 max-w-[580px] min-[1000px]:px-0 min-[1000px]:max-w-none">
                        <p className="text-3xl font-bold">
                            Business Starter - Business Website Template
                        </p>
                        <p>
                            Build a unique and professional website for your
                            business in no time. Customize the team, work, blog,
                            and contact pages to match your brand — and set your
                            business apart.
                        </p>
                        <div className="flex flex-row w-full justify-start gap-4 flex-wrap">
                            <a className="flex flex-row items-center justify-center gap-2 w-[180px] border border-[#9e9e9e] py-2 text-sm">
                                Live Demo
                                <svg
                                    width="9"
                                    height="9"
                                    viewBox="0 0 9 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mb-1"
                                >
                                    <path
                                        d="M0.5 8.5L8 1M8 1H3M8 1V6"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                            <a className="flex items-center justify-center gap-2 w-[180px] border border-[#9e9e9e] py-2 text-sm">
                                GitHub Repository
                                <svg
                                    width="9"
                                    height="9"
                                    viewBox="0 0 9 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mb-1"
                                >
                                    <path
                                        d="M0.5 8.5L8 1M8 1H3M8 1V6"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={false}
                showDots={true}
                infinite={true}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container mt-[56px] max-w-[1600px] mx-auto"
                itemClass="px-[8px]"
            >
                <img
                    src="https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/65ced7bdeb8a0c752cdad676_5e593fb060cf8701ae75f204_Business-Preview-01.jpeg"
                    className="object-cover object-center w-full h-auto "
                    loading="eager"
                ></img>
                <img
                    src="https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/5e5dddff5c76d5644bd31f2a_5cddd7def5e8a09bf192e642_Business-Preview-03.jpeg"
                    className="object-cover object-center w-full h-auto"
                    loading="eager"
                ></img>
                <img
                    src="https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/65ced7bdeb8a0c752cdad676_5e593fb060cf8701ae75f204_Business-Preview-01.jpeg"
                    className="object-cover object-center w-full h-auto"
                    loading="eager"
                ></img>
                <img
                    src="https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/5e5dddff5c76d57d8fd31f28_5cddd7f0e1437be5af82d718_Business-Preview-04.jpeg"
                    className="object-cover object-center w-full h-auto"
                    loading="eager"
                ></img>
                <img
                    src="https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/65ced7bdeb8a0c752cdad676_5e593fb060cf8701ae75f204_Business-Preview-01.jpeg"
                    className="object-cover object-center w-full h-auto"
                    loading="eager"
                ></img>
                <img
                    src="https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/5e5dddff5c76d562e1d31f29_5cddd79ae4ed737f272080ff_Business-Preview-02.jpeg"
                    className="object-cover object-center w-full h-auto"
                    loading="eager"
                ></img>
            </Carousel>
        </section>
    )
}

export default Projects
