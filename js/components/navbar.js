document.getElementById("navbar-container").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light border-bottom py-3">
  <div class="row d-flex container px-5">
    <div class="col-12 col-lg-2">
      <a href="/">
        <img style="height:94px;" src="assets/logo.png">
      </a>
    </div>
    <div class="col-12 col-lg-8">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 small fw-bolder">
              <li class="nav-item"><a class="nav-link" href="whoarewe.html">Qui sommes nous?</a></li>
              <li class="nav-item"><a class="nav-link" href="courses.html">Cours</a></li>
              <li class="nav-item"><a class="nav-link" href="wines.html">Vins</a></li>
              <li class="nav-item"><a class="nav-link" href="sales.html">Ventes</a></li>
              <li class="nav-item"><a class="nav-link" href="https://example.com/">Réservation</a></li>
              <li class="nav-item"><a class="nav-link" href="contact.html">Contactez-nous</a></li>
          </ul>
      </div>
    </div>
    <div class="col-12 col-lg-2"></div>
  </div>
</nav> 
`;