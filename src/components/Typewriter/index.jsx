'use client';

import Typewriter from "typewriter-effect";

export default function MyTypewriter({ contents }) {
    return (
        <Typewriter
            options={{
                strings: contents,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}
