const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return res
      .status(400)
      .json({
        message:
          "Veuillez fournir tous les champs nécessaires à la création de l'utilisateur admin",
      });
  }

  try {
    const currentUser = await User.findOne({ email });

    if (!currentUser) {
      return res
        .status(401)
        .json({ message: "Votre identifiant ou mot de passe est incorrect." });
    }

    const isValidePass = await bcrypt.compare(password, currentUser.password);

    if (!isValidePass) {
      return res
        .status(401)
        .json({ message: "Votre identifiant ou mot de passe est incorrect." });
    }

    const payload = { name: currentUser.name, id: currentUser._id };

    const token = jwt.sign(payload, process.env.PRIVATE_KEY);

    currentUser.connexionToken = token;
    await currentUser.save();

    return res
      .status(200)
      .json({
        message: `Bienvenue ${currentUser.name}`,
        token: currentUser.connexionToken,
      });
  } catch (error) {
    return res
      .status(500)
      .json({
        err: error.message,
        message:
          "Il y a eu un problème avec votre connexion , veuillez réessayer.",
      });
  }
};
