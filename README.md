# Portfolio Professionnel - John Doe

## 📋 Description

Ce projet est un portfolio professionnel développé en React pour présenter les compétences et services de John Doe, développeur web full stack. L'application propose une interface moderne et responsive avec plusieurs sections dédiées à la présentation, aux services, au portfolio et aux contacts ainsi que les mentions légales.

## 🚀 Fonctionnalités

### Pages principales

- **Home** : Page de présentation avec une modal contenant les données du profil GitHub de John Doe et une section (présentation et compétences concernant les langages de programmation et développement)
- **Services** : Présentation des services proposés (UX Design, Développement Web, Référencement)
- **Portfolio** : Galerie de projets réalisés avec liens externes
- **Contact** : Informations de contact (Google Maps inclus) et formulaire
- **Mentions légales** : Page légale avec crédits et liens externes

### Composants principaux

- **Header** : Navigation principale avec menu responsive
- **Footer** : Pied de page avec liens de contact, sociaux, de navigation et vers les projets réalisés
- **Modal de profil** : Fenêtre modale pour plus d'informations sur le profil GitHub
- **Cartes de services** : Présentation des services proposés
- **Cartes de portfolio** : Affichage des projets sous format de cartes contenant une description rapide et un lien vers le projet
- **Barres de progression** : Visualisation des compétences techniques

## 🛠️ Technologies utilisées

### Frontend uniquement

- **React 19.1.0** - Framework JavaScript
- **React Router DOM 7.5.2** - Gestion des routes
- **Bootstrap 5.3.5** - Framework CSS
- **Bootstrap Icons 1.13.1** - Icônes
- **Sass** - Préprocesseur CSS

### Outils de développement

- **Vite 6.3.3** - Build tool et serveur de développement
- **ESLint** - Linting du code
- **@unhead/react** - Gestion des métadonnées

### Bibliothèques utilitaires

- **@popperjs/core** - Positionnement des tooltips
- **libphonenumber-js** - Validation des numéros de téléphone

## 📁 Structure du projet

```
📂 src
├── 📄 App.jsx
├── 📂 assets/
│  └── 📂 font/
│    ├── 📄 NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf
│    ├── 📄 NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf
│    ├── 📄 OFL.txt
│    ├── 📄 README.txt
│    └── 📂 static/
│      └── [160 fichiers de police TTF]
│  └── 📂 images/
│    ├── 📄 banner.jpg
│    ├── 📄 hero-bg.jpg
│    ├── 📄 john-doe-about.jpg
│    └── 📂 portfolio/
│      ├── 📄 coder.jpg
│      ├── 📄 espace-bien-etre.jpg
│      ├── 📄 fresh-food.jpg
│      ├── 📄 restaurant-japonais.jpg
│      ├── 📄 screens.jpg
│      └── 📄 seo.jpg
├── 📂 components/
│  ├── 📂 common/
│  │  ├── 📂 Accordion/
│  │  │  ├── 📄 Accordion.jsx
│  │  │  └── 📄 Accordion.scss
│  │  ├── 📂 BackgroundImage/
│  │  │  └── 📄 BackgroundImage.jsx
│  │  ├── 📂 Presentation/
│  │  │  └── 📄 Presentation.jsx
│  │  ├── 📂 TitleLayout/
│  │  │  └── 📄 TitleLayout.jsx
│  │  ├── 📂 TitleSection/
│  │  │  └── 📄 TitleSection.jsx
│  │  └── 📂 socialLink/
│  │     ├── 📂 SocialLink/
│  │     │  └── 📄 SocialLink.jsx
│  │     └── 📂 SocialLinksList/
│  │        └── 📄 SocialLinksList.jsx
│  ├── 📂 contact/
│  │  ├── 📂 ContactCard/
│  │  │  └── 📄 ContactCard.jsx
│  │  └── 📂 ContactCardsList/
│  │     └── 📄 ContactCardsList.jsx
│  ├── 📂 FormSection/
│  │  └── 📄 FormSection.jsx
│  ├── 📂 layout/
│  │  ├── 📂 Footer/
│  │  │  ├── 📄 Footer.jsx
│  │  │  ├── 📄 Footer.scss
│  │  │  └── 📂 FooterItems/
│  │  │     └── 📄 FooterPortfolioLinks.jsx
│  │  ├── 📂 Header/
│  │  │  ├── 📄 Header.jsx
│  │  │  └── 📄 Header.scss
│  │  ├── 📂 PageLayout/
│  │  │  └── 📄 PageLayout.jsx
│  │  └── 📂 UserProfilModal/
│  │     └── 📄 UserProfilModal.jsx
│  ├── 📂 MapSection/
│  │  └── 📄 MapSection.jsx
│  ├── 📂 navbar/
│  │  ├── 📂 Navbar/
│  │  │  ├── 📄 Navbar.jsx
│  │  │  └── 📄 Navbar.scss
│  │  └── 📂 NavbarLinksList/
│  │     └── 📄 NavbarLinksList.jsx
│  ├── 📂 portfolio/
│  │  ├── 📂 PortfolioCard/
│  │  │  ├── 📄 PortfolioCard.jsx
│  │  │  └── 📄 PortfolioCard.scss
│  │  └── 📂 PortfolioCardsList/
│  │     └── 📄 PortfolioCardsList.jsx
│  ├── 📂 progressbar/
│  │  ├── 📂 Progressbar/
│  │  │  └── 📄 Progressbar.jsx
│  │  └── 📂 ProgressbarsList/
│  │     └── 📄 ProgressbarsList.jsx
│  └── 📂 services/
│     ├── 📂 ServiceCard/
│     │  └── 📄 Servicecard.jsx
│     └── 📂 ServiceCardsList/
│        └── 📄 ServiceCardsList.jsx
├── 📂 contexts/
│  └── 📄 FooterContext.js
├── 📂 data/
│  ├── 📄 contactData.js
│  ├── 📄 countryCode.js
│  ├── 📄 navBarLinks.js
│  ├── 📄 portfolioData.js
│  ├── 📄 portfolioImages.js
│  ├── 📄 progressBarsData.js
│  ├── 📄 servicesData.js
│  └── 📄 socialLinksData.js
├── 📂 hooks/
│  ├── 📄 useContextualStyle.js
│  ├── 📄 useFilteredData.js
│  ├── 📄 useHashScroll.js
│  └── 📄 useScrollToTop.js
├── 📄 main.jsx
├── 📂 pages/
│  ├── 📂 ContactPage/
│  │  └── 📄 ContactPage.jsx
│  ├── 📂 HomePage/
│  │  ├── 📄 HomePage.jsx
│  │  └── 📂 components/
│  │     ├── 📂 ProfilPart/
│  │     │  └── 📄 ProfilPart.jsx
│  │     └── 📂 SkillsPart/
│  │        └── 📄 SkillsPart.jsx
│  ├── 📂 LegalNoticePage/
│  │  ├── 📂 CreditText/
│  │  │  └── 📄 CreditText.jsx
│  │  └── 📄 LegalNoticePage.jsx
│  ├── 📂 PortfolioPage/
│  │  └── 📄 PortfolioPage.jsx
│  └── 📂 ServicesPage/
│     └── 📄 ServicesPage.jsx
├── 📂 styles/
│  ├── 📄 _base.scss
│  ├── 📄 _bootstrap-overrides.scss
│  ├── 📄 _utilities.scss
│  └── 📄 main.scss
└── 📂 utils/
    ├── 📄 domainExtractor.js
    ├── 📄 phoneFormatter.js
    └── 📂 validation/
        ├── 📄 emailValidator.js
        ├── 📄 fieldValidator.js
        ├── 📄 idValidator.js
        ├── 📄 phoneNumberValidator.js
        ├── 📄 portfolioImageValidator.js
        └── 📄 urlValidator.js
```

## 🚀 Installation et démarrage

### Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

#### Node.js

- **Version requise** : Node.js 18.0.0 ou supérieure
- **Vérification** : `node --version`
- **Téléchargement** : [nodejs.org](https://nodejs.org/)

#### Gestionnaire de paquets

- **npm** (inclus avec Node.js) : `npm --version`
- **yarn** (optionnel) : `npm install -g yarn` puis `yarn --version`
- **pnpm** (optionnel) : `npm install -g pnpm` puis `pnpm --version`

#### Git

- **Vérification** : `git --version`
- **Téléchargement** : [git-scm.com](https://git-scm.com/)

### Installation étape par étape

#### 1. Cloner le repository

**Option A : Clonage HTTPS (recommandé)**

```bash
git clone https://github.com/Leptitreveur/Guibert-Denis_Devoir-React.git
cd Guibert-Denis_Devoir-React
```

**Option B : Clonage SSH (si configuré)**

```bash
git clone git@github.com:Leptitreveur/Guibert-Denis_Devoir-React.git
cd Guibert-Denis_Devoir-React
```

**Option C : GitHub CLI**

```bash
gh repo clone Leptitreveur/Guibert-Denis_Devoir-React
cd Guibert-Denis_Devoir-React
```

#### 2. Installer les dépendances

**Avec npm (recommandé)**

```bash
npm install
```

**Avec yarn**

```bash
yarn install
```

**Avec pnpm**

```bash
pnpm install
```

#### 3. Vérifier l'installation

```bash
# Vérifier que toutes les dépendances sont installées
npm list --depth=0

# Vérifier que le projet peut être construit
npm run build
```

#### 4. Lancer le serveur de développement

```bash
npm run dev
```

#### 5. Accéder à l'application

- **URL locale** : `http://localhost:5173` (ou le port affiché dans le terminal)
- **Réseau local** : `http://[votre-IP]:5173` (pour accès depuis d'autres appareils)

### Scripts disponibles

| Commande           | Description                                          | Utilisation             |
| ------------------ | ---------------------------------------------------- | ----------------------- |
| `npm run dev`      | Lance le serveur de développement avec hot reload    | Développement quotidien |
| `npm run build`    | Construit l'application optimisée pour la production | Déploiement             |
| `npm run preview`  | Prévisualise la version de production localement     | Test avant déploiement  |
| `npm run lint`     | Vérifie le code avec ESLint                          | Contrôle qualité        |
| `npm run lint:fix` | Corrige automatiquement les erreurs ESLint           | Nettoyage du code       |

### Résolution des problèmes courants

#### Erreur "command not found: node"

```bash
# Vérifier l'installation de Node.js
node --version
# Si non installé, télécharger depuis nodejs.org
```

#### Erreur "permission denied"

```bash
# Sur Linux/Mac, utiliser sudo si nécessaire
sudo npm install

# Ou configurer npm pour éviter les permissions
npm config set prefix ~/.npm-global
```

#### Erreur "port already in use"

```bash
# Tuer le processus sur le port 5173
npx kill-port 5173

# Ou utiliser un port différent
npm run dev -- --port 3000
```

#### Erreur de dépendances

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Vérification de l'installation

Après l'installation, vous devriez voir :

1. **Terminal** : Message "Local: http://localhost:5173/"
2. **Navigateur** : Page d'accueil du portfolio
3. **Console** : Aucune erreur dans la console du navigateur

### Structure après installation

```
Guibert-Denis_Devoir-React/
├── node_modules/          # Dépendances installées
├── public/               # Fichiers publics
├── src/                  # Code source
├── package.json          # Configuration du projet
├── package-lock.json     # Verrouillage des versions
└── README.md            # Ce fichier
```

## 🔧 Extensions VSCode recommandées

Pour une expérience de développement optimale, nous recommandons d'installer les extensions suivantes dans VSCode :

### Extensions essentielles

- **ES7+ React/Redux/React-Native snippets** - Snippets pour React
- **Prettier - Code formatter** - Formatage automatique du code
- **ESLint** - Linting JavaScript/React
- **Auto Rename Tag** - Renommage automatique des balises JSX
- **Bracket Pair Colorizer 2** - Coloration des paires de parenthèses
- **GitLens** - Intégration Git avancée

### Extensions pour SCSS/CSS

- **SCSS IntelliSense** - Autocomplétion SCSS
- **Color Highlight** - Mise en évidence des couleurs

### Extensions pour React

- **React Developer Tools** - Outils de développement React
- **React Snippets** - Snippets supplémentaires pour React
- **JSX Snippets** - Snippets pour JSX

### Extensions utilitaires

- **Path Intellisense** - Autocomplétion des chemins
- **Error Lens** - Affichage des erreurs en ligne

### Configuration recommandée

Ajoutez ces paramètres à votre `settings.json` VSCode :

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "scss.validate": true,
  "css.validate": false,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

## 🎨 Design et UX

### Caractéristiques

- **Design responsive** : Adaptation à tous les écrans
- **Interface moderne** : Utilisation de Bootstrap 5
- **Navigation fluide** : Routing avec React Router
- **Animations** : Transitions et effets visuels
- **Accessibilité** : Respect des standards d'accessibilité

### Typographie

- **Police principale** : Nunito Sans (variable font avec 160 variantes)

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte aux différentes tailles d'écran :

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

### Personnalisation

Les données du portfolio sont centralisées dans le dossier `src/data/` :

- `servicesData.js` - Services proposés
- `portfolioData.js` - Projets du portfolio
- `contactData.js` - Informations de contact
- `progressbarsData.js` - Compétences techniques
- `socialLinksData.js` - Liens vers les réseaux sociaux
- `navBarLinks.js` - Liens de navigation
- `portfolioImages.js` - Images du portfolio
- `countryCode.js` - Codes pays pour la validation

## 🔧 Architecture

### Hooks personnalisés

- `useContextualStyle` : Gestion des styles selon le contexte (footer/page normale)
- `useFilteredData` : Filtrage de données avec validation
- `useHashScroll` : Gestion du scroll avec ancres
- `useScrollToTop` : Scroll automatique lors du changement de page

### Système de styles

- **SCSS** : Préprocesseur CSS avec variables et mixins
- **Bootstrap 5** : Framework CSS avec surcharges personnalisées
- **Classes utilitaires** : Génération automatique de classes responsive

### Utilitaires et validation

- **Validation des emails** : Vérification du format et du domaine
- **Validation des téléphones** : Formatage et validation internationale
- **Validation des URLs** : Vérification des liens externes
- **Extraction de domaines** : Utilitaires pour la gestion des liens

## 📄 Licence

Ce projet est un devoir académique. Tous droits réservés.

## 👨‍💻 Auteur

**John Doe** - Développeur Web Full Stack
