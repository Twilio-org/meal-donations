$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault()
    $.ajax('/admin/broadcast', {
      method: 'POST',
      data: {
        message: $('#message').val(),
        type: $('#type').val(),
      }
    }).done(function(data) {
      alert('Messages sent.')
    }).fail(function(error) {
      console.log(error)
    })
  })
})