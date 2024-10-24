export default function Services() {
    return (
        <section id="services" className="py-10 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Services</h2>
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="mt-4 text-gray-500">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const services = [
    {
        title: "Web Development",
        description: "Building responsive and dynamic websites using modern technologies.",
    },
    {
        title: "Mobile Development",
        description: "Creating user-friendly mobile applications for Android and iOS.",
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive user interfaces and experiences for web and mobile apps.",
    },
];
