## 📖 O Projekcie

Nowoczesne, responsywne portfolio prezentujące moje umiejętności, projekty i doświadczenie. Zaprojektowane z myślą o komfortowym i wygodnym zapoznaniem się ze mną.

---

## 📸 Preview
<p align="center">
  <img src="https://via.placeholder.com/800x450.png?text=Wstaw+Tu+Screenshot+Swojego+Portfolio" width="800" alt="Portfolio Preview" />
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
