function subscribe(event) {
  event.stopPropagation()
  event.preventDefault()
  // Submit the email

  var forms = $('form')
  var confirmed = $('#confirmed')

  $.ajax({
    url: '/api/subscribe',
    method: 'POST',
    body: JSON.stringify({email: 'abc.com'}),
    success: function() {
      console.log('YAY')
      forms.empty()
      forms.append(confirmed)
    },
    error: function(xhr, status, err) {
      console.log(status, err)
    }
  })
}
