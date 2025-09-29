import { motion } from 'framer-motion'

const MiniCard = ({
    icon,
    value,
    label,
    bgColor = "",
    textColor = "text-white",
    iconColor = "text-yellow-400",
    className = ""
}) => {
    // Generate random values for each card instance
    const randomDelay = Math.random() * 2; // 0-2 seconds delay
    const randomDuration = 2.5 + Math.random() * 2; // 2.5-4.5 seconds duration
    const randomOffset = 5 + Math.random() * 10; // 5-15px movement
    const randomRotation = (Math.random() - 0.5) * 6; // -3 to 3 degrees

    return (
        <motion.div
            className={`bg-white/10 ${textColor} backdrop-blur-lg border border-white/20 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 lg:p-6 shadow-xl ${className}`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -randomOffset, 0],
                rotate: [0, randomRotation, -randomRotation, 0],
            }}
            transition={{
                opacity: { duration: 0.6, delay: randomDelay * 0.3 },
                scale: { duration: 0.6, delay: randomDelay * 0.3 },
                y: { duration: randomDuration, repeat: Infinity, ease: "easeInOut", delay: randomDelay },
                rotate: { duration: randomDuration, repeat: Infinity, ease: "easeInOut", delay: randomDelay }
            }}
        >
            <div className={`${iconColor} text-base sm:text-lg md:text-xl lg:text-2xl mb-1 sm:mb-2 md:mb-3`}>
                {icon}
            </div>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">
                {value}
            </div>
            <div className="text-xs sm:text-sm opacity-80 leading-tight">
                {label}
            </div>
        </motion.div>
    )
}

export default MiniCard