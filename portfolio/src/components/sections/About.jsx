export const About = () => {
    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TailwindCSS",
        "Bootstrap",
        "jQuery",
    ];

    const backendSkills = [
        "Python",
        "Flask",
        "Django",
        "FastAPI",
        "Django REST Framework",
        "Node.js",
        "Express.js",
        "SQL",
        "PostgreSQL",
        "SQLite",
        "MongoDB",
        "MySQL",
        "SQLAlchemy",
    ];

    const dataScienceSkills = [
        "NumPy",
        "Pandas",
        "TensorFlow",
        "Scikit-learn",
        "Streamlit",
        "Tableau",
        "Plotly",
        "TensorFlow",
        "Jupyter Notebook",
    ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        {/* Skills Section */}
        <div className="max-w-3xl max-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-fuchsia-500 to-red-500 bg-clip-text text-transparent text-center">About Me</h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 text-lg mb-6">
                    Obsessed Pythonista, in love with Data Science, and a passionate advocate for Open Source. I am a Full Stack Software Developer, specialized in Predictive Analytics. I like building scalable and efficient applications, experimenting with new technologies, and working with data analytics, and visualization tools.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((skill, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((skill, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Data Science</h3>
                        <div className="flex flex-wrap gap-2">
                            {dataScienceSkills.map((skill, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
                {/* Education Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>B.S. in Theology</strong> - Catholic Faculty of Theology, Dakovo at University of J.J.Strossmayer, Osijek, Croatia [1997-2003]
                        </li>
                        <li>
                            <strong>Licence in Canon Law</strong> - Faculty of Canon Law at University of the Holy Cross, Rome, Italy [2007-2010].
                        </li>
                        <li>
                            <strong>PhD in Canon Law</strong> Faculty of Canon Law at University of Lateran, Rome, Italy [2010-2011].
                        </li>
                        <li>
                            <strong>Diploma in Full Stack Development with specialization in Predictive Analytics</strong> - Code Institute, Dublin, Ireland [2022-2024]. 
                        </li>
                        <li>
                            <strong>Certificates ...</strong> - ...  
                        </li>
                    </ul>
                </div>
                {/* Work Section */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">Full Stack Developer at Some Company [2020-2022]</h4>
                            <p>
                                Write something cool about your work experience here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold">Full Stack Developer at Some Company [2019-2020]</h4>
                            <p>
                                Write something cool about your work experience here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};