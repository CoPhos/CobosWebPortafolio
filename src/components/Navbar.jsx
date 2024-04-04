import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'

function Navbar() {
    const [tranlation, i18n] = useTranslation('global')
    const [menuOpened, setmenuOpened] = useState(false)
    
    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <div className="w-full  h-[130px] flex flex-row items-center justify-around sticky top-0 bg-white z-10">
            <div className="text-3xl">{tranlation('navbar.1')}</div>
            <div
                className={`transition-all duration-300 max-[1059px]:top-[110px] max-[1059px]:absolute max-[1059px]:w-full max-[1059px]:shadow-inner max-[1059px]:bg-white z-10 py-5
                ${
                    menuOpened
                        ? 'max-[1059px]:left-0'
                        : 'max-[1059px]:left-[-100%]'
                }`}
            >
                <div
                    className={`flex flex-row items-center justify-start gap-1 max-[1059px]:flex-col`}
                >
                    <ul className="flex flex-row items-center justify-between gap-6 max-[1059px]:flex-col">
                        <li>
                            <a
                                href=""
                                className="text-xl hover:border-b-2 hover:border-[#b5b5b5] hover:text-[#b5b5b5] transition-colors duration-300 pb-2"
                            >
                                {tranlation('navbar.2')}
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="text-xl hover:border-b-2 hover:border-[#b5b5b5] hover:text-[#b5b5b5] transition-colors duration-300 pb-2"
                            >
                                {tranlation('navbar.3')}
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="text-xl hover:border-b-2 hover:border-[#b5b5b5] hover:text-[#b5b5b5] transition-colors duration-300 pb-2"
                            >
                                {tranlation('navbar.4')}
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="text-xl hover:border-b-2 hover:border-[#b5b5b5] hover:text-[#b5b5b5] transition-colors duration-300 pb-2"
                            >
                                {tranlation('navbar.5')}
                            </a>
                        </li>
                    </ul>
                    <div className="h-[24px] w-[2px] bg-black mx-4 max-[1059px]:w-[0px]"></div>
                    <select
                        onChange={(event) =>
                            handleChangeLanguage(event.target.value)
                        }
                    >
                        <option value="en">{tranlation('language.1')}</option>
                        <option value="es">{tranlation('language.2')}</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col min-[1060px]:hidden">
                <button onClick={() => setmenuOpened(!menuOpened)}>
                    {menuOpened ? (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.75 1.25L1.25 18.75M1.25004 1.25L18.75 18.75"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="16"
                            viewBox="0 0 24 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 0V2H24V0H0ZM0 7V9H24V7H13H0ZM0 14V16H24V14H0Z"
                                fill="black"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Navbar
