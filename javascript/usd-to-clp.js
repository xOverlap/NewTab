function conversor() {
    const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "7fff036ef7msh436a4865aa48844p14ec0djsn13768417dd06",
        "X-RapidAPI-Host": "google-finance4.p.rapidapi.com",
    },
    };

    fetch(
      "https://google-finance4.p.rapidapi.com/ticker/?t=USD-CLP&hl=es&gl=ES",
      options
    )
      .then((response) => response.json())
      .then(
        (response) =>
          (document.getElementById("converter").innerHTML = "&nbsp;$" + Math.round(response["price"]["last"]["value"]))
      );

    function display() {
        document.getElementById("usd-clp").style.display = "flex";
    }
    setTimeout(display, 2000);
}

conversor();