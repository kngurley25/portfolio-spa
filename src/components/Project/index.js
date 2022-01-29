import React, { useState } from "react";

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
    ])
}

export default Project;