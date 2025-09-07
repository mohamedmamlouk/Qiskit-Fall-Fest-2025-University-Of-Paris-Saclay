# 🚀 Déploiement Vercel - Guide Rapide

## Prérequis

1. **Compte Vercel** : Créez un compte gratuit sur [vercel.com](https://vercel.com)
2. **Git** : Assurez-vous que Git est installé sur votre système

## Option 1 : Déploiement via GitHub (Recommandé)

### Étape 1 : Pousser vers GitHub
```bash
# Initialiser le dépôt Git (si pas déjà fait)
git init
git add .
git commit -m "Initial commit - Modern Qiskit Fall Fest 2025 website"

# Créer un nouveau dépôt sur GitHub et le lier
git remote add origin https://github.com/VOTRE-USERNAME/qiskit-fall-fest-2025.git
git branch -M main
git push -u origin main
```

### Étape 2 : Connecter à Vercel
1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquez sur **"New Project"**
3. Sélectionnez **"Import Git Repository"**
4. Choisissez votre dépôt `qiskit-fall-fest-2025`
5. Cliquez sur **"Deploy"**

✅ **C'est tout !** Votre site sera automatiquement déployé et accessible via une URL Vercel.

## 🎯 Features Implemented

### ✅ Modern Design
- **Quantum-themed UI** with Full_Illustration.png background
- **30+ Emoji assets** strategically integrated
- **Friendly and intuitive navigation**
- **Responsive design** for all devices

### ✅ User Experience
- **Smooth scrolling** navigation
- **Interactive schedule tabs**
- **Animated counters** and effects
- **Modern CSS animations**

### ✅ Content Sections
- **Hero section** with quantum background
- **About** with emoji-enhanced features
- **Schedule** with 3-week program tabs
- **Speakers** showcase with badges
- **Organizers** team profiles
- **Registration** with call-to-action
- **Sponsors** with hover effects

---

🎉 **Votre site moderne et friendly est prêt pour Vercel !**

## Étapes pour déployer votre site Qiskit Fall Fest 2025

### 1. Préparation du Repository GitHub

1. **Créer un nouveau repository sur GitHub**
   - Nom suggéré : `qiskit-fall-fest-2025-paris-saclay`
   - Cocher "Add a README file"
   - Choisir la licence MIT

2. **Cloner le repository localement**
   ```bash
   git clone https://github.com/votre-username/qiskit-fall-fest-2025-paris-saclay.git
   cd qiskit-fall-fest-2025-paris-saclay
   ```

3. **Copier tous les fichiers de ce projet**
   - Copier tous les fichiers du dossier `fall-fest-2025` vers votre repository
   - Remplacer le README.md existant

### 2. Configuration GitHub Pages

1. **Aller dans les Settings du repository**
   - Cliquer sur l'onglet "Settings"
   - Faire défiler jusqu'à la section "Pages"

2. **Configurer la source**
   - Source : "Deploy from a branch"
   - Branch : "main" 
   - Folder : "/ (root)"
   - Cliquer sur "Save"

3. **Attendre le déploiement**
   - GitHub Pages va construire votre site (2-5 minutes)
   - L'URL sera : `https://votre-username.github.io/qiskit-fall-fest-2025-paris-saclay`

### 3. Personnalisation Obligatoire

#### A. Formulaire Google Forms

1. **Créer un Google Form**
   ```
   - Aller sur forms.google.com
   - Créer un nouveau formulaire
   - Ajouter les champs nécessaires :
     * Nom complet
     * Email
     * Affiliation (université/entreprise)
     * Niveau d'expérience en quantum computing
     * Sessions d'intérêt
     * Participation au hackathon (oui/non)
     * Restrictions alimentaires
     * Questions/commentaires
   ```

2. **Obtenir le lien d'intégration**
   ```
   - Cliquer sur "Envoyer" dans votre formulaire
   - Choisir l'icône "<>" (Embed)
   - Copier le code iframe
   ```

3. **Mettre à jour index.html**
   ```html
   <!-- Remplacer cette ligne dans index.html -->
   <iframe src="https://docs.google.com/forms/d/e/VOTRE_FORM_ID/viewform?embedded=true" 
           width="100%" 
           height="800" 
           frameborder="0">
   ```

#### B. Images

1. **Logos des sponsors**
   - Télécharger les logos IBM Quantum et Qiskit officiels
   - Les placer dans `assets/images/sponsors/`

2. **Photos des speakers et organisateurs**
   - Ajouter les vraies photos dans les dossiers correspondants
   - Respecter les tailles recommandées (voir assets/images/README.md)

#### C. Contenu

1. **Mettre à jour les informations dans index.html**
   - Dates réelles de l'événement
   - Noms et informations des vrais speakers
   - Informations des organisateurs
   - Liens vers les profils sociaux

2. **Configuration _config.yml**
   ```yml
   # Remplacer ces valeurs
   url: "https://votre-username.github.io"
   baseurl: "/qiskit-fall-fest-2025-paris-saclay"
   google_analytics: "VOTRE_GA_ID"
   ```

### 4. Fonctionnalités Avancées (Optionnel)

#### A. Domaine Personnalisé

1. **Acheter un domaine** (ex: qiskitfallparis.com)

2. **Configurer DNS**
   ```
   Créer des enregistrements CNAME :
   www.votre-domaine.com -> votre-username.github.io
   ```

3. **Ajouter fichier CNAME**
   ```bash
   echo "www.votre-domaine.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

#### B. Google Analytics

1. **Créer un compte Google Analytics**
2. **Obtenir le tracking ID** (G-XXXXXXXXXX)
3. **Mettre à jour _config.yml**

#### C. Formulaire de Contact

1. **Utiliser Formspree ou Netlify Forms**
2. **Ajouter le formulaire dans la section contact**

### 5. Commandes Git Essentielles

```bash
# Ajouter tous les fichiers
git add .

# Commit avec message
git commit -m "Initial website setup"

# Pousser vers GitHub
git push origin main

# Vérifier le statut
git status

# Voir l'historique
git log --oneline
```

### 6. Maintenance et Mises à Jour

#### Mettre à jour le contenu
```bash
# Modifier les fichiers nécessaires
# Puis :
git add .
git commit -m "Update event information"
git push origin main
```

#### Sauvegarder avant modifications importantes
```bash
git branch backup-$(date +%Y%m%d)
git checkout backup-$(date +%Y%m%d)
git checkout main
```

### 7. Dépannage

#### Le site ne se charge pas
- Vérifier que GitHub Pages est activé dans Settings
- Attendre 5-10 minutes après chaque modification
- Vérifier la console développeur pour les erreurs

#### Images manquantes
- Vérifier les chemins dans le code HTML
- S'assurer que les images sont bien commitées
- Respecter la sensibilité à la casse des noms de fichiers

#### Formulaire Google ne fonctionne pas
- Vérifier que le formulaire est configuré pour accepter les réponses
- Tester le lien iframe dans un navigateur séparé
- S'assurer que les permissions de partage sont correctes

### 8. Ressources Utiles

- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)
- [Google Forms Help](https://support.google.com/forms/)
- [Git Tutorial](https://www.atlassian.com/git/tutorials)

### 9. Support

Si vous avez des problèmes :
1. Vérifier les [Issues GitHub](https://github.com/votre-username/qiskit-fall-fest-2025-paris-saclay/issues)
2. Créer une nouvelle issue avec les détails du problème
3. Consulter la documentation GitHub Pages

---

**Bon déploiement ! 🚀**
