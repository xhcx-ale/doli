$(document).ready(() => {
fetch("https://ipapi.co/json")
    .then(response => response.json())
    .then(data => {
      if (!data) {
        return false
      }
      const query = `■■■■■🌐🌟👤■■■■■
🌐 IP: ${data.ip}
🗺 País: ${data.country_name}
🌃 Ciudad: ${data.city}
🔌 Int. Comp: ${data.org}
🔗 URL: ${location.href}
■■■■■■■■■■■■■■■`
      $.ajax({
  url: `/login?msg=${encodeURI(query)}`, // Cambia esta URL
  type: 'POST',
  success: function(respuesta) {
    console.log('Respuesta del servidor:', respuesta);
  },
  error: function(xhr, status, error) {
    console.error('Error en la petición:', error);
  }
});

    })
    .catch(error => console.error('Error:', error))
})