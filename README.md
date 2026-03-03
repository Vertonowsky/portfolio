## 📖 O Projekcie

Nowoczesne, responsywne portfolio prezentujące moje umiejętności, projekty i doświadczenie. Zaprojektowane z myślą o komfortowym i wygodnym zapoznaniem się ze mną.

---

## 📸 Preview
<p align="center">
  <img width="1920" height="851" alt="banner" src="https://github.com/user-attachments/assets/7ef1aff5-84e1-4ae5-af9c-c7931aca2c3c" />

  <img width="1440" height="770" alt="plik" src="https://github.com/user-attachments/assets/450ed3b1-4683-4de8-87dd-424ca94d8d64" />

  <img width="1920" height="966" alt="projects" src="https://github.com/user-attachments/assets/8e5aaf8e-c29e-4265-b3b5-4a9f26ecda8e" />

</p>

---

## 🛠️ Stack Techniczny i Architektura

Responsywna aplikacja typu SPA stworzona w Angularze z zastosowaniem najnowszych standardów i dobrych praktyk webowych.

* ⚛️ **Angular:** Główny framework aplikacji webowej
* 📝 **TypeScript:** Język używany w całym projekcie
* 🚀 **angular-cli-ghpages:** Plugin do deployowania aplikacji na GitHub Pages

## 📂 Struktura Projektu
```text
src/
├── app/            # Modularne komponenty UI
├── assets/
      ├── images/   # Obrazy, ikony
      ├── i18n/     # Pliki tłumaczeń
```

## 📦 Deployment

Aplikacja może być wdrożona zarówno na własnej domenie, jak i na GitHub Pages. Poniżej znajduje się instrukcja wdrożenia na Github Pages:

### 1️⃣ Wdrażanie bezpośrednio przez Angular CLI
```bash
ng build --base-href https://bartosz-malec.pl/
npx angular-cli-ghpages --dir=dist/browser

ng build --base-href https://Vertonowsky.github.io/portfolio/
npx angular-cli-ghpages --dir=dist/browser
```

### 2️⃣ Wdrażanie gotowym skryptem
```bash
npm run deploy
```

na koniec należy uzupełnić domenę wewnątrz zdalnego repozytorium i zsycnhronizować zmiany:
