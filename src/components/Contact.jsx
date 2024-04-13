import React, {useState} from 'react'

function Contact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', { name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <section className="bg-[#3a4443] w-full pb-[144px] my-[150px]">
            <div className="w-full flex flex-col items-center justify-center gap-6 bg-[#3a4443]">
                <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
                    <path d="M0 0 L50 100 L100 0 Z" fill="#eef1ef" stroke="white"></path>
                </svg>
                <div className="w-[42px] h-[8px] bg-white mt-[72px]"></div>
                <div>
                    <p className="text-4xl text-center text-white">
                        Experience
                    </p>
                </div>
                <div className="max-w-[750px] w-full">
                    <p className="text-white ">Contact Form</p>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label htmlFor="name" className="text-white ">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label htmlFor="email" className="text-white ">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-start gap-1 ">
                            <label htmlFor="message" className="text-white ">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full"
                            />
                        </div>
                        <button type="submit" className="text-white ">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact