import React from 'react'

function Experience() {

    function Card(){
        return (
            <div className="grid" style={{ gridTemplateColumns: '32px 1fr' }}>
                <div className="flex flex-row items-start justify-start h-full">
                    <div className="flex flex-col items-center justify-start  h-full">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14 13.5651C15.17 13.5651 16.292 13.1004 17.1193 12.2731C17.9466 11.4458 18.4113 10.3238 18.4113 9.1538C18.4113 7.98385 17.9466 6.86182 17.1193 6.03454C16.292 5.20725 15.17 4.74249 14 4.74249C12.83 4.74249 11.708 5.20725 10.8807 6.03454C10.0534 6.86182 9.58869 7.98385 9.58869 9.1538C9.58869 10.3238 10.0534 11.4458 10.8807 12.2731C11.708 13.1004 12.83 13.5651 14 13.5651ZM14 15.5032C8.13487 15.5032 4.375 18.7399 4.375 20.3157V23.2584H23.625V20.3157C23.625 18.41 20.0655 15.5032 14 15.5032Z"
                                fill="black"
                            />
                        </svg>
                        <div className="min-h-[142px] h-full w-[1px] bg-black my-2 "></div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1 w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                        <p className="text-xl font-bold">Google</p>
                        <p className="text-sm text-gray-700">2023-2024</p>
                    </div>
                    <p className="font-bold">Fullstack developer</p>
                    <p className="text-[#313131]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic quis reprehenderit et laborum, rem, dolore eum quod
                        voluptate exercitationem nobis, nihil esse debitis
                        maxime facere minus sint delectus velit in eos quo
                        officiis explicabo deleniti dignissimos.
                    </p>
                </div>
            </div>
        )
}

    return (
        <section className=" py-[72px] w-full my-[150px]">
            <div className="w-full flex flex-col items-center justify-center gap-6">
                <div className="to-fade-in flex flex-col items-center justify-center gap-2">
                    <div>
                        <p className="text-4xl text-center">Experience</p>
                    </div>
                    <div className="to-transition-plus-x w-[84px] h-[4px] bg-[#3a4443]"></div>
                </div>
                <div className="to-fade-in flex flex-row items-center justify-between gap-8 max-w-[1200px] mx-auto px-4">
                    <div className="flex flex-col items-start justify-start gap-6">
                        <Card></Card>
                        <Card></Card>
                    </div>
                    <div className="max-w-[500px]">
                        <img
                            src="https://www.rollingstone.com/wp-content/uploads/2023/04/Bridging-the-Coding-Skill-Capabilities-Gap-to-Improve-Employees-Educational-Experience.jpg"
                            className="w-full h-auto hidden min-[768px]:block"
                            loading="lazy"
                        ></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
