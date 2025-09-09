import { useState, useEffect } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import placeholderImg from "../../assets/python-code.webp";

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/projects.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProjects(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section id="projects" className="min-h-screen flex items-center justify-center py-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-fuchsia-500 to-red-500 bg-clip-text text-transparent">Loading Projects...</h2>
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="projects" className="min-h-screen flex items-center justify-center py-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-red-500 bg-clip-text text-transparent">Error Loading Projects</h2>
                    <p className="text-red-400">{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-fuchsia-500 to-red-500 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Individual Projects */}
                        {projects.map((project) => {
                            return (
                                <div key={project.title} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <img src={project.image || placeholderImg} alt={project.title} className="w-full h-[50%] object-cover rounded-xl mb-4" />
                                    <p className="text-gray-200 mb-2">{project.description}</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        {project.skills.map((skill, skillIndex) => (
                                            <span key={`${project.title}-${skill}-${skillIndex}`} className="bg-blue-400/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-400/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                </div>
                                <div className="flex justify-between items-center my-2">
                                    <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors"><span class="hidden md:inline">View </span>Project  &rarr;</a>
                                    <a href={project.ghLink} className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"><span class="hidden md:inline">View </span>Source Code  &rarr;</a>
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