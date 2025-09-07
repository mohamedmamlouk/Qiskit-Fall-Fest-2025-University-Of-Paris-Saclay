#!/bin/bash

echo "🔍 Vérification des images Fall Fest..."
echo ""

echo "📁 Contenu du dossier assets/images :"
ls -la assets/images/

echo ""
echo "🖼️ Images Fall Fest trouvées :"

if [ -f "assets/images/fall-fest-banner.webp" ]; then
    echo "✅ fall-fest-banner.webp (bannière principale)"
    file assets/images/fall-fest-banner.webp
else
    echo "❌ fall-fest-banner.webp manquant"
fi

if [ -f "assets/images/fall-fest-sponsor.png" ]; then
    echo "✅ fall-fest-sponsor.png (logo sponsor)"
    file assets/images/fall-fest-sponsor.png
else
    echo "❌ fall-fest-sponsor.png manquant"
fi

echo ""
echo "🌐 Test du serveur local..."
echo "Le site est accessible sur : http://localhost:8001"
echo ""
echo "🎨 Changements appliqués :"
echo "• Background avec image Fall Fest"
echo "• Patterns de circuits quantiques animés"
echo "• Badge Fall Fest dans le header"
echo "• Couleurs thème Qiskit (violet/bleu/rose)"
echo "• Logo Fall Fest en overlay discret"
