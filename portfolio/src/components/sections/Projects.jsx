import { RevealOnScroll } from '../RevealOnScroll';
import placeholderImg from "../../assets/python-code.webp";
import { useState, useEffect } from 'react';
import projectsData from '../../projects.json';

export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-fuchsia-500 to-red-500 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Individual Projects */}
                        {projects.map((project, index) => {
                            return (
                                <div key={project.title} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    <h3 className="text-xl font-bold mb-2" id={`project-${project.title.replace(/\s+/g, '-').toLowerCase()}`}>{project.title}</h3>
                                    <div className="relative mb-4">
                                        <img src={project.image || placeholderImg} alt={project.title} className="w-full h-[50%] object-cover rounded-xl" />
                                        {!project.completed && (
                                            <div className="absolute bottom-2 right-2 bg-yellow-500 text-red-700 text-xs font-semibold px-2 py-1 rounded-md shadow-lg border border-yellow-500 bg-opacity-90 backdrop-blur-sm">
                                                WORK IN PROGRESS
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-gray-200 mb-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.skills.map((skill, key) => (
                                            <span key={`${index}-${skill}`} className="bg-blue-400/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-400/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                </div>
                                <div className="flex justify-between items-center my-2">
                                    <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors"><span className="hidden md:inline">View </span>Project  &rarr;</a>
                                    <a href={project.ghLink} className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"><span className="hidden md:inline">View </span>Source Code  &rarr;</a>
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