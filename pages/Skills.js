import React from 'react';
import '../pages/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'React', level: 75 },
    { name: 'JavaScript', level: 75 },
    { name: 'Node.js', level: 60 },
    { name: 'MongoDb', level: 50 },
    { name: 'SQL', level: 60 },
    { name: 'DevOps', level: 50 },
  ];

  return (
    <div className='skills-wrapper'>
      <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="circle" style={{ '--level': skill.level }}>
              <div className="box">
                <span>{skill.level}%</span>
              </div>
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Skills;
