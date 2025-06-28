/*!
        * Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
        * Copyright 2013-2025 Start Bootstrap
        * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
        */
    // Global javascript code that will be often used

// BS TOOLTIP
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
