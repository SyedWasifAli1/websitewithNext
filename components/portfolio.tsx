// components/Portfolio.tsx

export default function Portfolio() {
    return (
        <section id="portfolio" className="bg-gray-100 py-8 sm:py-10 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900">My Work</h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-56 sm:h-64 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                <p className="mt-2 text-gray-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const portfolioItems = [
    {
        title: "Project One",
        description: "Description of project one.",
        image: "https://tse1.mm.bing.net/th?id=OIP.YjQqtYIp_d16pWVy8N_eMQHaEK&pid=Api&P=0&h=220",
    },
    {
        title: "Project Two",
        description: "Description of project two.",
        image: "https://colorlib.com/wp/wp-content/uploads/sites/2/simple-html5-website-templates.jpg",
    },
    {
        title: "Project Three",
        description: "Description of project three.",
        image: "https://colorlib.com/wp/wp-content/uploads/sites/2/ca-app-showcase-website-template.jpg",
    },
];
