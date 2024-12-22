import React from 'react'

export default function NewsData(props) {

    return (
        
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 md:px-9 '>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={props.urlImg ? props.urlImg : "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"} alt="" />
                <div className="p-5">
                    <p className='text-[19px] text-blue-600'><strong>By</strong>-<b>{props.author}..</b></p>
                    <p className='text-[19px] text-blue-600'><strong>Source</strong>-<b>{props.source}..</b></p>
                    <p className='text-[19px] text-blue-600'><strong>On</strong>-<b>{new Date(props.date).toGMTString().slice(0,26)}</b></p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                    <a target='_blank' href={props.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg hover:bg-gradient-to-bl  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    )
}
