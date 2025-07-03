# Guide : Comment réinitialiser les paramètres de Cursor sans désinstaller les extensions

## Méthodes pour remettre Cursor aux paramètres d'origine

### 1. **Réinitialisation via le fichier settings.json** ⭐ (Méthode recommandée)

#### Localisation du fichier settings.json selon votre OS :

**Windows :**
```
C:\Users\[NomUtilisateur]\AppData\Roaming\Cursor\User\settings.json
```

**macOS :**
```
~/Library/Application Support/Cursor/User/settings.json
```

**Linux :**
```
~/.config/Cursor/User/settings.json
```

#### Étapes :
1. Fermez complètement Cursor
2. Naviguez vers l'emplacement du fichier selon votre OS
3. **Sauvegardez** le fichier `settings.json` (renommez-le en `settings.json.backup`)
4. Supprimez le fichier `settings.json` ou videz son contenu (laissez juste `{}`)
5. Redémarrez Cursor

**Avantages :** Préserve vos extensions, thèmes installés, et autres données

### 2. **Réinitialisation via la palette de commandes**

1. Dans Cursor, ouvrez la palette de commandes (`Ctrl+Shift+P` ou `Cmd+Shift+P`)
2. Tapez "Preferences: Open User Settings (JSON)"
3. Supprimez tout le contenu du fichier et remplacez par `{}`
4. Sauvegardez (`Ctrl+S` ou `Cmd+S`)
5. Redémarrez Cursor

### 3. **Réinitialisation sélective des paramètres**

Si vous voulez garder certains paramètres :

1. Ouvrez `Cursor > Settings > Cursor Settings`
2. Parcourez les sections et remettez manuellement aux valeurs par défaut :
   - **General** : Règles AI, paramètres éditeur
   - **Models** : Configuration des modèles
   - **Features** : Cursor Tab, Chat, Composer, indexation
   - **Editor** : Tooltips, auto-sélection, diffs

### 4. **Réinitialisation des données d'application (Option nucléaire)**

⚠️ **Attention** : Cette méthode supprime TOUT (extensions, thèmes, etc.)

#### Windows :
```cmd
rd /s /q %USERPROFILE%\AppData\Local\Cursor*
rd /s /q %USERPROFILE%\AppData\Roaming\Cursor*
```

#### macOS :
```bash
sudo rm -rf ~/Library/Application\ Support/Cursor
rm -f ~/.cursor.json
```

#### Linux :
```bash
rm -rf ~/.cursor ~/.config/Cursor/
```

### 5. **Base de données SQLite (Méthode avancée)**

Les paramètres Cursor sont stockés dans une base SQLite :

**Emplacement :**
- macOS : `~/Library/Application Support/Cursor/User/globalStorage/state.vscdb`
- Windows : `%APPDATA%\Cursor\User\globalStorage\state.vscdb`
- Linux : `~/.config/Cursor/User/globalStorage/state.vscdb`

**Pour visualiser/modifier :**
```bash
sqlite3 "path/to/state.vscdb" "SELECT * FROM ItemTable WHERE key LIKE '%settings%';"
```

## Problèmes courants et solutions

### Problème : "Editor accessibility support" activé par erreur
**Solution :** Allez dans les paramètres et désactivez "Editor Accessibility Support"

### Problème : Sons étranges lors de la frappe
**Solution :** Vérifiez les paramètres audio dans `Settings > Audio Cues`

### Problème : Indentation cassée
**Solution :** 
1. `Ctrl+Shift+P` > "Format Document"
2. Ou réinitialisez les paramètres d'indentation dans `Settings > Text Editor > Indentation`

### Problème : Thème cassé
**Solution :** 
1. Supprimez les paramètres de thème du `settings.json`
2. Réinstallez le thème via les extensions

## Sauvegarde préventive

Avant toute modification :

1. **Exportez votre profil** : `Cursor > Settings > Profile > Export Profile`
2. **Sauvegardez le dossier utilisateur** :
   - Windows : `%APPDATA%\Cursor\User\`
   - macOS : `~/Library/Application Support/Cursor/User/`
   - Linux : `~/.config/Cursor/User/`

## Restauration d'une sauvegarde

Pour restaurer vos paramètres :

1. **Importez votre profil** : `Cursor > Settings > Profile > Import Profile`
2. Ou restaurez manuellement les fichiers sauvegardés

## Commandes utiles

### Démarrer Cursor sans extensions (pour tester) :
```bash
cursor --disable-extensions
```

### Diagnostics réseau :
1. `Cursor Settings > Network > Run Diagnostics`

### Ouvrir le dossier des logs :
1. `Developer: Open Logs Folder` via la palette de commandes

## Notes importantes

- **Les extensions sont préservées** avec les méthodes 1, 2 et 3
- **Toujours faire une sauvegarde** avant toute réinitialisation
- **Redémarrer Cursor** après toute modification de fichiers
- La méthode du `settings.json` est la plus sûre et efficace

## Ressources supplémentaires

- Forum officiel Cursor : https://forum.cursor.com/
- Documentation de dépannage : https://docs.cursor.com/troubleshooting/
- Guide de configuration : https://cursorpractice.com/

---

*Guide créé basé sur les meilleures pratiques de la communauté Cursor et la documentation officielle.*