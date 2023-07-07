<template>
   

    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div 
    v-for="testimonial in testimonials"
    :key="testimonial.id"
    :testimonial="testimonial">

    <div class="carousel-item m-6 p-6" :class="{active: testimonials.indexOf(testimonial) === 0
    }">
        <div class="row">
            <div class="col-5"> 
            <img :src="testimonial.image_url" class="d-block" :alt="testimonial.name">
        </div>
     
        <div class="col-4 par">
            <p>{{ testimonial.par }}</p>
            <p>~{{ testimonial.name }}</p>
        </div>
        </div>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   
</template>

<script>
export default {
    computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },

  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
}
</script>

<style scoped>
.row {
  height: 714px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 3rem;
}

img {
    height: 500px;
    width: auto;
    border-radius: 16px;
}

.carousel {
  margin: 4rem;
  padding: 2rem;
}

.carousel-inner {
  padding: 6rem;
}

@media only screen and (max-width: 359px) {
  img {
    height: 12rem;
    width: auto;
  }

  .carousel {
  margin: 10px;
  padding: 7px;
}

.carousel-inner {
  padding: 3rem;
  font-size: 10px;
}
}

@media only screen and (max-width: 470px) {
    img {
    height: 12rem;
    width: auto;
  }

  .carousel {
  margin: 11px;
  padding: 10px;
}

.carousel-inner {
  padding: 3rem;
  font-size: 11px;
}
}

@media only screen and (max-width: 670px) {
    img {
    height: 19rem;
    width: auto;
  }

  .carousel {
  margin: 11px;
  padding: 10px;
}

.carousel-inner {
  padding: 3rem;
  font-size: 14px;
}
}

@media only screen and (max-width: 770px) {
    img {
    height: 25rem;
    width: auto;
  }

  .carousel {
  margin: 11px;
  padding: 10px;
}

.carousel-inner {
  padding: 3rem;
  font-size: 14px;
}
}

@media only screen and (max-width: 990px) {
    img {
    height: 25rem;
    width: auto;
  }

  .carousel {
  margin: 11px;
  padding: 10px;
}

.carousel-inner {
  padding: 3rem;
  font-size: 14px;
}
}

@media only screen and (max-width: 1080px) {
    img {
    height: 25rem;
    width: auto;
  }

  .carousel {
  margin: 11px;
  padding: 10px;
}

.carousel-inner {
  padding: 3rem;
  font-size: 14px;
}
}
</style>