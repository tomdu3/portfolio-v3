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
                                <div key={project.title}>
                                    <h3 className="text-xl font-bold mb-2" id={`project-${project.title.replace(/\s+/g, '-').toLowerCase()}`}>{project.title}</h3>
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