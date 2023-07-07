<template>
  <div id="education">
    <div class="container-fluid text-start p-4">
      <div class="content-hol">
        <div class="row">
          <div class="col mx-auto">
            <div class="timeline">
              <h1 class="head-text">Education</h1>
              <div class="right-line">
                <ul class="timeline-list">
                  <div
                    class="liss"
                    v-for="education in education"
                    :key="education.id"
                    :education="education"
                  >
                    <li>
                      <div class="date">{{ education.date }}</div>
                      <div class="title">{{ education.place }}</div>
                      <div class="descr">{{ education.certif }}</div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div class="col mx-4 my-4 skl">
            <h4 class="wes-h">Skills</h4>
            <h6 class="wes-h-h">Soft Skills</h6>
            <div class="img-d">
            <img src="https://i.postimg.cc/Hs3NBQGL/icons8-creative-thinking-64.png" alt="Creative Thinking" class=" svs animate__animated animate__pulse animate__infinite" loading="lazy">
            <img src="https://i.postimg.cc/25Bb0FtR/icons8-problem-solving-64.png" alt="Problem Solving" class="svs animate__animated animate__pulse animate__infinite" loading="lazy">
            <img src="https://i.postimg.cc/QxHTB3qd/icons8-leadership-48.png" alt="Leadership Skills" class="svs animate__animated animate__pulse animate__infinite" loading="lazy">
            <img src="https://i.postimg.cc/8cVwwCPD/icons8-critical-thinking-64.png" alt="Critical Thinking" class="svs animate__animated animate__pulse animate__infinite" loading="lazy">
            <img src="https://i.postimg.cc/9Qb7nYCr/icons8-resilience-64.png" alt="Resilience" class="svs animate__animated animate__pulse animate__infinite" loading="lazy">
            <img src="https://i.postimg.cc/sg1RS361/icons8-adaptable-64.png" alt="Adaptability" class="svs animate__animated animate__pulse animate__infinite" loading="lazy">
            </div>


            <h6 class="wes-h-h">Hard Skills</h6>
            <div class="lang">
              <div class="img-d">
              <img src="https://i.postimg.cc/5tzPhtNH/icons8-css-64.png" alt="css" class="svs animate__animated animate__pulse animate__infinite" loading="lazy">
              <img src="https://i.postimg.cc/tJzR2yVw/icons8-html5-64.png" alt="html" class="svs animate__animated animate__pulse animate__infinite	" loading="lazy">
              <img src="https://i.postimg.cc/pXTyqhqB/icons8-github-64-1.png" alt="git" class="svs animate__animated animate__pulse animate__infinite	" loading="lazy">
              <img src="https://i.postimg.cc/C1Q902p5/icons8-bootstrap-48.png" alt="bootstrap" class="svs animate__animated animate__pulse animate__infinite	" loading="lazy">
              <img src="https://i.postimg.cc/7LfSJtTS/icons8-figma-64.png" alt="Figma" class="svs animate__animated animate__pulse animate__infinite	" loading="lazy">
              <img src="https://i.postimg.cc/KYkmMtc1/icons8-photoshop-64.png" alt="Photoshop" class="svs animate__animated animate__pulse animate__infinite	" loading="lazy">
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
  },

  mounted() {
    this.$store.dispatch("fetchEducation");
  },
};
</script>

<style scoped>
.right-line {
  border-right: 3px solid #9d00ff;
}

.timeline {
  display: grid;
  align-content: center;
  gap: 32px;
  padding: 27px;
}

.head-text {
  text-align: center;
}

.liss {
  margin-bottom: 2rem;
}

.timeline-list {
  /* display: grid; */
  grid-template-columns: 4px 1fr;
  column-gap: 32px;
  list-style: none;
  width: min(960px, 90%);
  margin-inline: auto;
}

/* line */
.timeline-list::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: #9d00ff;
  border-radius: calc(4px / 2);
}

/* columns*/

/* row gaps */
.timeline-list li:not(:last-child) {
  margin-bottom: 32px;
}

/* card */
.timeline-list li {
  grid-column: 2;
  margin-inline: 24px;
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}

/* date */
.timeline-list li .date {
  height: 48px;
  margin-inline: calc(24px * -1);

  text-align: center;
  background-color: #b185db;

  color: azure;
  font-size: 20px;
  font-weight: 700;

  display: grid;
  place-content: center;
  position: relative;

  border-radius: calc(48px / 2) 0 0 calc(48px / 2);
}

/* date flap */
.timeline-list li .date::before {
  content: "";
  width: 24px;
  aspect-ratio: 1;
  background: #6247aa;
  position: absolute;
  top: 100%;

  clip-path: polygon(0 0, 100% 0, 0 100%);
  right: 0;
}

/* circle */
.timeline-list li .date::after {
  content: "";
  position: absolute;
  width: 20px;
  aspect-ratio: 1;
  border: 4.8px solid #5603ad;
  border-radius: 50%;
  top: 50%;

  transform: translate(50%, -50%);
  right: calc(100% + 32px + 4px / 2);
}

/* title descr */
.timeline-list li .title,
.timeline-list li .descr {
  position: relative;
  padding-inline: 24px;
}
.timeline-list li .title {
  overflow: hidden;
  padding-block-start: 24px;
  padding-block-end: 16px;
  font-weight: 500;
}
.timeline-list li .descr {
  padding-block-end: 24px;
  font-weight: 300;
}

/* shadows */
.timeline-list li .title::before,
.timeline-list li .descr::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 8px;
  background: rgba(0, 0, 0, 0.5);
  left: 50%;
  border-radius: 50%;
  filter: blur(4px);
  transform: translate(-50%, 50%);
}
.timeline-list li .title::before {
  bottom: calc(100% + 0.125rem);
}

.timeline-list li .descr::before {
  z-index: -1;
  bottom: 0.25rem;
}

@media (min-width: 40rem) {
  .timeline-list {
    grid-template-columns: 1fr 4px 1fr;
  }
  .timeline-list::before {
    grid-column: 2;
  }
  .timeline-list li:nth-child(odd) {
    grid-column: 1;
  }
  .timeline-list li:nth-child(even) {
    grid-column: 3;
  }

  /* start second card */
  .timeline-list li:nth-child(2) {
    grid-row: 2/4;
  }

  .timeline-list li:nth-child(odd) .date::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    left: 0;
  }

  .timeline-list li:nth-child(odd) .date::after {
    transform: translate(-50%, -50%);
    left: calc(100% + 32px + 4px / 2);
  }
  .timeline-list li:nth-child(odd) .date {
    border-radius: 0 calc(48px / 2) calc(48px / 2) 0;
  }
}

.row {
  gap: 3rem;
}

.skl {
  text-align: center;
  margin-top: 2rem;
}

.head-text {
  font-weight: bolder;
  font-size: 4rem;
  text-decoration: underline 2px solid #682a92;
  /* margin: 10px;
  margin-top: 3.5rem;
  margin-bottom: 4rem; */
}

.wes-h {
  font-weight: bolder;
  font-size: 4rem;
  text-decoration: underline 2px solid #682a92;
  /* margin: 10px;
  margin-top: 3.5rem;
  margin-bottom: 4rem; */
}

.wes-h-h {
  font-weight: bold;
  font-size: 2rem;
  color: #b185db;
  text-decoration: aqua underline 2px;
  margin: 2rem;
  margin-bottom: 4rem;
}

.svs {
  margin: 1rem;
}

.img-d {
  margin: 1rem;
  margin-bottom: 4rem;
}
</style>