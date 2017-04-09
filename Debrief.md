# Test Morning 

## Objectif
- Tester tes notions sur React
- Tester tes compétences en intégration

## Mode opératoire
- Cloner le répertoire git https://github.com/Ugarz/automatic-waffle afin de récupérer le boilerplate qui te permettra de démarrer le projet
- Créer une branche de travail test/arnaud_prat
- Ajouter le package npm react-router
- Créer les routes nécessaires pour obtenir:
..- une route impliquant un composant Layout gèrant les éléments récurrents (header, footer)
..-une route imbriquée affichant un simple “Hello world” (pas besoin de la styler)
..-une seconde route imbriquée pour gérer les erreurs 404 (une bonne approche ici https://css-tricks.com/learning-react-router/)
- Créer un composant NotFound appelé par la route d’erreur 404. Le rendu devra correspondre à la maquette de page d’erreur 404 fournie. Cette page devra être responsive afin d’offir autant que possible le même rendu sur les devices les plus courants.

## Bilan 
### React-router
Un peu de difficultés à faire fonctionner mes routes correctement dans un premier temps.
J'ai suivi l'article de CSS-tricks mais j'ai eu quelques erreurs.
En me rapprochant de la doc de react-router et certaines réponses sur stack overflow, j'ai cru comprendre que la v4 avait fait subir certaines modifications. 
J'ai donc pu trouver une solution qui fonctionne mais je ne suis pas encore certain si c'est la bonne où s'il y a des moyens plus simples et optimisés.

### Composants
Pas de problèmes majeurs de mon point de vue, si ce n'est de l'optimisation peut-être.
Par exemple j'ai créé des composants pour certains éléments de la page comme la navigation, les boutons de connexion/inscription et les éléments de menus de footer. J'ai tendance à penser que ces éléments de menu du footer devrait partager un même composant dans lequel on injecterait des données différentes à chacun cependant je ne sais pas trop comment m'y prendre.

### Intégration et responsive
J'ai trouvé le package react-responsive qui m'a permis d'adapter les composants selon les différentes tailles de devices. Je ne sais pas s'il s'agit d'une bonne pratique.
En revanche je ne savais pas trop comment m'y prendre pour reproduire la sidenav du site Morning actuel. J'ai adapté dans un premier temps le menu de manière à obtenir un affichage convenable sur la plupart des devices. Cependant je n'étais pas satisfait du résultat et j'ai ajouté un package permettant de gérer une sidenav qui, en l'adaptant un peu se rapproche de celle du site actuel.

### Temps passé
J'ai compté approximativement 10 heures pour ce résultat, cela en incluant mes recherches de solutions et un peu de refactoring.

## Conclusion
J'ai beaucoup apprécié le challenge !
J'ai eu quelques difficultés que j'ai réussi à surmonter en trouvant mes solutions parmi diverses documentations forums (stack overflow principalement).
Je pense ne pas avoir encore cerner toutes les bonnes pratiques ni même avoir plongé complètement dans React, j'ai une marge de progression, c'est certain, et c'est motivant !
Enfin, ce test, réussi ou non, m'aura permis de renforcer mes ambitions professionnelles :)
