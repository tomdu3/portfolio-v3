import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-fuchsia-500 to-red-500 bg-clip-text text-transparent text-center"> Get in Touch</h2>
                    <form className="space-y-6">
                        <div className="relative">
                            <input type="text" id="name" name="name" placeholder="Name" className="w-full bg-white/5 border border-white/50 rounded px-4 py-3 text-white transition focus:outline-none focus:border-fuchsia-500 focus:bg-blue-500/5" required/>  
                        </div>
                        <div className="relative">
                            <input type="email" id="email" name="Email" placeholder="example@mail.com" className="w-full bg-white/5 border border-white/50 rounded px-4 py-3 text-white transition focus:outline-none focus:border-fuchsia-500 focus:bg-blue-500/5" required/>  
                        </div>
                        <div className="relative">
                            <textarea
                                type="message"
                                id="message"
                                name="message"
                                placeholder="Write your message here"
                                rows={5}
                                className="w-full bg-white/5 border border-white/50 rounded px-4 py-3 text-white transition focus:outline-none focus:border-fuchsia-500 focus:bg-blue-500/5" required/>   
                        </div>
                        <button type="submit" className="w-full bg-fuchsia-500 text-white font-medium py-3 px-4 rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:bg-fuchsia-600 hover:shadow-[0_0_15px_rgba(255,0,255,0.4)]">Send</button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};