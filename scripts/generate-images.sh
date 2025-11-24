#!/bin/bash

# Script pour créer des images placeholder pour le portfolio
# Utilise ImageMagick pour générer des images de démonstration

echo "🎨 Génération des images placeholder pour le portfolio..."

# Vérifier si ImageMagick est installé
if ! command -v convert &> /dev/null; then
    echo "⚠️  ImageMagick n'est pas installé. Installation avec Homebrew..."
    if command -v brew &> /dev/null; then
        brew install imagemagick
    else
        echo "❌ Homebrew non trouvé. Veuillez installer ImageMagick manuellement:"
        echo "   brew install imagemagick"
        echo "   ou téléchargez depuis: https://imagemagick.org/script/download.php"
        exit 1
    fi
fi

# Créer les dossiers nécessaires
mkdir -p public/images/projects
mkdir -p public/images/testimonials
mkdir -p public/documents

# Couleurs du thème
PRIMARY_COLOR="#00ff88"
BACKGROUND_COLOR="#000000"
SECONDARY_COLOR="#1a1a1a"

echo "📸 Création de l'image de profil..."
convert -size 400x400 xc:"$BACKGROUND_COLOR" \
    -fill "$PRIMARY_COLOR" \
    -stroke "$PRIMARY_COLOR" \
    -strokewidth 3 \
    -draw "circle 200,200 200,100" \
    -fill white \
    -pointsize 80 \
    -font Arial-Bold \
    -gravity center \
    -annotate +0+0 "DEV" \
    public/images/profile.jpg

echo "🖼️  Création des images de projets..."

# Projet E-commerce
convert -size 800x600 gradient:"$BACKGROUND_COLOR"-"$SECONDARY_COLOR" \
    -fill "$PRIMARY_COLOR" \
    -pointsize 40 \
    -font Arial-Bold \
    -gravity center \
    -annotate +0-50 "E-COMMERCE" \
    -fill white \
    -pointsize 20 \
    -annotate +0+50 "Next.js • TypeScript • Stripe" \
    public/images/projects/ecommerce.jpg

# Projet Dashboard
convert -size 800x600 gradient:"$SECONDARY_COLOR"-"$BACKGROUND_COLOR" \
    -fill "$PRIMARY_COLOR" \
    -pointsize 40 \
    -font Arial-Bold \
    -gravity center \
    -annotate +0-50 "DASHBOARD" \
    -fill white \
    -pointsize 20 \
    -annotate +0+50 "React • Chart.js • WebSocket" \
    public/images/projects/dashboard.jpg

# Projet Portfolio 3D
convert -size 800x600 radial-gradient:"$PRIMARY_COLOR"-"$BACKGROUND_COLOR" \
    -fill white \
    -pointsize 40 \
    -font Arial-Bold \
    -gravity center \
    -annotate +0-50 "PORTFOLIO 3D" \
    -fill "$PRIMARY_COLOR" \
    -pointsize 20 \
    -annotate +0+50 "Three.js • GSAP • WebGL" \
    public/images/projects/portfolio3d.jpg

# Projet Chat
convert -size 800x600 xc:"$BACKGROUND_COLOR" \
    -fill "$PRIMARY_COLOR" \
    -stroke "$PRIMARY_COLOR" \
    -strokewidth 2 \
    -draw "roundrectangle 100,150 700,450 20,20" \
    -fill white \
    -pointsize 40 \
    -font Arial-Bold \
    -gravity center \
    -annotate +0-50 "CHAT APP" \
    -fill "$PRIMARY_COLOR" \
    -pointsize 20 \
    -annotate +0+50 "Socket.io • Real-time • MongoDB" \
    public/images/projects/chat.jpg

# Projet Task Manager
convert -size 800x600 xc:"$SECONDARY_COLOR" \
    -fill "$PRIMARY_COLOR" \
    -pointsize 40 \
    -font Arial-Bold \
    -gravity center \
    -annotate +0-50 "TASK MANAGER" \
    -fill white \
    -pointsize 20 \
    -annotate +0+50 "Vue.js • Drag & Drop • Collaboration" \
    public/images/projects/taskmanager.jpg

# Projet Weather
convert -size 800x600 gradient:"#87CEEB"-"$BACKGROUND_COLOR" \
    -fill white \
    -pointsize 40 \
    -font Arial-Bold \
    -gravity center \
    -annotate +0-50 "WEATHER APP" \
    -fill "$PRIMARY_COLOR" \
    -pointsize 20 \
    -annotate +0+50 "React Native • APIs • Geolocation" \
    public/images/projects/weather.jpg

echo "👥 Création des avatars de témoignages..."

# Avatar Marie
convert -size 200x200 xc:"$PRIMARY_COLOR" \
    -fill white \
    -pointsize 60 \
    -font Arial-Bold \
    -gravity center \
    -annotate +0+0 "M" \
    public/images/testimonials/marie.jpg

# Avatar Jean
convert -size 200x200 xc:"#22c55e" \
    -fill white \
    -pointsize 60 \
    -font Arial-Bold \
    -gravity center \
    -annotate +0+0 "J" \
    public/images/testimonials/jean.jpg

echo "🌐 Création de l'image Open Graph..."
convert -size 1200x630 gradient:"$BACKGROUND_COLOR"-"$SECONDARY_COLOR" \
    -fill "$PRIMARY_COLOR" \
    -pointsize 80 \
    -font Arial-Bold \
    -gravity center \
    -annotate +0-100 "PORTFOLIO" \
    -fill white \
    -pointsize 40 \
    -annotate +0-20 "Développeur Front-End" \
    -fill "$PRIMARY_COLOR" \
    -pointsize 30 \
    -annotate +0+40 "React • Next.js • TypeScript" \
    public/images/og-image.jpg

echo "📄 Création d'un CV placeholder..."
convert -size 595x842 xc:white \
    -fill black \
    -pointsize 30 \
    -font Arial-Bold \
    -gravity center \
    -annotate +0-300 "CURRICULUM VITAE" \
    -pointsize 20 \
    -annotate +0-200 "Votre Nom" \
    -pointsize 16 \
    -annotate +0-150 "Développeur Front-End" \
    -annotate +0-100 "📧 votre.email@example.com" \
    -annotate +0-50 "📱 +33 6 12 34 56 78" \
    -annotate +0+0 "📍 Paris, France" \
    -annotate +0+100 "⚠️  Remplacez par votre vrai CV" \
    public/documents/cv.pdf

echo "✅ Images placeholder créées avec succès !"
echo ""
echo "📁 Fichiers créés :"
echo "   • public/images/profile.jpg"
echo "   • public/images/projects/ (6 images)"
echo "   • public/images/testimonials/ (2 avatars)"
echo "   • public/images/og-image.jpg"
echo "   • public/documents/cv.pdf"
echo ""
echo "🔄 Pour personnaliser :"
echo "   1. Remplacez profile.jpg par votre vraie photo"
echo "   2. Ajoutez vos vraies captures d'écran de projets"
echo "   3. Remplacez cv.pdf par votre CV réel"
echo "   4. Mettez à jour les URLs dans src/config/portfolio.ts"
echo ""
echo "🎯 Le portfolio est maintenant prêt à être personnalisé !"