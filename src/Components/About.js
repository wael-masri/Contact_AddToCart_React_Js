import React from 'react'

const About = (props) => {

   // console.log(props.match.params.id);
    return (
        <div>
            <h2>About Us</h2>
            <span>id: {props.match.params.id}</span>
        </div>
    )
}

export default About
