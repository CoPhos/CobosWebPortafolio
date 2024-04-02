import React from 'react'

function Navbar() {
  return (
      <div className="w-full bg-slate-500 h-[160px] flex flex-row items-center justify-around ">
          <div className="">Jorge Cobos</div>
          <ul className="flex flex-row items-center justify-between gap-6">
              <li>
                  <a href="">About</a>
              </li>
              <li>
                  <a href="">Experience</a>
              </li>
              <li>
                  <a href="">Projects</a>
              </li>
              <li>
                  <a href="">Contact</a>
              </li>
          </ul>
      </div>
  )
}

export default Navbar