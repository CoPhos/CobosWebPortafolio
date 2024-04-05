import React from 'react'
import { useTranslation } from 'react-i18next'

function Content() {
     const [tranlation, i18n] = useTranslation('global')
  return (
      <main>
          <section
              id="profile"
              className="flex flex-col items-center justify-center gap-14 h-[700px] m-12 md:flex-row"
          >
              <img
                  src="https://static1-es.millenium.gg/articles/0/32/83/0/@/152380-crownshot-lol-article_cover_bd-1.jpg"
                  class="object-cover object-center rounded-full w-[250px] h-[250px]"
              />

              <div className="flex flex-col items-center justify-start gap-2">
                  <p className="text-base font-semibold text-[#555555]">
                      {tranlation('profile.1')}
                  </p>
                  <p className="text-4xl font-bold">
                      {tranlation('profile.2')}
                  </p>
                  <p className="text-2xl font-bold text-[#555555]">
                      {tranlation('profile.3')}
                  </p>
                  <p className="self-end">{tranlation('profile.4')}</p>

                  <div className="flex flex-row items-center justify-center gap-4 w-full mt-4">
                      <div className="border border-black rounded-[25px] hover:cursor-pointer hover:bg-[#353535] transition duration-300 ease-in-out group">
                          <p className="p-4 group-hover:text-white text-sm">
                              {tranlation('profile.5')}
                          </p>
                      </div>
                      <div className="border hover:border-black rounded-[25px] hover:cursor-pointer bg-[#353535] hover:bg-white transition duration-300 ease-in-out group">
                          <p className="p-4 group-hover:text-black text-white text-sm">
                              {tranlation('profile.6')}
                          </p>
                      </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-4 w-full mt-2">
                      <a href="https://github.com/CoPhos" target="_blank">
                          <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <g clip-path="url(#clip0_593_7)">
                                  <path
                                      d="M16 0C7.1625 0 0 7.1625 0 16C0 24.8375 7.1625 32 16 32C24.8375 32 32 24.8375 32 16C32 7.1625 24.8375 0 16 0ZM11.525 22.6938H8.40625V12.7125H11.525V22.6938ZM9.88125 11.4625H9.85625C8.725 11.4625 7.99375 10.7 7.99375 9.73125C7.99375 8.74375 8.75 8 9.9 8C11.05 8 11.7562 8.74375 11.7812 9.73125C11.7875 10.6938 11.0563 11.4625 9.88125 11.4625ZM24 22.6938H20.4625V17.5312C20.4625 16.1812 19.9125 15.2563 18.6938 15.2563C17.7625 15.2563 17.2438 15.8813 17.0063 16.4813C16.9188 16.6938 16.9312 16.9937 16.9312 17.3V22.6938H13.425C13.425 22.6938 13.4688 13.5437 13.425 12.7125H16.9312V14.2812C17.1375 13.5938 18.2563 12.6187 20.0438 12.6187C22.2625 12.6187 24 14.0562 24 17.1437V22.6938Z"
                                      fill="black"
                                  />
                              </g>
                              <defs>
                                  <clipPath id="clip0_593_7">
                                      <rect
                                          width="32"
                                          height="32"
                                          fill="white"
                                      />
                                  </clipPath>
                              </defs>
                          </svg>
                      </a>
                      <a href="https://github.com/CoPhos" target="_blank">
                          <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <g clip-path="url(#clip0_593_2)">
                                  <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M16 0C24.8368 0 32 7.34389 32 16.4047C32 23.6511 27.4208 29.7983 21.0672 31.9695C20.256 32.1311 19.968 31.6188 19.968 31.182C19.968 30.6412 19.9872 28.8749 19.9872 26.6797C19.9872 25.1501 19.4752 24.1518 18.9008 23.643C22.464 23.2366 26.208 21.8492 26.208 15.5484C26.208 13.7564 25.5872 12.2941 24.56 11.1453C24.7264 10.7309 25.2752 9.06233 24.4032 6.80313C24.4032 6.80313 23.0624 6.36356 20.008 8.48516C18.7296 8.12196 17.36 7.93921 16 7.93281C14.64 7.93921 13.272 8.12196 11.9952 8.48516C8.9376 6.36356 7.5936 6.80313 7.5936 6.80313C6.7248 9.06233 7.2736 10.7309 7.4384 11.1453C6.416 12.2941 5.79041 13.7564 5.79041 15.5484C5.79041 21.8332 9.52641 23.2419 13.08 23.6563C12.6224 24.0659 12.208 24.7884 12.064 25.8492C11.152 26.2684 8.8352 26.9939 7.408 24.4867C7.408 24.4867 6.5616 22.9105 4.9552 22.7953C4.9552 22.7953 3.3952 22.7746 4.8464 23.7922C4.8464 23.7922 5.8944 24.2962 6.6224 26.1922C6.6224 26.1922 7.56161 29.1201 12.0128 28.1281C12.0208 29.4993 12.0352 30.7916 12.0352 31.182C12.0352 31.6156 11.7408 32.1231 10.9424 31.9711C4.584 29.8031 0 23.6527 0 16.4047C0 7.34389 7.1648 0 16 0Z"
                                      fill="black"
                                  />
                              </g>
                              <defs>
                                  <clipPath id="clip0_593_2">
                                      <rect
                                          width="32"
                                          height="32"
                                          fill="white"
                                      />
                                  </clipPath>
                              </defs>
                          </svg>
                      </a>
                  </div>
              </div>
          </section>
      </main>
  )
}

export default Content