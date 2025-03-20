console.log("%c SYSTEM ONLINE... ", "color: yellow; background: black; font-family: monospace;");
setTimeout(() => console.log("%c WARNING: Unauthorized access detected! ", "color: red; background: black; font-family: monospace;"), 1000);
setTimeout(() => console.log("%c Decrypting hidden message... ", "color: cyan; font-family: monospace;"), 2000);
setTimeout(() => console.log("%c Success! Secret unlocked: A????", "color: green; font-family: monospace;"), 3000);
setTimeout(() => console.log("%c01000001 00110101 00110101 01000001 00110001 00110101 01000001 00111001 00111001 01000001 00110111 00110010 01000001 00110000 00111001 01000001 00110110 00110000 00111001 01000001", "color: lime; font-weight: bold;"), 3500);
setTimeout(() => console.log("%c Send: La Donna è Mobile", "color: green; font-family: monospace;"), 4000);
setTimeout(() => {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            console.log("%c IP public decoded: ", "color: cyan; font-weight: bold;", data.ip);

            const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScyNoEshtVO9eVy91NzJV0dV-1gG_VlLTid4XGZge8NBDkG9A/formResponse";

            const formData = new FormData();
            formData.append("entry.1965474002", data.ip); 

            console.log("%c Sending IP to N.O.B.O.D.Y. ... ", "color: yellow; background: black; font-family: monospace;");

            fetch(googleFormUrl, {
                method: "POST",
                body: formData,
                mode: 'no-cors',  // Adicionando no-cors
            })
            .then(() => console.log("%c Data submitted successfully!", "color: green; font-family: monospace;"))
            .catch((error) => console.log("%c ERROR: Unable to submit data.", "color: red; font-family: monospace;"));
        })
        .catch(error => {
            console.log("%c ERROR: Unable to retrieve IP data.", "color: red; font-family: monospace;");
        });
}, 5000);