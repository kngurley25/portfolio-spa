import React, { useState } from "react";
import Card from 'react-bootstrap/Card';

function Project() {
    
    const [projects] = useState([
        {
            title: 'Trippin Worldwide',
            url: 'https://trippin-worldwide.herokuapp.com/',
            github: 'https://github.com/kngurley25/trippin-worldwide'
        },
        {
            title: 'Welcome to Mars',
            url: 'https://kngurley25.github.io/astronomy-project/',
            github: 'https://github.com/kngurley25/astronomy-project'
        },
        {
            title: 'Tech Blog',
            url: 'https://still-citadel-59357.herokuapp.com/',
            github: 'https://github.com/kngurley25/tech-blog'
        },
        {
            title: 'Weather Dashboard',
            url: 'https://kngurley25.github.io/weather-dashboard/',
            github: 'https://github.com/kngurley25/weather-dashboard'
        }
    ]);

    return (
        <section>
            <h3>Portfolio</h3>
            <div className="portfolio-section">
                {projects.map((project, i) => (
                    <Card style={{ width: '25rem' }}>
                        <Card.Img src={require(`../../assets/images/projects/${i}.jpg`)} alt={project.title} key={project.title}></Card.Img>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Link href={project.url} target="_blank">Deployed</Card.Link>
                            <Card.Link href={project.github} target="_blank">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
           </div>
        </section>
    );
}

export default Project;