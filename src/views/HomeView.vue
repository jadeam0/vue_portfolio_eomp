<template>
<div class="home p-0 m-0">
  <div class="home-text animate__animated animate__lightSpeedInLeft " loading="lazy">
    <div class="glass-box">
      <h4>Hi, my name is</h4>
      <h1>Jadee <span>Paulse</span></h1>
      <h3>I am an aspiring Web Developer</h3>
    </div>
 </div>
</div>
</template>

<script>
// @ is an alias to /src
export default {
  
}
</script>

<style scoped>
.home {
  height: 714px;
  /* width: 100%; */
  /* margin-top: 4px; */
  background-image: url();
  background-size: cover;
  background-position: top;
  margin-bottom: 40px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(1,1fr);
  align-items: center;
}

.glass-box {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);

  font-size: 40px;
  margin-bottom: 55px;

  display: inline-block;
  padding: 7rem;
  
}

.home-text h1{
  margin: 20px 0px 20px;
  letter-spacing: 1.5px;
  font-weight: bolder;
  font-size: 70px;
  text-shadow: 0px 0px 6px #9D00FF, 0px 0px 14px #000;
}

span {
  color: #1f1c1d;
  text-shadow: 0px 0px 0px #000, 0px 0px 12px #9D00FF;
}

.home-text h3 {
  font-size: 33px;
  margin-bottom: 55px;
}

.home-text h4{
  color: #1c1c1c;
  font-size: 30px;
  letter-spacing: 2px;
}
</style>