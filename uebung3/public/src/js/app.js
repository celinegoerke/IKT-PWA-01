var button = document.querySelector('#start-button');
var output = document.querySelector('#output');

button.addEventListener('click', function () {
    // Erzeugen Sie sich hier ein Promise-Objekt und fuegen die
    // setTimeout-Funktion in die Funktion, die dem Konstruktor uebergeben wird

    fetch("https://httpbin.org/get", {
        method: "GET"
    })
        .then((res) => {
            if (res.ok) {
                res.json().then((json) => {
                    document.getElementById("responseget").innerHTML = JSON.stringify(json.origin, null, 2);
                });
            } else {
                console.log("error", res);
            }
        });

    const someData = {
        url: "https://freiheit.f4.htw-berlin.de/ikt/uebungen/",
        name: "Celine Goerke"
    }

    fetch('https://httpbin.org/put', {
        method: 'PUT',
        body: JSON.stringify(someData),
    })
        .then(response => response.json())
        .then(data => document.getElementById("responseput").innerHTML = JSON.stringify(data.json.url, null, 2))

    fetch('https://httpbin.org/pu1t', {
        method: 'PUT',
        body: JSON.stringify(someData),
    })
        .then(response => response.json())
        .then(data => document.getElementById("responseput").innerHTML = JSON.stringify(data.json.url, null, 2))
        .catch(error => console.log("an expected error occured: " + error))

    // Teil 2:


    // Wiederholen Sie diese Uebung mit einem PUT request an
    // diese url: https://httpbin.org/put

    // dazu müssen Sie nun die Methode dem fetch()-Aufruf angeben
    // ausserdem muss fuer headers jetzt auch der Content-Type und Accept
    // angegeben werden (jeweils 'application/json')

    // Sie koennen ein beliebiges JSON senden (body), es wird einfach gespiegelt
    // wichtig ist nur, dass Sie die Eigenschaften kennen, damit Sie auf die
    // Werte zugreifen koennen --> uebergeben Sie einen oder mehrere Werte
    // an das output-Element

    // Teil 3:

    // fuegen Sie irgendwo einen Fehler ein, so dass die Anfrage nicht
    // erfolgreich ist (z.B. einfach die Url aendern)
    // Behandeln Sie diesen Fehler (einmal als zweites Argument von then()
    // und einmal mit catch() --> einfach Ausgabe auf Konsole)
});