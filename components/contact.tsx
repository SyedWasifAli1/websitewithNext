// components/Contact.tsx

export default function Contact() {
    return (
        <section id="contact" className="py-10 sm:py-20">
            <div className="max-w-7xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
                <form className="mt-6 sm:mt-10 max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        rows={4}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white px-4 py-3 rounded-md hover:bg-purple-700 transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
