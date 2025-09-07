import re

# Lire le fichier CSS
with open('assets/css/modern.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Classes d'icônes/emojis à supprimer
icon_classes = [
    'inline-icon', 'feature-icon', 'tab-icon', 'type-icon', 
    'speaker-badge', 'organizer-badge', 'info-icon', 'btn-icon', 
    'note-icon', 'quantum-icon'
]

# Supprimer les règles CSS pour ces classes
for icon_class in icon_classes:
    # Supprimer la classe principale et tout son contenu
    pattern = rf'\.{icon_class}\s*\{{[^}}]*\}}\s*'
    content = re.sub(pattern, '', content, flags=re.MULTILINE | re.DOTALL)
    
    # Supprimer aussi les variantes avec img
    pattern = rf'\.{icon_class}\s+img\s*\{{[^}}]*\}}\s*'
    content = re.sub(pattern, '', content, flags=re.MULTILINE | re.DOTALL)
    
    # Supprimer les pseudo-classes
    pattern = rf'\.{icon_class}:nth-child\([^)]*\)\s*\{{[^}}]*\}}\s*'
    content = re.sub(pattern, '', content, flags=re.MULTILINE | re.DOTALL)

# Nettoyer les lignes vides multiples
content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)

# Écrire le CSS nettoyé
with open('assets/css/modern.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("CSS nettoyé des styles emoji !")
