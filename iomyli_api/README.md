# 📋 API du Projet de Questionnaire

Bienvenue dans l'API du Projet de Questionnaire pour Consommateurs et Commerçants ! Cette API vous permet de gérer des questionnaires dynamiques, d'enregistrer les réponses des utilisateurs, et bien plus encore. Let's dive in!

## 🚀 Installation

1. **Clonez ce repo** : Parce qu'il faut bien commencer quelque part.
    ```bash
    git clone https://github.com/RoyerMohamed/Gestionnaire_Questionnaire.git
    cd Gestionnaire_Questionnaire
    ```

2. **Installez les dépendances** : Parce qu'une API sans ses dépendances, c'est comme un café sans sucre.
    ```bash
    npm install
    ```

3. **Configurez l'environnement** : Créez un fichier `.env` et ajoutez-y vos variables. N'oubliez pas de remplacer `YOUR_SECRET` par... eh bien, votre secret.
    ```bash
    PORT=3000
    DB_URL=mongodb://localhost:27017/questionnaire
    JWT_SECRET=YOUR_SECRET
    ```

4. **Démarrez le serveur** : Le moment de vérité. Si tout va bien, vous devriez voir le serveur démarrer sur le port 3000.
    ```bash
    npm start
    ```
    Si ça ne marche pas, essayez de redémarrer votre ordi. Sinon, appelez un exorciste.

## 📚 Documentation de l'API

### **Endpoints principaux :**

- **`POST /api/questionnaires`** : Crée un nouveau questionnaire.
- **`GET /api/questionnaires`** : Récupère tous les questionnaires.
- **`GET /api/questionnaires/:id`** : Récupère un questionnaire par ID.
- **`POST /api/reponses`** : Enregistre la réponse d'un utilisateur à une question.
- **`GET /api/reponses`** : Récupère toutes les réponses des utilisateurs.

### **Modèles de données :**

- **Questionnaire** :
    ```json
    {
      "type": "consommateur",
      "etapes": ["idEtape1", "idEtape2"]
    }
    ```

- **Question** :
    ```json
    {
      "idEtape": "idEtape",
      "descriptionQuestion": "Quelle est votre boisson préférée ?",
      "propositionsDeReponse": ["idProposition1", "idProposition2"]
    }
    ```

- **PropositionDeReponse** :
    ```json
    {
      "typeInput": "radio",
      "descriptionProposition": "Café"
    }
    ```

- **Reponse** :
    ```json
    {
      "userId": "idUser",
      "idQuestion": "idQuestion",
      "idsPropositionsDeReponse": ["idProposition1"],
      "reponseTexte": "Café noir, sans sucre."
    }
    ```

- **User** :
    ```json
    {
      "type": "non_anonyme",
      "nom": "Jean",
      "prenom": "Dupont",
      "email": "jean.dupont@example.com",
      "motDePasse": "supersecret"
    }
    ```

## 🛠️ Technologies Utilisées

- **Node.js** : Parce que c'est rapide, léger, et que tout le monde l'adore.
- **Express** : Pour simplifier les choses.
- **MongoDB** : Pour stocker vos précieuses données.
- **Mongoose** : Parce qu'on aime bien les schémas.

## 🙌 Contribution

Les contributions sont les bienvenues ! Si vous trouvez un bug ou avez une super idée, n'hésitez pas à ouvrir une issue ou une pull request. On promet de ne pas vous juger (sauf si votre code ne passe pas les tests).

## 🥳 Remerciements

Merci d'utiliser cette API ! Si vous l'aimez, parlez-en à vos amis. Si vous la détestez... eh bien, on espère que vous aimez quand même le café.

---

**NB** : Aucun développeur n'a été blessé dans la création de ce projet. Pour l'instant.

---

Avec un peu de chance, ce README vous fera sourire et vous guidera dans l'utilisation de votre API. 😄
