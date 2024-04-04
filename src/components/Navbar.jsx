import React from 'react'
import { useTranslation } from 'react-i18next'

function Navbar() {
    const [tranlation, i18n] = useTranslation('global')
    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language)
    }
    return (
        <div className="w-full  h-[160px] flex flex-row items-center justify-around ">
            <div className="">{tranlation('navbar.1')}</div>
            <div className="flex flex-row items-center justify-start gap-1">
                <ul className="flex flex-row items-center justify-between gap-6">
                    <li>
                        <a href="">{tranlation('navbar.2')}</a>
                    </li>
                    <li>
                        <a href="">{tranlation('navbar.3')}</a>
                    </li>
                    <li>
                        <a href="">{tranlation('navbar.4')}</a>
                    </li>
                    <li>
                        <a href="">{tranlation('navbar.5')}</a>
                    </li>
                </ul>
                <div className='h-[16px] w-[2px] bg-black mx-1'></div>
                <select onChange={(event) => handleChangeLanguage(event.target.value)}>
                    <option value="en">{tranlation('language.1')}</option>
                    <option value="es">{tranlation('language.2')}</option>
                </select>
            </div>
        </div>

        //       -webkit-appearance: none;
        // -moz-appearance: none;
        // -ms-appearance: none;
        // -o-appearance: none;
        // appearance: none;
    )
}

export default Navbar
