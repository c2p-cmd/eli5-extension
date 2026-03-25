document.getElementById("save").onclick = () => {

    const apiUrl = document.getElementById("apiUrl").value
    const apiKey = document.getElementById("apiKey").value
    const model = document.getElementById("model").value

    chrome.storage.sync.set({
        apiUrl,
        apiKey,
        model
    }, () => {
        document.getElementById("status").innerText = "Saved!"
    })

}