import { RevealOnScroll } from '../RevealOnScroll';
import placeholderImg from "../../assets/python-code.webp";
import { useId } from 'react';

export const Projects = () => {
    const id = useId();
    const projects = [
  {
    "title": "Books for Life",
    "description": "Description of the project",
    "image": "https://github.com/tomdu3/books-for-life/raw/main/docs/images/amiresponsive.png",
    "skills": ["Python", "Django", "Html", "CSS", "JavaScript", "Bootstrap", "jQuery", "PostgreSQL", "Vercel"],
    "link": "https://books-for-life.vercel.app/",
    "ghLink": "https://github.com/tomdu3/books-for-life",
    "completed": true
  },
  {
    "title": "Brain Tumor Detector",
    "description": "Data science and machine learning project with online dashboard. It detects a possible brain tumor from an MRI scan.",
    "image": "https://github.com/tomdu3/brain-tumor-detector/raw/main/assets/readme_images/amiresponsive.png",
    "skills": ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "TensorFlow", "Keras Tuner", "Scikit-learn", "Streamlit"],
    "link": "https://brain-tumor-detector.tomdcoding.net",
    "ghLink": "https://github.com/tomdu3/brain-tumor-detector",
    "completed": true
  },
  {
    "title": "Out and About",
    "description": "Interactive Wolrd Map of Pride Events. Hackathon June 2023. First place",
    "image": "https://github.com/tomdu3/out-and-about/raw/main/docs/amiresponsive.png",
    "skills": ["Python", "Flask", "HTML", "CSS", "JavaScript", "TailwindCSS", "PostgreSQL", "Vercel"],
    "link": "https://out-and-about-five.vercel.app/",
    "ghLink": "https://github.com/tomdu3/out-and-about",
    "completed": true
  },
  {
    "title": "Hungry Hippo",
    "description": "Hungry Hippo - Chingu Voyage 50 Contribution - Team 21 - A food delivery service web application.",
    "image": "https://raw.githubusercontent.com/chingu-voyages/v50-tier3-team-21/development/docs/Title.png",
    "skills": ["React", "TailwindCSS", "TypeScript", "NodeJS", "Express.js", "PostgreSQL", "JavaScript"],
    "link": "https://hungryhippo-tgrams.onrender.com/",
    "ghLink": "https://github.com/tomdu3/hungry-hippo",
    "completed": true
  },
  {
    "title": "Movie Db App",
    "description": "A simple movie search database react app",
    "image": "https://github.com/tomdu3/movie-app/raw/main/docs/amiresponsive.png",
    "skills": ["HTML", "CSS", "JavaScript", "TailwindCSS", "React", "Netlify"],
    "link": "https://tom-movie-db.netlify.app/",
    "ghLink": "https://github.com/tomdu3/movie-app",
    "completed": true
  },
  {
    "title": "Smiley Memories",
    "description": "A simple smiley memories game app",
    "image": "https://github.com/tomdu3/smiley-memories/raw/main/assets/readme_files/amiresponsive.png",
    "skills": ["HTML", "CSS", "JavaScript"],
    "link": "https://tomdu3.github.io/smiley-memories/",
    "ghLink": "https://github.com/tomdu3/smiley-memories",
    "completed": true
  },
  {
    "title": "Todo App",
    "description": "A simple todo app in Flask with user authentication",
    "image": "https://github.com/tomdu3/todo-flask/raw/main/docs/todo-flask.png",
    "skills": ["Python", "Flask", "HTML", "CSS", "JavaScript", "PostgreSQL"],
    "link": "https://https://todo.tomdcoding.net/",
    "ghLink": "https://github.com/tomdu3/todo-flask",
    "completed": false
  },
  {
    "title": "Blog Project",
    "description": "A simple blog project in Next.js as frontend, FastAPI as backend, and Notion as CMS",
    "image": "https://github.com/tomdu3/blog-project/raw/main/docs/blog-project.png",
    "skills": ["JavaScript", "Next.js", "Python", "FastAPI", "Notion", "TailwindCSS"],
    "link": "https://blog-project.tomdcoding.net/",
    "ghLink": "https://github.com/tomdu3/blog-project",
    "completed": false
  },
  {
    "title": "Flask Expense Tracker",
    "description": "Simple expense tracker app built with Flask with Dashboard for data visualization",
    "image": "https://github.com/tomdu3/flask-expense/raw/main/docs/flask-expense.png",
    "skills": ["Python", "Flask", "HTML", "CSS", "Tailwind", "JavaScript", "Chart.js", "PostgreSQL"],
    "link": "https://budget.tomdcoding.net/",
    "ghLink": "https://github.com/tomdu3/flask-expense",
    "completed": false
  },
  {
    "title": "Emily Math",
    "description": "A website for kids to practice math skills",
    "image": "https://github.com/tomdu3/emily-math/raw/main/docs/emily-math-responsive.png",
    "skills": ["HTML", "CSS", "JavaScript", "Firebase"],
    "link" : "https://emily-math.web.app/",
    "ghLink": "https://github.com/tomdu3/emily-math",
    "completed": false
  },
  {
    "title": "Closeted Coders AI Chat",
    "description": "An AI chat web app for neurodivergent coders to get coding help in a safe space",
    "image": "https://github.com/tomdu3/nextjs-a--chatbot/raw/main/readme_files/screenshot.png",
    "skills": ["JavaScript", "Next.js", "TailwindCSS", "OpenAI", "Vercel"],
    "link": "https://closeted-coders-ai-chat.vercel.app/",
    "ghLink": "https://github.com/tomdu3/nextjs-a--chatbot",
    "completed": false
  },
  {
    "title": "TomiStore E-Commerce Cart App",
    "description": "A simple mock e-commerce cart app built with React and TailwindCSS",
    "image": "https://github.com/tomdu3/ecommerce-cart/raw/main/docs/amiresponsive.png",
    "skills": ["HTML","CSS", "JavaScript", "React", "Tailwind", "Netlify"],
    "link": "https://tomi-store.netlify.app/",
    "ghLink": "https://github.com/tomdu3/ecommerce-cart",
    "completed": true
  },
  {
    "title": "Income Expense Calculator",
    "description": " A simple web application to track your income and expenses with full CRUD functionality",
    "image": "https://github.com/tomdu3/income-expense-tracker/raw/main/assets/docs/amiresponsive.png",
    "skills": ["HTML", "CSS", "JavaScript", "Tailwind", "Local Storage"],
    "link": "https://tom-budget-tracker.netlify.app/",
    "ghLink": "https://github.com/tomdu3/income-expense-tracker",
    "completed": true
  },
  {
    "title": "Tom's Memory Game",
    "description": "A simple memory game web application",
    "image": "https://github.com/tomdu3/tom-memory-game/raw/main/assets/docs/amiresponsive.png",
    "skills": ["HTML", "CSS", "JavaScript", "Netlify"],
    "link": "https://tom-memory.netlify.app/",
    "ghLink": "https://github.com/tomdu3/tom-memory-game",
    "completed": true
  },
  {
    "title": "Travel Agency Landing Page",
    "description": "A simple HTML and CSS landing page for a travel agency",
    "image": "https://github.com/tomdu3/travel-agency/raw/main/docs/amiresponsive.png",
    "skills": ["HTML", "CSS"],
    "link": "https://tom-travel-agency.netlify.app/",
    "ghLink": "https://github.com/tomdu3/travel-agency",
    "completed": true
  },
  {
    "title": "Tom's Course Hub",
    "description": "A static website designed as a mockup of a webpage to showcase and promote online courses",
    "image": "https://github.com/tomdu3/course-hub/raw/main/docs/amiresponsive.png",
    "skills": ["HTML", "CSS", "JavaScript", "Tailwind", "Netlify"],
    "link": "https://tom-courses-hub.netlify.app/",
    "ghLink": "https://github.com/tomdu3/course-hub",
    "completed": true
  }
] ;

    return (
        <section id={id} className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-fuchsia-500 to-red-500 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Individual Projects */}
                        {projects.filter(p => p.completed).map((project, index) => {
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