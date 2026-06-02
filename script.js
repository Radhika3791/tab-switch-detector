const logs = document.getElementById("logs");

function addLog(message) {
    const li = document.createElement("li");
    li.textContent = message;
    logs.appendChild(li);
}

async function sendLog(data) {
    try {
        const response = await fetch(
            "http://localhost:3000/log",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.error("Fetch Error:", error);
    }
}

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        const data = {
            tab_switched: true,
            timestamp: new Date().toISOString()
        };

        addLog("Tab Switched");

        sendLog(data);
    }
});