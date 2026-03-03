## 📖 About the Project

A modern, responsive portfolio showcasing my skills, projects, and experience. Designed to provide a comfortable and smooth way to get to know me.

**🔗 Live Preview:** [https://bartosz-malec.pl](https://bartosz-malec.pl)

---

## 📸 Preview
<p align="center">
  <img width="1920" height="851" alt="banner" src="https://github.com/user-attachments/assets/7ef1aff5-84e1-4ae5-af9c-c7931aca2c3c" />

  <img width="1440" height="770" alt="file" src="https://github.com/user-attachments/assets/450ed3b1-4683-4de8-87dd-424ca94d8d64" />

  <img width="1920" height="966" alt="projects" src="https://github.com/user-attachments/assets/8e5aaf8e-c29e-4265-b3b5-4a9f26ecda8e" />
</p>

---

## 🛠️ Technical Stack & Architecture

A responsive single-page application (SPA) built with Angular, following modern web standards and best practices.

* ⚛️ **Angular:** Main web application framework
* 📝 **TypeScript:** Language used throughout the project
* 🚀 **angular-cli-ghpages:** Plugin for deploying the application to GitHub Pages

---

## 📂 Project Structure
```text
src/
├── app/            # Modular UI components
├── assets/
      ├── images/   # Images, icons
      ├── i18n/     # Translation files
```

## 📦 Deployment

The application can be deployed either on a custom domain or on GitHub Pages. Below is the deployment instruction for GitHub Pages:

### 1️⃣ Deploy directly using Angular CLI
```bash
ng build --base-href https://bartosz-malec.pl/
npx angular-cli-ghpages --dir=dist/browser

ng build --base-href https://Vertonowsky.github.io/portfolio/
npx angular-cli-ghpages --dir=dist/browser
```

### 2️⃣ Deploy using the provided npm script
```bash
npm run deploy
```

Finally, update the domain in the remote repository and synchronize the changes. This process may take a few minutes.
