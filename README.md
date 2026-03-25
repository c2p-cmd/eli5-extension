# 🧠 SmolBrain - Chrome Extension

> **Internet, but simpler**

Transform complex web content into easy-to-understand explanations using your own AI provider. Perfect for research papers, technical docs, legal documents, and dense articles.

![SmolBrain Demo](./images/Screenshot%202026-03-16%20at%2020.23.31.png)

## ✨ Features

### 🎯 Multiple Explanation Modes

- **Smol Mode**: Simplest possible explanation for beginners
- **Teacher Mode**: Step-by-step explanations with examples
- **TLDR Mode**: Quick 3-bullet point summaries
- **ELI5 Mode**: Ultra-simple explanations using basic vocabulary

### 💬 Interactive Chat

- Get instant AI-powered explanations of any webpage
- Ask follow-up questions about the content
- Maintain conversation context throughout your session
- Beautiful typewriter animation for responses

### 🔧 Bring Your Own AI Provider

- **Use your own API keys** - No vendor lock-in
- **Provider presets** for quick setup:
  - Featherless AI (default)
  - OpenAI (GPT-4, GPT-3.5)
  - Ollama (local models)
  - OpenRouter (multiple models)
- **Custom configuration** - Works with any OpenAI-compatible API
- **Test connection** button to verify your settings

### ⚡ Modern Chrome Extension

- Clean side panel interface (doesn't block your browsing)
- Dark theme with smooth animations
- Copy explanations to clipboard
- Retry for different explanations
- Markdown and diagram support

---

## 🚀 Installation

### From Source

1. **Clone the repository**

   ```bash
   git clone https://github.com/c2p-cmd/eli5-extension.git
   cd eli5-extension
   ```

2. **Load the extension in Chrome**
   - Open Chrome and go to `chrome://extensions`
   - Enable "Developer mode" (toggle in top-right)
   - Click "Load unpacked"
   - Select the `chrome-extension` folder

3. **Configure your AI provider**
   - Right-click the extension icon → **Options**
   - Choose a provider preset or enter custom settings
   - Add your API key
   - Click "Test Connection" to verify
   - Click "Save Settings"

4. **Start using!**
   - Visit any webpage
   - Click the SmolBrain extension icon
   - Choose an explanation mode or type your question

---

## ⚙️ Configuration

### Quick Setup with Presets

The settings page includes presets for popular providers:

| Provider | API URL | Notes |
|----------|---------|-------|
| **Featherless AI** | `https://api.featherless.ai/v1` | Default, affordable |
| **OpenAI** | `https://api.openai.com/v1` | GPT-4, GPT-3.5-turbo |
| **Ollama** | `http://localhost:11434/v1` | Local models, no API key needed |
| **OpenRouter** | `https://openrouter.ai/api/v1` | Access to multiple models |

### Custom Configuration

For any OpenAI-compatible API:

1. **API URL**: Your provider's base URL
2. **API Key**: Your authentication key (optional for Ollama)
3. **Model Name**: The specific model to use (e.g., `glm-4.7-flash:latest`, `llama2`)

### Access Settings

- **Option 1**: Right-click extension icon → Options
- **Option 2**: Click the gear icon ⚙️ in the side panel header

---

## 🎨 How It Works

1. Click the SmolBrain icon on any webpage
2. Choose an explanation mode or type a custom question
3. The extension extracts visible text from the page
4. Your AI provider generates a simple explanation
5. Ask follow-up questions to dive deeper

---

## 📁 Project Structure

```bash
eli5-extension/
├── chrome-extension/
│   ├── manifest.json         # Extension configuration
│   ├── background.js         # Service worker
│   ├── content.js            # Page content extraction
│   ├── sidepanel.html        # Main UI structure
│   ├── sidepanel.js          # App logic & API calls
│   ├── sidepanel.css         # Styling
│   ├── options.html          # Settings page UI
│   ├── options.js            # Settings logic
│   ├── options.css           # Settings styling
│   ├── marked.min.js         # Markdown parser
│   ├── mermaid.min.js        # Diagram support
│   ├── .env.example          # Example environment file
│   └── icons/                # Extension icons
├── images/                   # Screenshots
├── README.md                 # This file
└── TEST_SITES.md            # Curated test websites
```

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Browser APIs**: Chrome Extension Manifest V3
  - Side Panel API
  - Tabs API
  - Scripting API
  - Storage API (for settings)
- **Libraries**:
  - Marked.js (Markdown rendering)
  - Mermaid.js (Diagram support)
- **AI Integration**: Direct API integration with OpenAI-compatible providers

---

## 🔒 Security & Privacy

- ✅ **No tracking**: Your data never leaves your browser except to your chosen AI provider
- ✅ **Secure storage**: API keys stored in Chrome's encrypted storage
- ✅ **No telemetry**: No analytics or usage tracking
- ✅ **Open source**: Review the code yourself
- ✅ **Your API, your control**: Use your own API keys, you control the data

---

## 🎯 Ideal Use Cases

This extension excels at simplifying:

- 📚 Scientific papers and research articles
- 🔧 Technical documentation and Wikipedia articles
- 💰 Financial analysis and economic reports
- ⚖️ Legal documents and legislation
- 🏥 Medical research papers
- 📰 Long-form journalism and complex news

See [TEST_SITES.md](./TEST_SITES.md) for curated test websites.

---

## ⚠️ Known Limitations

- **Chrome system pages**: Cannot explain `chrome://` pages, `chrome-extension://` pages, or Chrome Web Store (security restriction)
- **Content extraction**: Only extracts visible text (first 6000 characters)
- **API limits**: Subject to your provider's rate limits and quotas

---

## 🐛 Troubleshooting

### "This page can't be explained"

- You're on a restricted Chrome page (chrome://, chrome-extension://, or Chrome Web Store)
- **Solution**: Visit a regular website instead

### "API Error" or connection issues

- Check your API settings (click gear icon ⚙️)
- Verify your API key is correct
- Test connection in settings page
- Check your provider's status page

### Extension not loading

- Make sure you loaded the `chrome-extension` folder (not the root folder)
- Check `chrome://extensions` for error messages
- Try reloading the extension

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📝 License

[MIT](./LICENSE)

---

## 🙏 Credits

- **Powered by**: Your own AI provider
- **Built with**: [AWS Kiro](https://kiro.dev/)
- **Inspiration**: Making complex content accessible to everyone

---

## 📞 Support

For issues or questions:

- Open an issue on GitHub
- Check existing issues for solutions

---

**SmolBrain** - Making the web accessible to everyone, one explanation at a time! 🧠✨
