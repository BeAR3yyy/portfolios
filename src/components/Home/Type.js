import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Full Stack Developer ",
                    "Open Source Contributor ",
                    "Indie Music Lover ",
                    "FPS / Moba Gamer ",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
