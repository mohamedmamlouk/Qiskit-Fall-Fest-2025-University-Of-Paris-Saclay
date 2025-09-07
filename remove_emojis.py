import re

# Lire le fichier HTML
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Liste des images à conserver (pas des emojis)
keep_images = [
    'Full_Illustration.png',
    'sponsor1.png', 
    'sponsor2.png'
]

# Supprimer toutes les lignes d'images sauf celles à conserver
lines = content.split('\n')
new_lines = []

for line in lines:
    # Si c'est une ligne d'image
    if '<img src="assets/images/' in line and '.png' in line:
        # Vérifier si c'est une image à conserver
        should_keep = any(img in line for img in keep_images)
        if should_keep:
            new_lines.append(line)
        # Sinon on ne l'ajoute pas (supprimée)
    else:
        new_lines.append(line)

# Écrire le nouveau contenu
with open('index.html', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("Images emoji supprimées, gardé seulement Full_Illustration.png et les sponsors")
