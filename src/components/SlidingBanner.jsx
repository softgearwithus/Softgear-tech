import { useState, useEffect } from 'react'

const SlidingBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const items = [
        { icon: "🎯", text: "Transform" },
        { icon: "🚀", text: "Launch" },
        { icon: "📈", text: "Grow" }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [items.length])

    return (
        <div className="relative w-full h-14 sm:h-16 md:h-18 lg:h-20 overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg sm:rounded-xl shadow-xl">
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="min-w-full flex justify-center items-center text-center text-white px-2">
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mr-2 sm:mr-3 md:mr-4">{item.icon}</div>
                        <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">{item.text}</div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-1.5 sm:bottom-2 md:bottom-2.5 lg:bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-1.5 md:gap-2">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white/40'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default SlidingBanner
