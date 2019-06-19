import React from 'react'
import View from './view'
import { FiChevronLeft } from 'react-icons/fi'

const NavigationBar = () => (
    <header className="sticky top-0 py-2 bg-gray-700 z-20 shadow-2xl">
        <View>
            <div className="w-full flex flex-row justify-between">
                <div className="w-1/2 flex items-center">
                    <a href="/#fd-clubs">
                        <div className="flex items-center py-3">
                            <span className="text-base text-white">
                                <FiChevronLeft />
                            </span>
                            <span className="text-white ml-2 leading-none font-sans text-2xs uppercase tracking-widest">
                                GO BACK
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </View>
    </header>
)

export default NavigationBar
