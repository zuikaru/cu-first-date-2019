import React from 'react'
import View from './view'
import { FaCaretRight } from 'react-icons/fa'
import { Link } from 'gatsby'

const NavigationBar = ({ pageTitle, description }) => (
    <header className="sticky top-0 py-4 bg-white z-20 bg-white border-b border-gray-200">
        <View variant="wide">
            <div className="w-full flex flex-row justify-start">
                <div className="flex items-center">
                    <Link to="/#clubs">
                        <div className="font-sans flex flex-col py-3 mr-5">
                            <span className="text-gray-700 leading-none font-headline text-base">
                                <span>ชมรมในคณะวิศวกรรมศาสตร์</span>
                            </span>
                        </div>
                    </Link>
                    <div className="flex items-center py-3">
                        <span className="text-base text-gray-400">
                            <FaCaretRight />
                        </span>
                        <div className="flex flex-col ml-5">
                            <span className="text-red-600 leading-none font-headline text-base">
                                {pageTitle}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </View>
    </header>
)

export default NavigationBar
