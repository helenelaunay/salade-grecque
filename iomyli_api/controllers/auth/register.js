const User = require("../../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10; // Nombre de tours pour le salage du mot de passe

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Response}
 */

module.exports = async (req, res) => {
    console.log(req.body)
  const { name, email, password } = req.body;
  try {
    if (!name && !email && !password) {
        //return false
        return res
          .status(400)
          .json({
            message:
              "Veuillez fournir tous les champs nécessaires à la création de l'utilisateur",
          });
      }
    
      // Hachage du mot de passe
      const hashPassword = await bcrypt.hash(password, saltRounds);
      console.log(name, email, hashPassword);   
      
      const adminUser = new User({name,email,password: hashPassword});
        
      await adminUser.save();
    
      //return true
      return res.status(200).json({ message: `Bonjour ${name}, votre compte a bien été créé.` });
  } catch (error) {
    // Gestion des erreurs et retour d'une réponse appropriée
    return res
      .status(400)
      .json({
        err: error.message,
        message:
          "Il y a eu un problème avec votre inscription, veuillez réessayer.",
      });
  }
};

