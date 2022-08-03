# Comment installer et utilisé Rocket Overlay ?

Il faut au préalable :

-   Rocket League
-   OBS
-   Gestionnaire d'archives (7zip, WinRar)

## Télécharger le plugin Rocket League

Pour télécharger le plugin rendez-vous sur [ce site](https://gitlab.com/bakkesplugins/sos/sos-plugin/-/releases).

Le plugin a été développé pour la version 1.6.0 mais sera normalement maintenu sur les nouvelles versions du plugin.

Télécharger le fichier **SOS-Plugin-1.6.0.zip**

## Installer SOS Plugin

Rendez-vous dans le dossier où est installé Bakkesmod, usuellement : `C:\Users\{{user}}\AppData\Roaming\bakkesmod\bakkesmod\`

Rendez vous ensuite dans le fichier plugin, une fois dans le fichier, ouvrez l'archive **SOS-Plugin-1.6.0.zip** et glisser le fichier **SOS.dll** dans le dossier.

Ouvrez les fichiers settings et glissez le fichier **sos.set** de l'archive.

Une fois les fichiers déposés aux endroits respectifs, retourner à la racine de l'installation de Bakkesmod et ouvrez le fichier se trouvant dans **cfg/plugins.cfg** avec un éditeur de texte et rajouter cette ligne à la fin du fichier :

`plugin load sos`
