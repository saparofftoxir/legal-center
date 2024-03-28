import React from 'react'
import { NavLink } from 'react-router-dom'

function Main() {
    return (
        <main className='container flex flex-col  px-5 min-h-scree'>
            <nav className='w-2/3 mt-7 flex items-center justify-between'>
                <ul className='flex items-center justify-between gap-x-9 font-semibold'>
                    <li>
                        <NavLink>
                            O компании
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            Услуги
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            Sirius
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            Тарифы
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            Контакты
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <section className='w-full flex  relative flex-col'>
                <div className='w-full flex justify-between'>

                    <div className='flex flex-col'>

                        <h1 className='text-4xl font-bold pt-16'>Юридический полис ILC — <br /> быстрое решение сложных <br /> вопросов 24/7</h1>
                        <h3 className='pt-6'>
                            Ваша личная команда профессиональных юристов, которая всегда под <br /> рукой. А также доступ к бонусам партнерской программы — доход <br /> до $260 с каждого полиса, купленного по вашему приглашению.
                        </h3>
                        <button className='p-2.5 text-sm mt-10 rounded-xl w-56 bg-blue-950 transition focus:ring-2 leading-5 rind-blue-800 hover:bg-blue-800 text-white'>Попробовать бесплатно</button>
                    </div>
                    <div className=' relative mr-14'>
                        <div className='absolute pl-[200px]'>
                            <img className='w-32' src="./src/assets/left_banner_top.png" alt="" />
                        </div>
                        <div className='mt-20'>
                            <img className=' w-96 object-cover ' src="./src/assets/banner.png" alt="" />

                        </div>


                    </div>
                </div>
                <div className='w-3/5 flex  items-center absolute mt-[450px] rounded-lg justify-between p-12 ml-[470px] h-40 bg-white shadow-lg'>
                    <div className='flex items-center'>
                        <div className='flex flex-col items-start gap-y-2'>

                            <img className='w-12 h-12' src="./src/assets/oclock.svg" alt="" />
                            <h1 className='font-semibold'>Юридическая <br /> поддержка 24/7</h1>
                        </div>

                    </div>
                    <div className='flex items-center'>
                        <div className='flex flex-col items-start gap-y-2'>
                            <img className='w-11 h-11' src="./src/assets/Group.svg" alt="" />
                            <h1 className='font-semibold'>Множество возможностей <br /> в одном полисе</h1>
                        </div>

                    </div>
                    <div className='flex items-center'>
                        <div className='flex flex-col items-start gap-y-2'>
                            <img src="./src/assets/money.svg" alt="" />
                            <h1 className='font-semibold'>Бонусы партнерской <br /> программы</h1>
                        </div>

                    </div>
                </div>
            </section>
            <section className='w-full mt-56 px-10'>
                <div className='w-full flex justify-between'>
                    <div className='flex flex-col gap-y-6'>
                        <img className='w-32' src="./src/assets/logo.svg" alt="" />
                        <h1 className='font-bold text-3xl'>Ваша личная online <br /> команда юристов</h1>
                        <p className='text-lg'>Мы предоставляем комплексный консалтинговый <br /> сервис с полисной системой обслуживания для <br /> частных клиентов и для  бизнеса, с использованием <br /> новейших цифровых технологий.</p>
                    </div>
                    <div className='w-[570px] flex flex-col items-strat gap-y-5'>
                        <div className='flex items-end gap-x-5 '>

                            <div className='w-52 h-36 flex flex-col items-start gap-y-2 rounded-xl p-5 bg-white shadow-lg'>
                                <div className='flex  items-end'>
                                    <h1 className='text-5xl font-bold text-[#9333ea]'>100+</h1>
                                    <p className=' font-bold text-[#9333ea] '>тыс</p>

                                </div>
                                <h3 className='font-semibold'>Клиентов <br /> по всему миру</h3>
                            </div>

                            <div className='rounded-xl w-48 h-32 flex flex-col items-start gap-y-2 p-5 bg-white shadow-xl'>
                                <div className='flex items-end'>
                                    <h1 className='text-4xl font-bold text-[#a78bfa]'>15</h1>
                                    <p className='text-[#a78bfa] font-bold text-xl'>лет</p>
                                </div>
                                <h4 className='font-semibold'>Опытных <br /> юристов в штате</h4>

                            </div>

                        </div>
                        <div className='flex items-start justify-start ml-12 gap-x-5'>
                            <div className='rounded-xl flex flex-col items-start gap-y-2 p-5 w-40 h-32 bg-white shadow-xl'>
                                <div className='flex items-end'>
                                    <h1 className='text-4xl font-bold text-[#9333ea]'>50+</h1>
                                </div>
                                <h4 className=' text-sm font-semibold'>Опытных <br /> юристов в штате</h4>

                            </div>
                            <div className='rouunded-xl shadow-xl flex flex-col items-start gap-y-3 p-5 rounded-xl w-44 h-40 bg-white'>
                                <div className='flex items-end'>
                                    <h1 className='text-[#a78bfa] text-xl font-bold'>SIRIUS</h1>
                                </div>
                                <h4 className='font-semibold text-gray-600'>Система на базе <br /> искусственного <br /> интеллекта</h4>

                            </div>

                        </div>

                    </div>

                </div>
                <div className='w-full flex flex-col items-center mt-10'>
                    <h1 className='font-bold text-xl'>Даём поддержку</h1>
                    <div className='w-full flex gap-x-5 mt-10 items-center justify-between'>
                        <div className='w-full h-96 flex flex-col p-10 rounded-xl bg-white shadow-lg'>
                            <div className='flex items-center justify-center'>

                                <img className='w-36 h-36 object-cover' src="./src/assets/pupils.png" alt="" />
                            </div>
                            <div className='flex flex-col gap-y-3 items-start'>
                                <h1 className='font-bold text-2xl'>Бизнесу</h1>
                                <h3 className='font-medium'>Услуги профессиональных юристов <br /> для вашей компании по <br /> фиксированному тарифу — это в <br />несколько раз выгоднее, чем <br /> содержать свой штат.</h3>
                            </div>

                        </div>
                        <div className='w-full h-96 flex flex-col p-10 rounded-xl bg-white shadow-lg'>
                            <div className='flex items-center justify-center'>

                                <img className='w-36 h-36 object-cover' src="./src/assets/startUp.png" alt="" />
                            </div>
                            <div className='flex flex-col gap-y-3 items-start'>
                                <h1 className='font-bold text-2xl'>StartUP проектам</h1>
                                <h3 className='font-medium'>Эксперты ILC помогут выбрать <br /> оптимальную правовую форму <br /> для ведения бизнеса, оптимизировать <br /> налоги и подготовить необходимый <br /> пакет документов.</h3>
                            </div>

                        </div>
                        <div className='w-full h-96 flex flex-col p-10 rounded-xl bg-white shadow-lg'>
                            <div className='flex items-center justify-center'>

                                <img className='w-36 h-36 object-cover' src="./src/assets/clients.png" alt="" />
                            </div>
                            <div className='flex flex-col gap-y-3 items-start'>
                                <h1 className='font-bold text-2xl'>Частным клиентам</h1>
                                <h3 className='font-medium'>Оперативные решения сложных <br /> вопросов в режиме онлайн: ДТП, <br /> наследство, страховые споры, <br /> земельные и имущественные <br /> процессы, защита прав.</h3>
                            </div>

                        </div>



                    </div>

                </div>

            </section>
            <section className='w-full mt-40 flex flex-col relative items-center justify-center px-10'>
                <h1 className='text-2xl font-bold'>Преимущества сервиса</h1>
                <div className='w-full flex gap-x-10'>
                    <div className='flex items-center justify-center'>
                        <div className='w-full mt-20 flex items-center '>
                            <div className='flex items-center justify-center'>
                                <div className='relative' >
                                    <img src="./src/assets/tel.png" alt="" />
                                </div>
                                <div className='absolute '>
                                    <img src="./src/assets/Restangle.png" alt="" />
                                </div>
                                <div className='absolute flex flex-col items-center'>

                                    <img src="./src/assets/sirius.png" alt="" />
                                    <h1 className='text-white'>S I R I U S</h1>
                                </div>

                            </div>

                            <div className='absolute w-48 h-28 mb-96 ml-20 p-5 bg-white rounded-xl flex flex-col gap-y-2 items-center justify-center shadow-lg shadow-blue-200'>
                                <h3 className='text-[13px] font-bold'>Чем могу вам помочь?</h3>
                                <button className='p-2 w-full text-sm rounded bg-blue-800 text-white'>Задайте вопрос</button>
                            </div>

                        </div>

                    </div>
                    <div className='flex flex-1 gap-x-10  items-center justify-between'>
                        <div className='w-full pl-10 flex flex-col'>
                            <h1 className='font-bold text-xl text-blue-950'>S I R I U S</h1>
                            <p className='text-[15px] font-medium pt-3'>— первый полноценный искусственный интеллект, <br />
                                самостоятельно консультирующий людей по любым <br /> юридическим вопросам в режиме реального времени.
                                <br /> <br /> Sirius анализирует входящий запрос и оперативно <br />
                                генерирует квалифицированный ответ на основании <br /> юридической логики.
                                <br /><br /> Доступ к системе предоставляется владельцу полиса <br />
                                в личном кабинете на нашем сайте.</p>
                        </div>
                        <div className='w-full  flex flex-col gap-y-3'>
                            <div className='flex items-center gap-x-2'>
                                <img src="./src/assets/Vector.svg" alt="" />
                                <p className='text-[15px] font-medium'>работает 24/7</p>

                            </div>
                            <div className='flex items-center gap-x-2'>
                                <img src="./src/assets/Vector.svg" alt="" />
                                <p className='text-[15px] font-medium'>100% точность и корректность ответов</p>

                            </div>
                            <div className='flex items-center gap-x-2'>
                                <img src="./src/assets/Vector.svg" alt="" />
                                <p className='text-[15px] font-medium'> при необходимости, подключает живого <br /> специалиста</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <img src="./src/assets/Vector.svg" alt="" />
                                <p className='text-[15px] font-medium'>не берет больничный и никогда не <br /> уволится</p>
                            </div>



                        </div>

                    </div>
                </div>
                <div className='w-full flex absolute mt-[750px]'>
                    <div className='w-full flex justify-between gap-x-5'>
                        <div className='w-full min-h-72 rounded-2xl bg-white shadow-xl'>
                            <div className='flex flex-col gap-y-3 p-6'>
                                <img className='w-14' src="./src/assets/chat.svg" alt="" />
                                <h1 className='font-bold'>Удобный <br /> формат</h1>
                                <p >Консультируем 24/7 <br /> в любом удобном <br /> формате: чат, аудио- <br />звонок, c помощью <br /> искусственного<br />интеллекта Sirius в <br /> личном кабинете.</p>
                            </div>
                        </div>
                        <div className='w-full min-h-72 rounded-2xl bg-white shadow-xl'>
                            <div className='flex flex-col gap-y-3 p-6'>
                                <img className='w-14' src="./src/assets/money.svg" alt="" />
                                <h1 className='font-bold'>Доступная <br /> цена</h1>
                                <p>Выбирайте <br />комфортный для себя <br /> пакет юридической <br /> поддержки, оплачивая <br /> только то, что <br /> действительно нужно.</p>
                            </div>
                        </div>
                        <div className='w-full min-h-72 rounded-2xl bg-white shadow-xl'>
                            <div className='flex flex-col gap-y-3 p-6'>
                                <img className='w-10' src="./src/assets/calcul.svg" alt="" />
                                <h1 className='font-bold'>Налоговый <br />калькулятор</h1>
                                <p>Точный расчет <br /> налоговой нагрузки за <br /> считанные минуты с <br /> помощью телеграм- <br />бота ILC_tax — это <br /> быстро и удобно!</p>
                            </div>
                        </div>
                        <div className='w-full min-h-72 rounded-2xl bg-white shadow-xl'>
                            <div className='flex flex-col gap-y-3 p-6'>
                                <img className='w-10' src="./src/assets/list.svg" alt="" />
                                <h1 className='font-bold'>Конструктор <br /> документов</h1>
                                <p>Доступ к более чем <br /> 9500 готовых и <br /> проработанных <br /> документов для <br /> бизнеса — бесплатно!</p>
                            </div>
                        </div>
                        <div className='w-full min-h-72 rounded-2xl bg-white shadow-xl'>
                            <div className='flex flex-col gap-y-3 p-6'>
                                <img className='w-14' src="./src/assets/acces.svg" alt="" />
                                <h1 className='font-bold'>Бесплатный доступ <br /> для всех, кто <br /> зарегистрируется</h1>
                                <p>Конструктор с <br /> ограниченным <br />количеством <br /> документов на базе  <br /> телеграм-бота</p>
                            </div>
                        </div>




                    </div>

                </div>

            </section>
            <section className='w-full mt-96 bg-gray-flex  justify-center h-screen'>
                <div className='w-4/5 flex items-center m-auto bg-yellow- flex-col'>
                    <div className='flex flex-col items-center gap-y-3'>
                        <h1 className='text-xl font-bold'>Тарифы</h1>
                        <h3 className='font-medium text-gray-500'>для всех и для каждого</h3>
                        <div className='flex items-center gap-x-10'>
                            <button className='p-1.5 text-sm bg-blue-950 text-white rounded-lg'>1 месяц</button>
                            <div>
                                <h3 className='font-medium text-lg text-blue-950'>Год</h3>
                                <img className='w' src="./src/assets/line.svg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='w-full mt-7 bg-white rounded-xl shadow-xl'>
                        <div className='flex items-center flex-col pt-10 gap-y-3 justify-center'>
                            <h2 className='text-xl font-semibold text-blue-700'>Легкий старт</h2>
                            <h1 className='text-gray-400 text-2xl font-semibold'>Бесплатно</h1>
                            <p className='text-base text-gray-500'>Для ознакомления с сервисом и его возможностями</p>
                            <h2 className='text-xl font-semibold'>Для Вас доступно</h2>
                        </div>
                        <div className='w-full flex flex-col gap-x-3'>
                            <div className='flex'>
                                <div className='w-full   flex  justify-end  p-4'>
                                    <div className='flex flex-col gap-y-3 items-start'>

                                        <div className='flex items-center  gap-x-2'>
                                            <img src="./src/assets/Vector.svg" alt="" />
                                            <p>Конструктор документов﻿</p>

                                        </div>
                                        <div className='flex items-center  gap-x-2'>
                                            <img src="./src/assets/Vector.svg" alt="" />
                                            <p>Личный кабинет (базовая версия)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full flex  justify-start  p-4'>
                                    <div className='flex flex-col gap-y-3 items-start'>

                                        <div className='flex items-center  gap-x-2'>
                                            <img src="./src/assets/Vector.svg" alt="" />
                                            <p>Sirius</p>

                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <img src="./src/assets/Vector.svg" alt="" />
                                            <p>1 устная первичная консультация <br /> по правовому запросу</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-center mb-10 items-center bg-red- h-20'>
                            <div className='flex flex-col items-center'>
                                <img src="./src/assets/cabinet.svg" alt="" />
                                <button className='bg-blue-950 rounded-xl text-sm p-2 w-40 text-white'>Оставить заявку</button>
                            </div>

                        </div>

                    </div>
                    <div className='w-full min-h-screen mt-8'>
                        <div className='w-full grid grid-cols-2 gap-8'>

                            <div className='w-full flex flex-col min-h-96 bg-white rounded-xl pt-10 pl-8 shadow-xl'>
                                <div className='flex flex-col gap-y-3'>
                                    <h1 className='text-xl font-semibold text-blue-800'>бизнес-консультант</h1>
                                    <p className='text-gray-600'>Для частных лиц и фрилансеров</p>
                                    <h1 className='font-bold text-xl'>$38/месяц</h1>
                                    <p className='font-semibold'>Для Вас доступно</p>
                                </div>
                                <div className='flex pt-3 flex-col gap-y-3'>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Бесплатная телефонная линия + функция <br /> «перезвоните мне»</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Доступ к первому юридическому интеллекту <br /> Sirius 24/7</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Пакет документов для открытия бизнеса в РФ</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Сопровождение сделок</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Устные и письменные консультации <br /> юристов 24/7</p>
                                    </div>

                                </div>
                                <div className='w-full h-32 pt-5'>
                                    <img src="./src/assets/cabinet.svg" alt="" />
                                    <button className='w-32 p-2 text-sm text-white bg-blue-950 rounded-lg'>Оставить заявку</button>

                                </div>

                            </div>
                            <div className='w-full flex flex-col min-h-96 bg-white rounded-xl pt-10 pl-8 shadow-xl'>
                                <div className='flex flex-col gap-y-3'>
                                    <h1 className='text-xl font-semibold text-blue-800'>бизнес-премиум</h1>
                                    <p className='text-gray-600'>Для среднего бизнеса</p>
                                    <h1 className='font-bold text-xl'>$38/месяц</h1>
                                    <p className='font-semibold'>Для Вас доступно</p>
                                </div>
                                <div className='flex pt-3 flex-col gap-y-3'>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Бесплатная телефонная линия + функция <br /> «перезвоните мне»</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Доступ к первому юридическому интеллекту <br /> Sirius 24/7</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Пакет документов для открытия бизнеса в РФ</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Сопровождение сделок</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Устные и письменные консультации <br /> юристов 24/7</p>
                                    </div>

                                </div>
                                <div className='w-full h-32 pt-5'>
                                    <img src="./src/assets/cabinet.svg" alt="" />
                                    <button className='w-32 p-2 text-sm text-white bg-blue-950 rounded-lg'>Оставить заявку</button>

                                </div>

                            </div>
                            <div className='w-full flex flex-col min-h-96 bg-white rounded-xl pt-10 pl-8 shadow-xl'>
                                <div className='flex flex-col gap-y-3'>
                                    <h1 className='text-xl font-semibold text-blue-800'>бизнес-премиум</h1>
                                    <p className='text-gray-600'>Для среднего бизнеса</p>
                                    <h1 className='font-bold text-xl'>$49/месяц</h1>
                                    <p className='font-semibold'>Для Вас доступно</p>
                                </div>
                                <div className='flex pt-3 flex-col gap-y-3'>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Разработка уникальных договоров любой <br /> сложности</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Доступ к первому юридическому искусственному интеллекту Sirius — 24/7</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Регистрация компаний и открытия счетов в РФ</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Сопровождение сделок любой сложности</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Устные и письменные консультации <br /> юристов 24/7</p>
                                    </div>

                                </div>
                                <div className='w-full h-32 pt-5'>
                                    <img src="./src/assets/cabinet.svg" alt="" />
                                    <button className='w-32 p-2 text-sm text-white bg-blue-950 rounded-lg'>Оставить заявку</button>

                                </div>

                            </div>
                            <div className='w-full flex flex-col min-h-96 bg-white rounded-xl pt-10 pl-8 shadow-xl'>
                                <div className='flex flex-col gap-y-3'>
                                    <h1 className='text-xl font-semibold text-blue-800'>международный бизнес</h1>
                                    <p className='text-gray-600'>Для ведения бизнеса за рубежом﻿</p>
                                    <h1 className='font-bold text-xl'>$98/месяц</h1>
                                    <p className='font-semibold'>Для Вас доступно</p>
                                </div>
                                <div className='flex pt-3 flex-col gap-y-3'>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Разработка уникальных договоров любой <br /> сложности</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Консультации и сопровождение по <br /> регистрации компаний и банковских счетов по <br /> всему миру</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Оказание юридических услуг на английском <br /> языке</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Консультации по международному праву</p>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <img src="./src/assets/Vector.svg" alt="" />
                                        <p>Сопровождение сделок любой сложности</p>
                                    </div>

                                </div>
                                <div className='w-full h-32 pt-5'>
                                    <img src="./src/assets/cabinet.svg" alt="" />
                                    <button className='w-32 p-2 text-sm text-white bg-blue-950 rounded-lg'>Оставить заявку</button>

                                </div>

                            </div>


                        </div>

                    </div>
                </div>
                <section className='w-full flex flex-col items-center bg-red mt-40'>
                    <div className='w-full relative flex items-center h-72'>
                        <div className='flex  w-full '>
                            <img className='w-full h-72 object-cover' src="./src/assets/banner_image.png" alt="" />
                        </div>
                        <div className='flex absolute items-center'>

                            <div className='flex pl-32 pt-14'>
                                <img className='w-64' src="./src/assets/undraw.png" alt="" />

                            </div>

                            <div className=' absolute ml-32 flex text-white flex-col gap-y-4 w-72 h-32'>
                                <h1 className='text-2xl font-semibold'>Станьте партнером ILC</h1>
                                <div>
                                    <p className='font-semibold'>и зарабатывайте на рекомендациях <br /> в любое время, из любой точки мира</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-3/4 flex flex-col gap-y-5 mt-16 h-screen'>
                        <div className='w-full h-52 bg-white pl- flex items-center justify-center gap-x-7 shadow-lg p-3 rounded-xl'>
                            <img className='obgject-cover' src="./src/assets/gift_card.png" alt="" />
                            <div className='flex flex-col gap-y-4'>
                                <h1 className='text-2xl font-semibold'>Высокие бонусы</h1>
                                <p>Вы получаете до 35% от стоимости каждого полиса, который был <br />  куплен по вашей рекомендации. </p>
                                <p className='text-gray-400'>К примеру: юридический полис “Международный бизнес” стоит $750/ <br />год, с него вы зарабатываете $260.</p>
                            </div>
                        </div>
                        <div className='w-full h-52 bg-white pl- flex items-center justify-center gap-x-7 shadow-lg p-3 rounded-xl'>
                            <img className='obgject-cover' src="./src/assets/prefrence.png" alt="" />
                            <div className='flex flex-col gap-y-4'>
                                <h1 className='text-2xl font-semibold'>Полезный продукт</h1>
                                <p>Сервис ILC — это ваша личная команда юристов, которая работает<br /> в формате “здесь и сейчас”, 24/7, без выходных.</p>
                                <p>Нужна помощь? Всего 1 клик и персональный юрист ILC уже решает <br /> ваш вопрос.
                                    <span className='font-bold'>
                                        Это в несколько раз дешевле и быстрее, чем искать <br /> частного специалиста.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className='w-full h-52 bg-white pl- flex items-center justify-center gap-x-7 shadow-lg p-3 rounded-xl'>
                            <img className='obgject-cover' src="./src/assets/development.png" alt="" />
                            <div className='flex flex-col gap-y-4'>
                                <h1 className='text-2xl font-semibold'>Широкая аудитория</h1>
                                <p>Качественная юридическая помощь нужна абсолютно всем: бизнесу, <br /> семьям, крупным компаниям, экспертам и частным лицам. </p>
                                <p>Рекомендуя полис ILC,
                                    <span className='font-bold'>
                                        вы помогаете людям
                                    </span>
                                    оперативно решать <br /> жизненные задачи в 1 клик.</p>
                            </div>
                        </div>

                        <div className='w-full h-52 bg-white pl- flex items-center justify-center gap-x-7 shadow-lg p-3 rounded-xl'>
                            <img className='obgject-cover' src="./src/assets/development.png" alt="" />
                            <div className='flex flex-col gap-y-4'>
                                <h1 className='text-2xl font-semibold'>Обучение и поддержка</h1>
                                <p>Вы получите доступ в личный кабинет с подробной информацией <br/>о том, как:</p>
                                <p>Рекомендуя полис ILC,
                                    <span className='font-bold'>
                                        вы помогаете людям
                                    </span>
                                    оперативно решать <br /> жизненные задачи в 1 клик.</p>
                            </div>
                        </div>


                    </div>

                </section>

            </section>




        </main>
    )
}

export default Main
