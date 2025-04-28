import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = (e) => {
    const [emailData, setEmailData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_API_KEY; 

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((res) => {
            alert("Message sent successfully!");
            setEmailData({
                name: "",
                email: "",
                message: ""
            });
        })
        .catch(err => {
            alert("Error sending message");
        });
    };
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-fuchsia-500 to-red-500 bg-clip-text text-transparent text-center"> Get in Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={emailData.name}
                                className="w-full bg-white/5 border border-white/50 rounded px-4 py-3 text-white transition focus:outline-none focus:border-fuchsia-500 focus:bg-blue-500/5" required
                                onChange={(e) => setEmailData({ ...emailData, name: e.target.value })}
                                />  
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@mail.com"
                                value={emailData.email}
                                className="w-full bg-white/5 border border-white/50 rounded px-4 py-3 text-white transition focus:outline-none focus:border-fuchsia-500 focus:bg-blue-500/5" required
                                onChange={(e) => setEmailData({ ...emailData, email: e.target.value })}
                                />  
                        </div>
                        <div className="relative">
                            <textarea
                                type="message"
                                id="message"
                                name="message"
                                placeholder="Write your message here"
                                rows={5}
                                value={emailData.message}
                                className="w-full bg-white/5 border border-white/50 rounded px-4 py-3 text-white transition focus:outline-none focus:border-fuchsia-500 focus:bg-blue-500/5" required
                                onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
                                />   
                        </div>
                        <button type="submit" className="w-full bg-fuchsia-500 text-white font-medium py-3 px-4 rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:bg-fuchsia-600 hover:shadow-[0_0_15px_rgba(255,0,255,0.4)]">Send</button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};