import React from "react";

import './styles/work.css';

function Work() {
    return (
        <section className="work">
            <div className="main_heading">My Work : </div>
            <br></br>
            <div className="main_paragraph">I have developed a <b>QML plugin</b> for a <b>custom virtual keyboard</b>, utilizing a JSON file to manage all keyboard data, including dynamic key configurations and layout. The plugin also supports customizable styles, such as height, width, color, and other visual properties, allowing for a fully adaptable and responsive user interface. This solution is designed for seamless integration into applications, providing a flexible and user-friendly virtual keyboard experience.</div>
            <br></br>
            <iframe className="work_video" src="https://www.youtube.com/embed/yuiz-k32Oaw?si=vO65j48ycNbhgpXj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section >
    )
}

export default Work;