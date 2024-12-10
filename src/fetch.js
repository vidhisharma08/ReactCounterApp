fetch('https://api.restful-api.dev/objects')
      .then(response => response.json())
      .then(json => console.log(json))