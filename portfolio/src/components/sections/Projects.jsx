import { RevealOnScroll } from '../RevealOnScroll';
import placeholderImg from "../../assets/python-code.webp";

export const Projects = () => {
    const projects = [
        {
            title: "Books for Life",
            description: "Description of the project",
            image: "https://github.com/tomdu3/books-for-life/raw/main/docs/images/amiresponsive.png",
            skills: ["Python", "Django", "Html", "CSS", "JavaScript", "Bootstrap", "jQuery", "PostgreSQL", "Heroku"],
            link: "https://books-4-life-2d26bdf04dec.herokuapp.com/",
            ghLink: "https://github.com/tomdu3/books-for-life",
        },
        {
            title: "Brain Tumor Detector",
            description: "Data science and machine learning project with online dashboard. It detects a possible brain tumor from an MRI scan.",
            image: "https://github.com/tomdu3/brain-tumor-detector/raw/main/assets/readme_images/amiresponsive.png",
            skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "TensorFlow", "Keras Tuner", "Scikit-learn", "Streamlit", "Heroku"],
            link: "https://brain-tumor-detector-e5d30222dbc4.herokuapp.com/",
            ghLink: "https://github.com/tomdu3/brain-tumor-detector",
        },
        {
            title: "Out and About",
            description: "Interactive Wolrd Map of Pride Events. Hackathon June 2023. First place",
            image: "https://github.com/tomdu3/out-and-about/raw/main/docs/amiresponsive.png",
            skills: ["Python", "Flask", "HTML", "CSS", "JavaScript", "TailwindCSS", "PostgreSQL", "Vercel"],
            link: "https://out-and-about-five.vercel.app/",
            ghLink: "https://github.com/tomdu3/out-and-about",
        },
        {
            title: "Hungry Hippo",
            description: "Hungry Hippo - Chingu Voyage 50 Contribution - Team 21 - A food delivery service web application.",
            image: "https://raw.githubusercontent.com/chingu-voyages/v50-tier3-team-21/development/docs/Title.png",
            skills: ["React", "TailwindCSS", "TypeScript", "NodeJS", "Express.js", "PostgreSQL", "JavaScript"],
            link: "https://hungryhippo-tgrams.onrender.com/",
            ghLink: "https://github.com/tomdu3/hungry-hippo",
        },
        {
            title: "Movie Db App",
            description: "A simple movie search database react app",
            image: "https://github.com/tomdu3/movie-app/raw/main/docs/amiresponsive.png",
            skills: ["HTML", "CSS", "JavaScript", "TailwindCSS", "React", "Netlify"],
            link: "https://tom-movie-db.netlify.app/",
            ghLink: "https://github.com/tomdu3/movie-app",
        },
        {
            title: "Smiley Memories",
            description: "A simple smiley memories game app",
            image: "https://github.com/tomdu3/smiley-memories/raw/main/assets/readme_files/amiresponsive.png",
            skills: ["HTML", "CSS", "JavaScript"],
            link: "https://tomdu3.github.io/smiley-memories/",
            ghLink: "https://github.com/tomdu3/smiley-memories",
        },
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-fuchsia-500 to-red-500 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Individual Projects */}
                        {projects.map((project, index) => {
                            return (
                                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    <h3 className="text-xl font-bold mb-2" id={`project-${index}`}>{project.title}</h3>
                                    <img src={project.image || placeholderImg} alt="Project Image" className="w-full h-[50%] object-cover rounded-xl mb-4" />
                                    <p className="text-gray-400 mb-2">{project.description}</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        {project.skills.map((skill, key) => (
                                            <span key={key} className="bg-blue-400/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-400/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                </div>
                                <div className="flex justify-between items-center my-2">
                                    <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors">View Project  &rarr;</a>
                                    <a href={project.ghLink} className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">View Source Code  &rarr;</a>
                                </div>
                            </div>
                            )
                        }
                        )}

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}