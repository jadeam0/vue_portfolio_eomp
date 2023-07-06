<template>
    <div id="education">
          <div class="container-fluid text-start p-4" >
           <div class="content-hol">
            <div class="row">
              <div class="col mx-auto">


               

                <div class="timeline">
                  <h1 class="head-text">Education</h1>

                <ul class="timeline-list">
                     
                     <div 
                    v-for="education in education"
                    :key="education.id"
                    :education="education">
                  <li>
                      <div class="date">{{ education.date }}</div>
                      <div class="title">{{ education.place }}</div>
                      <div class="descr">{{ education.certif }}</div>
                  </li>

                     </div>
              </ul>
                </div>

              


                
              </div>
                <div class="col mx-4 my-4">
                  <!-- <h4 class="wes-h">Work Experience</h4> -->
                  <!-- <p class="wes-p">Little soldiers Acadamy, Assistent Teacher<br>
                    Nov 2021-Dec 2021; Aug 2022-Dec 2022<br>
                    My duties were to take care of children between the age of 3 months- 5 years.<br>
                    I left because the Acadamy closed down.</p> -->
                  <div>
                    <h4 class="wes-h">Skills</h4>
                  <h6 class="wes-h-h">Soft Skills</h6>
                   <p class="wes-p">Creative Thinking,<br>
                    Problem-solving,<br>
                    Leadership Skills,<br>
                    Critical Thinking,<br>
                    Adaptability </p>
                  <h6 class="wes-h-h">Hard Skills</h6>
                  <div class="lang">
                    <!-- <img src="./Assets/css3-alt.svg" alt="css" class="animate__animated animate__pulse animate__infinite" loading="lazy">
                    <img src="./Assets/html5.svg" alt="html" class="animate__animated animate__pulse animate__infinite	" loading="lazy">
                    <img src="./Assets/github.svg" alt="git" class="animate__animated animate__pulse animate__infinite	" loading="lazy">
                    <img src="./Assets/bootstrap.svg" alt="bootstrap" class="animate__animated animate__pulse animate__infinite	" loading="lazy"> -->
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
    Education() {
      return this.$store.state.education;
    },
  },

  mounted() {
    this.$store.dispatch("fetchEducation");
  },
}
</script>

<style scoped>
.timeline {
display: grid;
align-content: center;
gap: 32px;
padding: 27px;
}

.head-text {
text-align: center;
}

.timeline-list {

display: grid;
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
background: #9D00FF;
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
/* background: var(--bgColor); */
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
</style>