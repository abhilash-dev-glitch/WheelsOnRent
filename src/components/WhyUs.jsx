import React from 'react'

function WhyUs() {
  return (
    <div>
        <div className=" p-8 flex-row items-center justify-center">
            <h2 className="text-red-400 text-center">OUR ADVANTAGES</h2>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Why Choose Us?</h2>
        <p className="text-gray-500 text-center mb-8">
            We have many types of cars that are ready for you to travel anywhere and anytime.
        </p>
        <div className="grid md:grid-cols-3 gap-4 justify-center px-4 pt-3 ">
               <div className=" p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🚀 Easy Rent</h3>
                <p className="text-gray-600">Enjoy a fast and effortless car rental experience designed to save you time and keep your day productive. Just tap, book, and drive.</p>
                </div>

                <div className=" p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">✔️ Premium Quality</h3>
                <p className="text-gray-600">All vehicles are regularly cleaned and serviced to ensure top-notch engine health and a smooth, comfortable driving experience.</p>
                </div>

                <div className=" p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">👨‍💼 Professional Agent</h3>
                <p className="text-gray-600">Need support? Our trained travel agents are available to assist and guide you throughout your journey for a worry-free ride.</p>
                </div>

                <div className=" p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🛡️ Car Safety</h3>
                <p className="text-gray-600">We perform routine checks on every vehicle to ensure the engine runs perfectly and meets all safety standards.</p>
                </div>

                <div className=" p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">💸 Refund</h3>
                <p className="text-gray-600">If the car you rent doesn’t meet the listed standards, our money-back guarantee ensures you won’t lose a rupee.</p>
                </div>

                <div className=" p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">📡 Live Monitoring</h3>
                <p className="text-gray-600">Your trip is monitored in real-time to ensure your safety, comfort, and peace of mind from start to finish.</p>
                </div>

        </div>
        </div>
    </div>
  )
}

export default WhyUs