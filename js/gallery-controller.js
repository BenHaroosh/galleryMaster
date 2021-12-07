'use strict'

$(document).ready(init);

function init() {
  $('.nav-contact').click(onOpenContact)
  $('.btn-submit').click(onDirectEmail)
  renderProj()
}

function renderProj() {
  var projs = getProjs()

  const strHtml = projs.map(function (proj) {
    return `
        <div class="col-md-4 col-sm-6 portfolio-item">
              <a onclick="renderModal('${proj.id}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img  class="img-fluid" src="img/${proj.img}" alt="">
              </a>
              <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">${proj.title}</p>
              </div>
            </div>
        `
  }).join('')

  $('.inner-container').html(strHtml)

}
function renderModal(projId) {
  console.log(projId);
  const proj = findProj(projId)

  const strHtml = `
    <div class="row">
    <div class="col-lg-8 mx-auto">
      <div class="modal-body">
        <!-- Project Details Go Here -->
        <h2>${proj.name}</h2>
        <p class="item-intro text-muted">${proj.title}</p>
        <img class="img-fluid d-block mx-auto" src="img/${proj.img}" alt="">
        <p>${proj.desc}</p>
        <ul class="list-inline">
          <li>Date: ${new Date(proj.publishedAt)}</li>
          <li>Category: Ben Haroosh's Projects</li>
        </ul>
        <button onclick="onMoveToGit('${proj.url}')" class= "btn btn-link"> Take Me
        There! </button>

        <button class="btn btn-primary" data-dismiss="modal" type="button">
          <i class="fa fa-times"></i>
         Close Project</button>

      </div>
    </div>
  </div>
  `

  $('.modal-container').html(strHtml)

}

function onDirectEmail() {
  var $emailTxt = $('#email').val()
  var $subjectTxt = $('#subject').val()
  var $messageTxt = $('#message-body').val()

  if ($emailTxt && $subjectTxt && $messageTxt) {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${$emailTxt}&su=${$subjectTxt}&body=${$messageTxt}`)
    
    $('#email').val('')
    $('#subject').val('')
    $('#message-body').val('')
  }
}

function onMoveToGit(projUrl) {
  window.location.href = projUrl
}

function onOpenContact(){
openCanvas()
}

