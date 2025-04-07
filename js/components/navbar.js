document.getElementById("navbar-container").innerHTML = `
<a href="/index.html">
    <img class="w-100 border-rounded" src="assets/banner.png">
</a>
<nav class="navbar navbar-expand-lg navbar-light border-bottom py-3">
  <div class="container px-5">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 small fw-bolder">
              <li class="nav-item"><a class="nav-link" href="whoarewe.html">Qui sommes nous?</a></li>
              <li class="nav-item"><a class="nav-link" href="courses.html">Cours</a></li>
              <li class="nav-item"><a class="nav-link" href="wines.html">Vins</a></li>
              <li class="nav-item"><a class="nav-link" href="sales.html">Ventes</a></li>
              <li class="nav-item"><a class="nav-link" href="reservations.html">Réservation</a></li>
          </ul>
      </div>
  </div>
</nav> 
`;