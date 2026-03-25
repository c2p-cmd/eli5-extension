# SmolBrain Documentation Site

This folder contains the documentation website for SmolBrain Chrome Extension.

## Files

- `index.html` - Main landing page with features and screenshots
- `privacy-policy.html` - Privacy policy page
- `images/` - Contains extension icons and screenshots

## Setup Instructions

### To Use Locally

Simply open `index.html` in your browser to preview the site.

### To Deploy with GitHub Pages

1. **Push this docs folder to GitHub**

   ```bash
   git add docs/
   git commit -m "Add documentation website"
   git push
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **main** branch and **/docs** folder
   - Click **Save**

3. **Access Your Site**
   - Your site will be available at: `https://c2p-cmd.github.io/eli5-extension/`
   - Privacy Policy URL: `https://c2p-cmd.github.io/eli5-extension/privacy-policy.html`

4. **Update Chrome Web Store Submission**
   - Copy the Privacy Policy URL
   - Paste it in the "Privacy Policy" field in Chrome Web Store Developer Dashboard

## Before Publishing

Update the following placeholders in both HTML files:

### index.html

- `[YOUR-EXTENSION-ID]` - Your Chrome Web Store extension ID
- `c2p-cmd` - Your GitHub username
- `[YOUR-LICENSE]` - Your license type (e.g., MIT)

### privacy-policy.html

- `[To be added]` - Add effective date and last updated date
- `c2p-cmd` - Your GitHub username (2 places)
- `[YOUR-EMAIL]` - Your support email address

## File Structure

```
docs/
├── index.html              # Landing page
├── privacy-policy.html     # Privacy policy
├── images/
│   ├── icon-128.png       # Extension icon
│   ├── icon-256.png       # Extension icon (high-res)
│   ├── SS1.png            # Screenshot 1
│   ├── SS2.png            # Screenshot 2
│   ├── SS3.png            # Screenshot 3
│   └── SS4.png            # Screenshot 4
└── README.md              # This file
```

## Privacy Policy URL

Once deployed, use this URL for Chrome Web Store:

```
https://c2p-cmd.github.io/eli5-extension/privacy-policy.html
```

## License

Same as parent project.
