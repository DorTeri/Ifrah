'use client'
import { useState } from "react";
import toast from "react-hot-toast";
import { FaWaze } from "react-icons/fa";


const Footer = () => {

  const wazeUrl = `https://www.waze.com/ul?q=${encodeURIComponent('יפרח ייצור מרכבים')}`;

  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)

    const formData = new FormData(e.currentTarget);
    const formObject: { [key: string]: string } = {}; // Type annotation added

    formData.forEach((value, key) => {
      formObject[key] = value.toString(); // Ensure values are strings
    });

    // Advanced form validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formObject.email || !emailRegex.test(formObject.email.trim())) {
      console.error('Invalid email address');
      // Add error handling for invalid email
      return;
    }

    if (!formObject.phone || !formObject.subject || !formObject.message) {
      console.error('All fields are required');
      // Add error handling for other required fields
      return;
    }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        toast.success("האימייל נשלח, תודה שייצרת קשר");
        setFormData({
          phone: '',
          email: '',
          subject: '',
          message: '',
        });
      }
      setIsLoading(false)
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false)
      toast.error("שליחת אימייל נכשלה, צור איתנו קשר");
    }
  };


  return (
    <footer className='w-full dark:bg-gray-900 bg-[#bdbdbdbb]' id='footer'>
      <div className="max-container mx-auto w-full relative text-center text-black">
        <div className="dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="w-full grid gap-8 sm:gap-6 md:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">פרטי התקשרות</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <p>08-9295222</p>
                    </li>
                    <li>
                      <p>office@ifrah-merkavim.co.il</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">שעות פעילות</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <p>ראשון - חמישי</p>
                    </li>
                    <li>
                      <p>07:30 - 16:30</p>
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
                          <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <span className='inline-block'>בפייסבוק</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          </div>
        </div>
        <section className="dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">דברו איתנו</h2>
            <form className="space-y-8 text-right" onSubmit={(e) => handleSubmit(e)}>
              <div className='flex gap-5'>
                <div className='w-1/2'>
                  <label className="block mb-2 text-sm font-bold dark:text-gray-300 text-[#ca2828]">מספר טלפון</label>
                  <input type="phone" id="phone" name='phone' value={formData.phone} onChange={(e) => handleChange(e)} className="shadow-sm bg-white border border-[#ca2828] text-black text-sm rounded-lg placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light text-right" placeholder="050-424-4242" required />
                </div>
                <div className='w-1/2'>
                  <label className="block mb-2 text-sm font-bold dark:text-gray-300 text-[#ca2828]">אימייל</label>
                  <input type="email" id="email" value={formData.email} onChange={(e) => handleChange(e)} name='email' className="shadow-sm bg-white border border-[#ca2828] text-black text-sm rounded-lg placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light text-right" placeholder="office@ifrah-merkavim.co.il" required />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold text-[#ca2828] dark:text-gray-300">נושא</label>
                <input type="text" id="subject" value={formData.subject} name='subject' onChange={(e) => handleChange(e)} className="block p-3 w-full text-sm text-black bg-white rounded-lg border placeholder-gray-400 border-[#ca2828] shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light text-right" placeholder="איך אנחנו יכולים לעזור לך" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-bold text-[#ca2828] dark:text-gray-400">ההודעה שלך</label>
                <textarea id="message" name='message' value={formData.message} onChange={(e) => handleChange(e)} rows={6} className="block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-[#ca2828] focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 text-right" placeholder="כתוב פה את ההודעה שלך"></textarea>
              </div>
              <button disabled={isLoading} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4
               focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-[#ca2828] hover:bg-white
                hover:text-black transition-all duration-300">שלח הודעה</button>
            </form>
          </div>
        </section>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center pb-5">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">DorTayari</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>

  )
}

export default Footer