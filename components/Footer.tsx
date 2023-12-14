import Button from './Button';
import { FaWaze } from "react-icons/fa";


const Footer = () => {

  const wazeUrl = `https://www.waze.com/ul?q=${encodeURIComponent('יפרח ייצור מרכבים')}`;

  return (
    <footer className='w-full bg-[#bdbdbdbb]'>
      <div className="max-container mx-auto w-full relative text-center text-black">
        <div className="dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="w-full grid gap-8 sm:gap-6 md:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">פרטי התקשרות</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="https://flowbite.com/" className="hover:underline">08-9295222</a>
                    </li>
                    <li>
                      <a href="https://tailwindcss.com/" className="hover:underline">office@ifrah-merkavim.co.il</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">שעות פעילות</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="https://github.com/themesberg/flowbite" className="hover:underline ">ראשון - חמישי</a>
                    </li>
                    <li>
                      <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">07:30 - 16:30</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">היכן אנחנו</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4 flex justify-center items-center gap-3">
                      <a href={wazeUrl} className='text-xl hover:text-[#000] transition-all duration-300' target="_blank" rel="noopener noreferrer">
                        <FaWaze />
                      </a>
                      <span className='inline-block'>יגל הגפן 13</span>
                    </li>
                    <li className="mb-4 flex justify-center items-center gap-3">
                      <a href="https://www.facebook.com/profile.php?id=100046397047219&mibextid=LQQJ4d" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                          <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                        </svg>
                      </a>
                      <span className='inline-block'>בפייסבוק</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="flex justify-center">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">DorTayari</a>. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer