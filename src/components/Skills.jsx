function Skills() {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind CSS","SQL","Node.js","Bootstrap"],
    backend: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT Authentication","PostgreSQL"],
    tools: ["Git", "GitHub","GitLab","Docker","REST APIs", "VS Code", "Postman","JWT"]
  };

  return (
    <section id="skills" style={{ padding: "60px", textAlign: "center" }}>
      <h2>My Skills</h2>

      <div style={{ marginTop: "30px" }}>
        
        <h3>Frontend</h3>
        {skills.frontend.map((skill, index) => (
          <span
            key={index}
            style={{
              margin: "8px",
              padding: "8px 15px",
              border: "1px solid #ddd",
              borderRadius: "20px",
              display: "inline-block"
            }}
          >
            {skill}
          </span>
        ))}

        <h3 style={{ marginTop: "30px" }}>Backend</h3>
        {skills.backend.map((skill, index) => (
          <span
            key={index}
            style={{
              margin: "8px",
              padding: "8px 15px",
              border: "1px solid #ddd",
              borderRadius: "20px",
              display: "inline-block"
            }}
          >
            {skill}
          </span>
        ))}

        <h3 style={{ marginTop: "30px" }}>Tools</h3>
        {skills.tools.map((skill, index) => (
          <span
            key={index}
            style={{
              margin: "8px",
              padding: "8px 15px",
              border: "1px solid #ddd",
              borderRadius: "20px",
              display: "inline-block"
            }}
          >
            {skill}
          </span>
        ))}

      </div>
    </section>
  );
}

export default Skills;