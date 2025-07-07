# Portfolio Professionnel - John Doe

## 📋 Description

Ce projet est un portfolio professionnel développé en React pour présenter les compétences et services de John Doe, développeur web full stack. L'application propose une interface moderne et responsive avec plusieurs sections dédiées à la présentation, aux services, au portfolio et aux contacts.

## 🚀 Fonctionnalités

### Pages principales

- **Accueil** : Page de présentation avec hero section et modal de profil
- **Services** : Présentation des services proposés (UX Design, Développement Web, Référencement)
- **Portfolio** : Galerie de projets réalisés
- **Contact** : Informations de contact et formulaire
- **Mentions légales** : Page légale avec crédits

### Composants principaux

- **Header** : Navigation principale avec menu responsive
- **Footer** : Pied de page avec liens sociaux et légaux
- **Modal de profil** : Fenêtre modale pour plus d'informations sur le profil
- **Cartes de services** : Présentation des services avec icônes Bootstrap
- **Cartes de portfolio** : Affichage des projets avec filtres
- **Barres de progression** : Visualisation des compétences techniques

## 🛠️ Technologies utilisées

### Frontend

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
src/
├── components/          # Composants réutilisables
│   ├── common/         # Composants génériques
│   ├── contact/        # Composants de contact
│   ├── layout/         # Composants de mise en page
│   ├── navbar/         # Composants de navigation
│   ├── portfolio/      # Composants de portfolio
│   ├── progressbar/    # Composants de barres de progression
│   └── services/       # Composants de services
├── contexts/           # Contextes React
├── data/              # Données statiques
├── hooks/             # Hooks personnalisés
├── pages/             # Pages de l'application
└── styles/            # Fichiers de style SCSS
```

## 🚀 Installation et démarrage

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le repository**

   ```bash
   git clone [URL_DU_REPO]
   cd Guibert-Denis_Devoir-React
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Ouvrir l'application**
   L'application sera accessible à l'adresse : `http://localhost:5173`

### Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 🎨 Design et UX

### Caractéristiques

- **Design responsive** : Adaptation à tous les écrans
- **Interface moderne** : Utilisation de Bootstrap 5
- **Navigation fluide** : Routing avec React Router
- **Animations** : Transitions et effets visuels
- **Accessibilité** : Respect des standards d'accessibilité

### Typographie

- **Police principale** : Nunito Sans (variable font)
- **Hiérarchie claire** : Utilisation cohérente des tailles de police

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte aux différentes tailles d'écran :

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🔧 Configuration

### Variables d'environnement

Aucune variable d'environnement n'est requise pour le développement local.

### Personnalisation

Les données du portfolio sont centralisées dans le dossier `src/data/` :

- `servicesData.js` - Services proposés
- `portfolioData.js` - Projets du portfolio
- `contactData.js` - Informations de contact
- `progressbarsData.js` - Compétences techniques

## 📦 Build et déploiement

### Build de production

```bash
npm run build
```

Le build génère un dossier `dist/` contenant les fichiers optimisés pour la production.

### Déploiement

L'application peut être déployée sur n'importe quel service d'hébergement statique :

- Netlify
- Vercel
- GitHub Pages
- Surge

## 🧪 Tests

Actuellement, aucun test automatisé n'est configuré. Les tests peuvent être ajoutés avec :

- Jest
- React Testing Library
- Vitest (recommandé avec Vite)

## 🤝 Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est un devoir académique. Tous droits réservés.

## 👨‍💻 Auteur

**John Doe** - Développeur Web Full Stack

## 🙏 Remerciements

- **Bootstrap** pour le framework CSS
- **React** pour le framework JavaScript
- **Vite** pour les outils de build
- **Google Fonts** pour la police Nunito Sans

---

_Dernière mise à jour : Décembre 2024_
