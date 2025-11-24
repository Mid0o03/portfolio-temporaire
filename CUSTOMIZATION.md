# 🎨 Guide de Personnalisation du Portfolio

## 📝 Étapes de personnalisation

### 1. Informations personnelles
Modifiez le fichier `src/config/portfolio.ts` :

```typescript
personal: {
  name: "Votre Nom Complet",           // ✏️ Votre nom
  title: "Votre Titre",                // ✏️ Ex: "Développeur Full-Stack"
  subtitle: "Votre Spécialisation",    // ✏️ Ex: "Spécialisé en MERN Stack"
  description: "Votre bio...",          // ✏️ Description courte
  email: "votre@email.com",             // ✏️ Votre email
  phone: "+33 6 XX XX XX XX",           // ✏️ Votre téléphone
  location: "Votre Ville, Pays",        // ✏️ Votre localisation
}
```

### 2. Liens sociaux
```typescript
social: {
  github: "https://github.com/votre-username",      // ✏️ Votre GitHub
  linkedin: "https://linkedin.com/in/votre-profil", // ✏️ Votre LinkedIn
  twitter: "https://twitter.com/votre-username",    // ✏️ Votre Twitter
  // Ajoutez d'autres réseaux si besoin
}
```

### 3. Compétences techniques
Personnalisez vos compétences dans `skills.frontend` et `skills.tools` :

```typescript
skills: {
  frontend: [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Vue.js", level: 80, icon: "💚" },
    // ✏️ Ajoutez/modifiez vos compétences
  ],
  tools: [
    { name: "Docker", level: 75, icon: "🐳" },
    // ✏️ Ajoutez vos outils
  ]
}
```

### 4. Projets portfolio
Remplacez les projets d'exemple par les vôtres :

```typescript
projects: [
  {
    id: 1,
    title: "Nom de votre projet",
    description: "Description courte",
    longDescription: "Description détaillée...",
    image: "/images/projects/mon-projet.jpg",     // ✏️ Votre image
    technologies: ["React", "Node.js", "..."],   // ✏️ Vos technologies
    category: "Web App",                          // ✏️ Catégorie
    githubUrl: "https://github.com/...",         // ✏️ Lien GitHub
    liveUrl: "https://mon-projet.com",           // ✏️ Lien live
    featured: true,                              // ✏️ Projet mis en avant
  },
  // ✏️ Ajoutez d'autres projets...
]
```

### 5. Images et assets

#### Photo de profil
Remplacez `/public/images/profile.svg` par votre vraie photo :
- Format recommandé : 400x400px minimum
- Formats acceptés : JPG, PNG, WebP
- Nommez-la `profile.jpg` ou `profile.png`

#### Images de projets
Ajoutez vos captures d'écran dans `/public/images/projects/` :
- Format recommandé : 800x600px ou 16:9
- Nommez-les selon les noms dans la config
- Optimisez la taille (< 500KB par image)

#### CV
Ajoutez votre CV dans `/public/documents/cv.pdf`

### 6. Configuration EmailJS (optionnel)

Pour activer le formulaire de contact :

1. **Créez un compte sur [EmailJS](https://www.emailjs.com/)**

2. **Configurez un service email :**
   - Gmail, Outlook, ou autre
   - Notez le Service ID

3. **Créez un template d'email :**
   - Variables : `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
   - Notez le Template ID

4. **Récupérez votre Public Key dans les paramètres**

5. **Mettez à jour la config :**
```typescript
emailjs: {
  serviceId: "service_xxxxxxx",     // ✏️ Votre Service ID
  templateId: "template_xxxxxxx",   // ✏️ Votre Template ID  
  publicKey: "xxxxxxxxxxxxxxx",     // ✏️ Votre Public Key
}
```

### 7. Personnalisation des couleurs

Modifiez `tailwind.config.js` pour changer les couleurs :

```javascript
colors: {
  primary: {
    DEFAULT: '#00ff88',  // ✏️ Votre couleur principale
    // ... autres nuances
  },
  background: {
    DEFAULT: '#000000',  // ✏️ Couleur de fond
    // ... autres nuances  
  }
}
```

### 8. Métadonnées SEO

Mettez à jour `src/app/layout.tsx` et `src/config/portfolio.ts` :

```typescript
seo: {
  title: "Votre Nom | Développeur",                    // ✏️ Titre
  description: "Portfolio de votre nom...",            // ✏️ Description
  keywords: ["votre", "domaine", "compétences"],       // ✏️ Mots-clés
  author: "Votre Nom",                                 // ✏️ Auteur
  siteUrl: "https://votre-domaine.com",               // ✏️ URL du site
}
```

## 🚀 Lancement et déploiement

### Développement local
```bash
npm run dev     # Lance le serveur de développement
npm run build   # Build de production
npm run start   # Lance la version de production
```

### Déploiement sur Vercel (recommandé)
1. Pushez votre code sur GitHub
2. Connectez votre repo à [Vercel](https://vercel.com)
3. Déployez automatiquement

### Autres plateformes
- **Netlify** : Glissez-déposez le dossier `out/` après `npm run build`
- **Railway** : Connectez votre repo GitHub
- **DigitalOcean** : Utilisez App Platform

## ✅ Checklist finale

- [ ] ✏️ Informations personnelles modifiées
- [ ] 🔗 Liens sociaux mis à jour  
- [ ] 💪 Compétences personnalisées
- [ ] 🚀 Projets remplacés par les vôtres
- [ ] 📸 Photo de profil ajoutée
- [ ] 🖼️ Images de projets ajoutées
- [ ] 📄 CV ajouté
- [ ] 📧 EmailJS configuré (optionnel)
- [ ] 🎨 Couleurs personnalisées (optionnel)
- [ ] 🔍 SEO optimisé
- [ ] 🚀 Site déployé

## 🆘 Besoin d'aide ?

### Problèmes fréquents

**Images qui ne s'affichent pas :**
- Vérifiez les chemins dans la config
- Assurez-vous que les images sont dans `/public/`

**Formulaire de contact qui ne fonctionne pas :**
- Vérifiez la configuration EmailJS
- Testez avec des vraies valeurs

**Erreurs de build :**
- Vérifiez la syntaxe TypeScript
- Assurez-vous que toutes les images référencées existent

**Problèmes d'animations :**
- Vérifiez la compatibilité WebGL de votre navigateur
- Désactivez les animations 3D si nécessaire

### Support
- 📧 Contactez-moi via le formulaire du portfolio
- 🐛 Ouvrez une issue sur GitHub
- 💬 Rejoignez la communauté des développeurs

---

**Bon développement ! 🚀**