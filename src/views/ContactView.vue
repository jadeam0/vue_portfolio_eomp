<template>
    <div class="container-fluid mx-auto  p-5 border border-black border rounded-3 w-75 cont-frm" id="form">
            <form action="https://formspree.io/f/xpzekzqg" method="POST" class="contact">
                <legend class="text-center fw-bold mb-5" id="con-lab">Get in Contact</legend><br>
                <div class="row">
                    <div class="col">
                        <label for="first name">First name</label>
                      <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                    </div>
                    <div class="col">
                        <label for="last name">Last name</label>
                      <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                    </div>
                </div>
                <br>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <br>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="cont-btn">
                  <button type="submit" class="btn">Submit</button>
                </div>
            </form>
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.form-control {
resize: none;
}

button {
  text-decoration: none;
  position: relative;
  border: none;
  font-size: 14px;
  font-family: inherit;
  width: 9em;
  height: 3em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
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
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
}

button:hover::before {
  filter: blur(20px);
}

button:active {
  background: linear-gradient(32deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
}

.text-center{
    text-decoration: underline 2px solid #682a92 !important;
    font-size: 3.5rem;
}

.cont-btn {
    margin-top: 3rem;
}

#form {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);

  margin-top: 5rem;
  margin-bottom: 4rem;
}
</style>