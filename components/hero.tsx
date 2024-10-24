// components/Hero.tsx

export default function Hero() {
    return (
        <section
            id="home"
            className="flex items-center justify-center h-screen"
            style={{
                backgroundImage: 'url("https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=600)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="text-center bg-white bg-opacity-70 p-6 sm:p-8 rounded-lg max-w-lg mx-4 sm:mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                    Welcome to My Website
                </h1>
                <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-500">
                    Your success is my mission.
                </p>
                <a
                    href="#contact"
                    className="mt-6 sm:mt-8 inline-block bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-purple-700"
                >
                    Get Started
                </a>
            </div>
        </section>
    );
}
