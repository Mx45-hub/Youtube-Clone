import React from 'react'


function Sidebar () {
  return (
    <><div className=" fixed left-0 bg-black">
          <div className="bg-stone-800 h-screen p-8 w-64 scroll-smooth">

              <h2 className="text-3xl font-bold underline bg-red-700 p-2 border-spacing-3 rounded-lg">Youtube</h2>

              <hr className='mt-6'></hr>




              <button className="  text-3xl border-e-slate-950 p-2 border-spacing-3 rounded-lg  hover: font-bold"> <div className='font-light space-y-2 flex items-center'>
                  <ul className="flex items-center"> {/* Added a flex container */}
                      <svg
                          className="h-8 w-8 text-red-500 "
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                      >
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                      <li className='ml-7'>Home</li>
                  </ul>
              </div> </button>

              <button className="  text-3xl border-e-slate-950 p-2 border-spacing-3 rounded-lg  hover: font-bold"> <div className='font-light space-y-2 flex items-center'>
                  <ul className="flex items-center"> {/* Added a flex container */}
                      <svg
                          className="h-8 w-8 text-red-500 "
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                      >
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                      <li className='ml-7'>Home</li>
                  </ul>
              </div> </button>

              <button className="  text-3xl border-e-slate-950 p-2 border-spacing-3 rounded-lg  hover: font-bold"> <div className='font-light space-y-2 flex items-center'>
                  <ul className="flex items-center"> {/* Added a flex container */}
                      <svg
                          className="h-8 w-8 text-red-500 "
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                      >
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                      <li className='ml-7'>Home</li>
                  </ul>
              </div> </button>








              <hr className='mt-6'></hr>

              <hr className='mt-6'></hr>

              <hr className='mt-6'></hr>

          </div>

      </div><body>

              <p className=" text-center text-orange-500 hover:text-black px-5 font-extrabold brightness-95 border-spacing-10 backdrop:focus:text-yellow-500">Youtube Clone</p>



          </body></>
  )
}

export default Sidebar