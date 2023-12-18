import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <section>
            <div className="flex items-center bg-stone-100 xl:h-[600px] font-poppins dark:bg-gray-800 ">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative lg:max-w-md">
                                <img src="/assets/dry/image_1.jpg" alt="aboutimage"
                                    className="relative z-10 object-cover w-full rounded h-96" />
                                <div
                                    className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-red-500 rounded shadow dark:border-red-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                                    <p className="text-lg text-right font-semibold md:w-72">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            className="absolute top-0 right-0 w-16 h-16 text-red-700 dark:text-gray-300 opacity-10"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                            </path>
                                        </svg> מספקים שירות מצויין בהצלחה מאז שנת 1990
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 text-right">
                            <div className="pr-4 mb-6 border-r-4 border-red-500 ">
                                <span>&#63;</span>
                                <span className="text-sm text-gray-600 uppercase dark:text-gray-400"> מי אנחנו</span>
                                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                    קצת עלינו
                                </h1>
                            </div>
                            <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                                חברת יפרח ייצור מרכבים בעמ נוסדה בשנת 1990 ע"י מר&nbsp;
                                <span className='font-bold'>
                                    עמרם ארמונד יפרח ז"ל&nbsp;
                                </span>
                                וחרטה על דגלה להוביל את השוק הישראלי בתחום ייצור פיתוח מרכבים. חברת יפרח ייצור מרכבים גאה לספק לך את הפתרון המקיף ביותר לייצור, התאמה ותחזוקה שוטפת של מרכבים למשאיות. אנו מתמחים בייצור ושיווק מרכבים איכותיים בהתאמה לכל סוגי שלדות הרכב בתחומי ההובלה השונים: מרכבים סגורים, קירור, קלים, משולבים, פתוחים, וילונות, מתחלפים למטרות שונות ועוד, לכל מטרה ובהתאם לדרישות הלקוח, והכל באמצעות ציוד טכנולוגי מתקדם, רמת תכנון הנדסי גבוה ומערכת בקרת איכות יעילה. אנו בחברת ייפרח ייצור מרכבים עושים הכל כדי שלא תשים לב אלינו
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-6 mb-10 lg:mb-0 text-right">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6 text-right">
                    <h2
                        className="py-3 pr-2 mb-4 border-r-4 border-blue-500 dark:border-blue-400 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                        דרישות המפרט הטכני שלנו
                    </h2>
                    <p className="mb-4 text-right leading-7 text-gray-500 dark:text-gray-400">
                        אנו מתמחים בייצור מרכבים למשאיות ברמת תכנון הנדסי גבוה, באמצעות ציוד טכנולוגי מתקדם, צוות עובדים מיומן ומנוסה ובאמצעות מערכת בקרה ופיקוח איכותית
                    </p>
                    <ul className="mb-10">
                        <li className="flex flex-row-reverse items-center mb-4 text-right text-gray-600 dark:text-gray-400">
                            <span className="ml-3 text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </span>
                            עמידות איטום צלאה מפני חדירת מים
                        </li>
                        <li className="flex flex-row-reverse items-center mb-4 text-right text-gray-600 dark:text-gray-400">
                            <span className="ml-3 text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </span>
                            עמידה בסטנדרט מחמיר של 80 מ"מ עובי לפנל מבודד במרכבי קירור
                        </li>
                        <li className="flex flex-row-reverse items-center mb-4 text-right text-gray-600 dark:text-gray-400">
                            <span className="ml-3 text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </span>
                            עמידות בסטנדרט גבוה של טיב ואיכות חומרי הגלם
                        </li>
                        <li className="flex flex-row-reverse items-center mb-4 text-right text-gray-600 dark:text-gray-400">
                            <span className="ml-3 text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </span>
                            התחייבות לקורות רוחב במרחקים צפופים למניעת שקיעות ברצפת המרכב
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 text-right">
                    <div className="pr-4 mb-6 border-r-4 border-red-500 ">
                        <span>&#63;</span>
                        <span className="text-sm text-gray-600 uppercase dark:text-gray-400">נהג משאית</span>
                        <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                            ראש שקט
                        </h1>
                    </div>
                    <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                        כל נהג משאית יודע כמה מתסכל זה להוביל ציוד / סחורה עם ארגז לא איכותי. ארגז בו הדלתות דורשות תיקון, הקירור לא מבודד כמו שצריך, הגובה לא מספיק והדפנות לא אטומות לחדירת מים. אנחנו בחברת יפרח ייצור מרכבים, עושים הכל כדי שאתה לא תצטרך להתעכב אפילו רגע אחד על מרכב המשאית. במילים אחרות אנחנו מספקים לך את השקט הנפשי הדרוש לך כדי לנהל מערך שיווק והפצה יעיל, רווחי ואיכותי בראש שקט
                    </p>
                </div>
            </div>
        </section>
    )
}

export default page