fetch ("https://api.artic.edu/api/v1/artworks/search?params=%7B%22q%22%3A%22cats%22%2C%22query%22%3A%7B%22term%22%3A%7B%22is_public_domain%22%3Atrue%7D%7D%7D")
    .then ((response) => {
        return response.json();
    })
    .then ((lists) => {
        console.log ("Lists: ", lists);

    })
    .catch ((error) => {
        console.error("Error", error);
    });