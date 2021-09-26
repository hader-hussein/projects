(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  $('.field .glyphicon').on('click', function() {
    var attr =
      $(this)
        .prev()
        .attr('type') == 'password'
        ? 'text'
        : 'password';
    $(this)
      .prev()
      .attr('type', attr);
    $(this).toggleClass('active');
  });
  /**forget-password**/
  $('#forget-number').click(function(e){
    e.preventDefault()
  
    $('.forget-password-number').attr("hidden",true);
  $('.Confirmation-code').removeAttr('hidden');
  });
  /**** */
  $('#Confirmation-code-phon').click(function(e){
    e.preventDefault()
  
    $('.Confirmation-code').attr("hidden",true);
  $('.Confirmation-code-number').removeAttr('hidden');
  });
  $('#paginate3').click(function(e){
    e.preventDefault()
    
 
 $('.component-table').removeAttr('hidden');
 

});
$(document).ready(function() {
  $(document).on('click', '.nav-item a', function (e) {
      $(this).parent().addClass('active').siblings().removeClass('active');
  });
})