# Portfolio Moderne - Développeur Front-End

Un portfolio moderne et entièrement personnalisable pour développeur front-end, conçu avec les dernières technologies web et inspiré des meilleures pratiques du marché.

## ✨ Fonctionnalités

### 🎨 Design & UX
- **Design noir et vert** moderne et professionnel
- **Animations 3D** avec Three.js et particules interactives
- **Smooth scroll** et transitions fluides avec Framer Motion
- **Interface responsive** optimisée pour tous les appareils
- **Mode sombre** par défaut avec système de couleurs cohérent

### 🚀 Technologies utilisées
- **Next.js 15** - Framework React pour la performance
- **TypeScript** - Typage statique pour plus de robustesse
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions fluides
- **Three.js** - Rendus et animations 3D
- **React Hook Form** - Gestion des formulaires avec validation
- **EmailJS** - Envoi d'emails sans backend
- **Lucide React** - Icônes modernes et cohérentes

### 📱 Sections incluses
1. **Hero Section** - Animation 3D, présentation et call-to-action
2. **À propos** - Présentation personnelle avec photo et informations
3. **Compétences** - Barres de progression animées et technologies
4. **Projets** - Grille avec filtres, modal de détails et liens
5. **Contact** - Formulaire fonctionnel avec validation et réseaux sociaux

### ⚡ Performances & SEO
- **Optimisation des images** avec Next.js Image
- **Lazy loading** des composants et animations
- **Meta tags** optimisés pour le SEO
- **Code splitting** automatique
- **Performance optimisée** avec Lighthouse

## 🛠️ Installation et personnalisation

### Prérequis
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Installation
```bash
# Cloner le projet
git clone <votre-repo>
cd portfolio-frontend-dev

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

### Configuration EmailJS (optionnel)
Pour activer le formulaire de contact :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email
4. Récupérez vos clés dans le fichier `src/config/portfolio.ts` :

```typescript
emailjs: {
  serviceId: "votre_service_id", 
  templateId: "votre_template_id", 
  publicKey: "votre_public_key", 
}
```

## 📝 Personnalisation

### Configuration principale
Tous les contenus sont centralisés dans `src/config/portfolio.ts` :

```typescript
export const portfolioConfig = {
  // Informations personnelles
  personal: {
    name: "Votre Nom",
    title: "Développeur Front-End",
    // ... autres champs
  },
  
  // Projets
  projects: [
    {
      title: "Mon Projet",
      description: "Description courte",
      // ... autres champs
    }
  ],
  
  // Compétences, liens sociaux, etc.
}
```

### Remplacement des images
Remplacez les images placeholder dans `/public/images/` :
- `profile.jpg` - Votre photo de profil
- `projects/` - Screenshots de vos projets
- `og-image.jpg` - Image pour les réseaux sociaux

### Personnalisation des couleurs
Modifiez le thème dans `tailwind.config.js` :

```javascript
colors: {
  primary: {
    DEFAULT: '#00ff88', // Vert principal
    // ... autres nuances
  },
  background: {
    DEFAULT: '#000000', // Noir principal
    // ... autres nuances
  }
}
```

## 🚀 Déploiement

### Vercel (recommandé)
```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel
```

### Netlify
```bash
# Build du projet
npm run build

# Télécharger le dossier .next sur Netlify
```

### Autres plateformes
Le projet est compatible avec toutes les plateformes supportant Next.js :
- Railway
- Render
- AWS Amplify
- DigitalOcean App Platform

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints optimisés :
- **Mobile** : 320px - 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : 1024px+
- **Large screens** : 1440px+

## 🎯 Optimisations incluses

### Performance
- Images optimisées avec Next.js Image
- Code splitting automatique
- Lazy loading des sections
- Compression des assets

### SEO
- Meta tags dynamiques
- Open Graph pour réseaux sociaux
- Structured data
- Sitemap automatique

### Accessibilité
- Navigation au clavier
- Contraste optimisé
- Attributs ARIA
- Textes alternatifs

## 🤝 Support et contribution

### Problèmes fréquents

**Erreurs d'installation :**
```bash
# Nettoyer le cache npm
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Problèmes d'animations 3D :**
Vérifiez la compatibilité WebGL de votre navigateur.

### Contribution
1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🌟 Fonctionnalités avancées

### Animations personnalisées
- Particules 3D interactives
- Transitions de page fluides
- Hover effects sophistiqués
- Scroll-triggered animations

### Expérience utilisateur
- Navigation sticky intelligente
- Indicateur de section active
- Smooth scroll natif
- Loading states élégants

### Développeur-friendly
- TypeScript strict
- ESLint configuré
- Structure modulaire
- Documentation complète
- Configuration centralisée

---

**Créé avec ❤️ pour la communauté des développeurs front-end**

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou me contacter directement.