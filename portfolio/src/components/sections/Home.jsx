import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-fuchsia-500 to-red-500 bg-clip-text text-transparent leading-right">Hi, I am Tomislav Dukez</h1>   
            <p className="text-gray-200 text-l md:text-lg mb-8 max-w-2xl mx-auto">
                I am a Full Stack Software Developer, specialized in Predictive Analytics. I am proficient in JavaScript, Python, Bootstrap, Flask, Django, FastAPI, Node.js, Express.js, React, Tailwind, PostgreSQL, and MongoDB as well as in Data Science tools like NumPy, Pandas, TensorFlow, Scikit-learn, Streamlit, Tableau, and more.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-fuchsia-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:bg-fuchsia-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View Projects</a>  
                <a href="#contact" className="border border-fuchsia-500 text-fuchsia-500 py-3 px-6 rounded font-medium transition-all duration-300  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2) hover:bg-blue-500/10]">Contact Me</a>
            </div>
          </div>
        </RevealOnScroll>
    </section>
  );
};