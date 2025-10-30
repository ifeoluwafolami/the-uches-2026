import { useState, useEffect } from 'react'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date('2026-01-10T00:00:00').getTime()
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="font-infinity">
      <div className="h-screen z-10 top-0 flex sm:hidden flex-col justify-end items-end px-2 py-6 text-white" 
      style={{ 
        position: "sticky",
        backgroundImage: "url('/AIM07398.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
        }}>
        <h1 className="text-7xl font-gista">The Uches</h1>
        <p className="text-2xl font-extrabold tracking-wide mb-2">10 - 01 - 2026</p>
      </div>
      <div className="h-screen z-10 top-0 hidden sm:flex flex-col justify-end items-end px-4 py-0 text-white" 
      style={{ 
        position: "sticky", 
        backgroundImage: "url('/AIM07398-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <h1 className="text-9xl font-gista">The Uches</h1>
        <p className="text-4xl font-extrabold tracking-wide mb-2">10 - 01 - 2026</p>
      </div>
      <div className="bg-[#800020] h-screen z-20 top-0 p-4 flex flex-col justify-center items-center" style={{ position: "sticky" }}>
        <h1 className="text-4xl md:text-6xl font-gista text-white text-center mb-8">Forever Begins In...</h1>
        
        <div className="grid grid-cols-4 gap-4 md:gap-8 text-white">
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-7xl font-bold">{timeLeft.days}</div>
            <div className="text-lg md:text-2xl mt-2">Days</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-7xl font-bold">{timeLeft.hours}</div>
            <div className="text-lg md:text-2xl mt-2">Hours</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-7xl font-bold">{timeLeft.minutes}</div>
            <div className="text-lg md:text-2xl mt-2">Minutes</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-7xl font-bold">{timeLeft.seconds}</div>
            <div className="text-lg md:text-2xl mt-2">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App