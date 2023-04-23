import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="blue">Eddy Tan </span>
            originally from rainy
            <span className="blue"> Taipei, Taiwan</span>.
            <br />
            <br />
            When I'm not busy scribbling code, I like to keep things interesting
            by listening music, gaming like there's no tomorrow, and scouring
            the earth for rare vinyls...You could say I'm a collector, but
            instead of stamps or coins, I collect grooves and scratches.
          </p>
          <h3 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
            More about <strong className="blue">BeAR3yyy </strong> 👀
          </h3>
          <p style={{ textAlign: "justify" }}>
            My
            <span className="blue"> educational</span> background is rooted in
            <span className="blue"> CSIE</span> at NCHU in Taichung. 
            I found myself drawn to technology and coding since I entered high school.
            In my senior year, I have gained
            <span className="blue"> a half years </span>
            of experience working in a company in Brilltek (博睿科技), Taiwan as a
            Full Stack Intern. After that, I am a Full Stack Developer in Ideaxpress (艾創點數位有限公司). When I'm not typing away at my computer, you can
            find me flexing my unit testing muscles with Jest and Vitest, and
            slowly but surely, I'm becoming a TypeScript lover! (Well, I'm
            getting slowely there...) You may find more of my work on my GitHub
            profile.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
