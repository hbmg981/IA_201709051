function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states) {
    let status_count = 0;

    function iteration() {
        if (status_count >= 8) return; // Salir si ya se han hecho 8 iteraciones

        var location = states[0];
        var state = location == "A" ? states[1] : states[2];
        var action_result = reflex_agent(location, state);
        document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);

        if (action_result == "CLEAN") {
            if (location == "A") states[1] = "CLEAN";
            else if (location == "B") states[2] = "CLEAN";
        } else if (action_result == "RIGHT") {
            states[0] = "B";
        } else if (action_result == "LEFT") {
            states[0] = "A";
        }

        status_count += 1;
        setTimeout(iteration, 2000);
    }

    iteration(); // Iniciar la primera iteración
}

var states = ["A", "DIRTY", "DIRTY"];
test(states);
