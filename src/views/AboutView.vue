<template>
  <div class="about">
    <h1 class="animate__animated animate__pulse animate__infinite infinite">
      About Me!
    </h1>
  </div>
  <div class="about-pop">
    <div class="about-sec" id="about">
      <div class="about-img animate__animated animate__zoomIn">
        <img
          src="https://i.postimg.cc/0QVkZ9x1/IMG20220917112942-removebg.png"
          alt="image"
          loading="lazy"
        />
      </div>
      <div class="about-text">
        <p>
          Strong academic background, recent TEFL and coding graduate, driven
          individual, with a love of teaching and coding. I'm eager to advance
          my career and help a vibrant organization. With a strong background in
          both coding and teaching English as a foreign language (TEFL), I have
          the critical thinking, problem-solving, and communication skills
          necessary for success in the workplace.
        </p>
        <p>
          I thrive in collaborative settings and am quite versatile and quick to
          pick things up. I collaborate well with teams to accomplish common
          objectives. I've improved my time management and organizational skills
          during my education, which enable me to effectively manage several
          assignments and adhere to deadlines.
        </p>
        <p>
          Seeking an entry-level position to put my academic understanding to
          use, obtain real-world experience, and hone my talents. I'm dedicated
          to having a significant effect in a professional context with a new
          viewpoint and a strong work ethic.
        </p>

        <button type="download-button">
          <a
            href="https://docs.google.com/document/d/1hpSLkc44evquOCJX0n0-1q7USR3zjrZb/edit?usp=sharing&ouid=107132493667870155573&rtpof=true&sd=true"
          >
            Download CV</a
          >
        </button>
      </div>
    </div>
  </div>

  <div class="row gap-2 m-4 extra-in">
    <div class="something">
      <div class="col-4 ment">
        <h1>Mentions</h1>

        <h4>Boland Collage SRC</h4>
        <p>Liason Officer</p>
        <p>Social Media Manager</p>
        <p>Events and Marketing</p>

        <h4>Forest Heights High</h4>
        <p>Top 10 (3 years)</p>
        <p>Newspaper (Photographer, Editor)</p>
      </div>
      <div class="col-4 ment">
        <h1>Hobbies</h1>

        <p>Reading</p>
        <p>Writing</p>
        <p>Gaming</p>
        <p>Computer Builds</p>
      </div>
      <div class="col-4 ment">
        <h1>Language</h1>

        <p>English</p>
        <p>Afrikaans</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about h1 {
  font-weight: bolder;
  font-size: 4rem;
  text-decoration: underline 2px solid #682a92;
  margin: 10px;
  margin-top: 3.5rem;
}

.about-sec {
  /* background: #4c494a; */
  border-radius: 50px;
  border-left: -50px;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  align-items: center;
  grid-gap: 5rem;
  margin-top: 58px;
  margin-bottom: 30px;
  padding: 2rem;
}

.about-img img {
  max-width: 100%;
  width: 680px;
  height: auto;
  border-radius: 10px;
}

button {
  margin-top: 2rem;
  text-decoration: none;
  position: relative;
  border: none;
  font-size: 14px;
  font-family: inherit;
  width: 9em;
  height: 3em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
}

button a {
  text-decoration: none;
  color: #10002b;
}

button:hover {
  animation: ani 8s linear infinite;
  border: none;
}

@keyframes ani {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

button:before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
}

button:hover::before {
  filter: blur(20px);
}

button:active {
  background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
}

.something{
  /* height: 650px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2rem;

}

.extra-in h1 {
  font-weight: bolder;
  font-size: 2.5rem;
  text-decoration: underline 2px solid #682a92;
  margin-top: 7rem;
}

.extra-in h4 {
  text-decoration: underline #f441a5;
}

.ment {
  height: 35rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}


</style>