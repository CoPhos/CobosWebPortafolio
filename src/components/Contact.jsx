import React, { useState } from 'react'

function Contact(props) {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const recipient = 'cobos1932@gmail.com'
    const subject = 'From portfolio'

    const handleSendEmail = () => {
        const body = `${name},\n ${message}`
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`
        window.location.href = mailtoLink
    }

    return (
        <section className="bg-[#3a4443] w-full pb-[144px] my-[150px] px-5">
            <div className="w-full flex flex-col items-center justify-center gap-6 bg-[#3a4443]">
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 100 102"
                    height="75"
                    width="100%"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svgcolor-light"
                >
                    <path
                        d="M0 0 L50 100 L100 0 Z"
                        fill="#eef1ef"
                        stroke="white"
                    ></path>
                </svg>
                <div className="w-[42px] h-[8px] bg-white mt-[72px]"></div>
                <div>
                    <p className="text-4xl text-center text-white">Contact</p>
                </div>
                <div className="max-w-[750px] w-full">
                    <p className="text-white py-[24px] text-2xl">Contact Me!</p>
                    <form
                        onSubmit={handleSendEmail}
                        className="flex flex-col items-start justify-start gap-8 w-full"
                    >
                        <div className="flex flex-col items-start justify-start gap-1 w-full">
                            <label htmlFor="name" className="text-white ">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-2 py-1 h-10 border rounded-md border-black"
                                placeholder="Your name"
                            />
                        </div>
                        {/* <div className="flex flex-col items-start justify-start gap-1 w-full">
                            <label htmlFor="email" className="text-white ">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-2 py-1 h-10 border rounded-md border-black"
                                placeholder="Your email"
                            /> 
                        </div>*/}
                        <div className="flex flex-col items-start justify-start gap-1 w-full">
                            <label htmlFor="message" className="text-white ">
                                Message:
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows="4"
                                cols="50"
                                className="w-full px-2 py-1 border rounded-md border-black"
                                placeholder="How can I help you?"
                            />
                        </div>
                        <button
                            type="submit"
                            className=" bg-white self-end py-2 px-6"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
