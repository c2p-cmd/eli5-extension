// ── Provider Presets ──
const PROVIDERS = {
  featherless: {
    apiUrl: "https://api.featherless.ai/v1",
    model: "zai-org/GLM-5",
    name: "Featherless AI"
  },
  openai: {
    apiUrl: "https://api.openai.com/v1",
    model: "gpt-4",
    name: "OpenAI"
  },
  ollama: {
    apiUrl: "http://localhost:11434/v1",
    model: "llama2",
    name: "Ollama"
  },
  openrouter: {
    apiUrl: "https://openrouter.ai/api/v1",
    model: "openai/gpt-3.5-turbo",
    name: "OpenRouter"
  }
};

// ── DOM Elements ──
const apiUrlInput = document.getElementById("apiUrl");
const apiKeyInput = document.getElementById("apiKey");
const modelInput = document.getElementById("model");
const saveBtn = document.getElementById("save");
const testBtn = document.getElementById("test-btn");
const statusDiv = document.getElementById("status");

// ── Load existing settings on page load ──
chrome.storage.sync.get(["apiUrl", "apiKey", "model"], (settings) => {
  if (settings.apiUrl) apiUrlInput.value = settings.apiUrl;
  if (settings.apiKey) apiKeyInput.value = settings.apiKey;
  if (settings.model) modelInput.value = settings.model;
});

// ── Preset button handlers ──
document.querySelectorAll(".preset-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const provider = PROVIDERS[btn.dataset.provider];
    apiUrlInput.value = provider.apiUrl;
    modelInput.value = provider.model;
    
    // Don't clear API key when switching presets
    showStatus(`Preset loaded: ${provider.name}. Don't forget to add your API key!`, "info");
  });
});

// ── Save button handler ──
saveBtn.addEventListener("click", () => {
  const apiUrl = apiUrlInput.value.trim();
  const apiKey = apiKeyInput.value.trim();
  const model = modelInput.value.trim();

  // Validation
  if (!apiUrl) {
    showStatus("❌ API URL is required", "error");
    return;
  }

  if (!model) {
    showStatus("❌ Model name is required", "error");
    return;
  }

  // Validate URL format
  try {
    new URL(apiUrl);
  } catch (e) {
    showStatus("❌ Invalid URL format", "error");
    return;
  }

  // Save to chrome storage
  chrome.storage.sync.set({ apiUrl, apiKey, model }, () => {
    showStatus("✅ Settings saved successfully!", "success");
    
    // Auto-hide success message after 3 seconds
    setTimeout(() => {
      statusDiv.textContent = "";
      statusDiv.className = "status";
    }, 3000);
  });
});

// ── Test connection button handler ──
testBtn.addEventListener("click", async () => {
  const apiUrl = apiUrlInput.value.trim();
  const apiKey = apiKeyInput.value.trim();
  const model = modelInput.value.trim();

  if (!apiUrl || !model) {
    showStatus("❌ Please fill in API URL and Model before testing", "error");
    return;
  }

  testBtn.disabled = true;
  showStatus("🔄 Testing connection...", "info");

  try {
    const headers = {
      "Content-Type": "application/json"
    };
    
    if (apiKey) {
      headers["Authorization"] = `Bearer ${apiKey}`;
    }

    const res = await fetch(`${apiUrl}/chat/completions`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: "Hi" }],
        max_tokens: 10
      })
    });

    if (res.ok) {
      showStatus("✅ Connection successful! Your settings work.", "success");
    } else {
      const data = await res.json();
      showStatus(`❌ API Error (${res.status}): ${data?.error?.message || "Unknown error"}`, "error");
    }
  } catch (error) {
    showStatus(`❌ Connection failed: ${error.message}`, "error");
  } finally {
    testBtn.disabled = false;
  }
});

// ── Helper function to show status messages ──
function showStatus(message, type) {
  statusDiv.textContent = message;
  statusDiv.className = `status status-${type}`;
}
