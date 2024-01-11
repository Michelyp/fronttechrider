<template>
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <img class="bd-placeholder-img" width="100%" height="100%" src="https://techriders.tajamar.es/wp-content/uploads/2023/02/cropped-image-8.png" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
        <div class="container py-5r">
          <div class="carousel-caption text-start">
            <h1 class="display-3 fw-bold">
              SOMOS TECH RIDERS
            </h1>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="bd-placeholder-img" width="100%" height="100%" src="https://techriders.tajamar.es/wp-content/uploads/2023/02/cropped-image-8.png" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
        <div class="container">
          <div class="carousel-caption">
            <div class="container">
          <div class="carousel-caption text-start">                                    
            <div class="d-flex gap-3 justify-content-center lead fw-normal">
              <ul class="list-group">
                <a class="icon-link list-group-item" href="#">
                Charlas técnicas, motivacionales o softskills para estudiantes de tecnología
                <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
              </a>
              <a class="icon-link list-group-item" href="#">
                Tutoriales sobre tecnología
                
              </a>
              <a class="icon-link list-group-item" href="#">
                Orientación y formación en tecnología
              </a>
            </ul>       
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <img class="bd-placeholder-img" width="100%" height="100%" src="https://techriders.tajamar.es/wp-content/uploads/2023/02/cropped-image-8.png" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
        <div class="container">
          <div class="carousel-caption text-end">
            <h3 class="fw-normal text-muted mb-3 mb-4">
              Pilotas tu propia carrera profesional tecnológica. Te formas y colaboras con otras personas. Trabajas en equipo. La tecnología no para; está siempre en marcha. Siempre te estás actualizando, actualizando. Eres un/a Tech Rider.
            </h3>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
  <div class="container m-3">
    <div class="row justify-content-start ">
        <div class="col-6">
          <div class=" h-100 p-5 text-bg-dark rounded-3 text-start" data-aos="slide-up">
          <h2>Particular</h2>
          <p>Si eres un/a profesional de la tecnología y quieres impartir una charla técnica o motivacional en un centro educativo.</p>
          <button class="btn btn-outline-light" type="button">Example button</button>
        </div>
      </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-6">
          <div class=" h-100 p-5 text-bg-dark rounded-3 text-start">
          <h2>Empresa</h2>
          <p>Si sois una empresa tecnológica y queréis impartir una charla técnica o motivacional en un centro educativo o de formación..</p>
          <button class="btn btn-outline-secondary" type="button">Example button</button>
        </div>
      </div>
      </div>
      <div class="row justify-content-start">
        <div class="col-6"  data-aos="fade-up" data-aos-anchor-placement="center-center">
          <div class=" h-100 p-5 text-bg-dark rounded-3 text-start">
            <h2>Centro Formador</h2>
            <p>Si eres un centro de formación y quieres solicitar una charla técnica, motivacional o softskills para tus estudiantes de la rama de tecnología.</p>
            <button class="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style>

</style>