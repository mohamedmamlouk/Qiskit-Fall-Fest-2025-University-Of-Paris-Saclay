#!/usr/bin/env python3
import http.server
import socketserver
import os
from datetime import datetime

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Headers anti-cache très agressifs
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT')
        self.send_header('Last-Modified', datetime.now().strftime('%a, %d %b %Y %H:%M:%S GMT'))
        self.send_header('ETag', f'"{datetime.now().timestamp()}"')
        
        # CORS headers pour éviter les problèmes
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        
        super().end_headers()
    
    def do_GET(self):
        # Ajouter un timestamp à tous les fichiers CSS/JS
        if self.path.endswith('.css') or self.path.endswith('.js'):
            print(f"🔄 Serving {self.path} with no-cache headers")
        elif self.path == '/' or self.path == '/index.html':
            print(f"🏠 Serving index.html with aggressive no-cache headers")
            
        super().do_GET()

if __name__ == "__main__":
    PORT = 8080
    
    print(f"🚀 Démarrage du serveur anti-cache sur le port {PORT}")
    print(f"🌐 Site disponible sur: http://localhost:{PORT}")
    print(f"💡 Headers anti-cache activés pour forcer le rechargement")
    
    with socketserver.TCPServer(("", PORT), NoCacheHTTPRequestHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Serveur arrêté")
