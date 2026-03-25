function Projects() {
  const projects = [
    {
      title: "Social Nest App",
      description:
        "A MERN stack social media platform where users can create posts, like, comment, and manage profiles.",
      tech: "React, Redux, Node.js, Express, MongoDB",
      github: "https://github.com/mohammad-yasser12/Social-Nest-.git",
    },
    {
      title: "SkillLink",
      description:
        "A community platform where skilled workers connect and share job opportunities with trusted people.",
      tech: "React, Node.js, Express, MongoDB",
      github: "https://github.com/yourgithub/skilllink",
    },
    {
      title: "Lets Chat App",
      description:
        "A real-time chat application where users can communicate with each other.",
      tech: "React, Node.js, Express, MongoDB",
      github: "https://github.com/mohammad-yasser12/Lets-Chat-App.git",
    },
  ];

  return (
    <section id="projects" style={{ padding: "60px", textAlign: "center" }}>
      <h2>My Projects</h2>

      <div style={{ marginTop: "30px" }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Tech:</strong> {project.tech}
            </p>

            <a href={project.github} target="_blank">
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;