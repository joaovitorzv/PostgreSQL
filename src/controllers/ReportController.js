const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res) {
  // Find all users who email ends with @rocketseat.com
  // Of these users search for who lives in "Gilherme gembala St"
  // Of these users search for techs that starts with React

  const users = await User.findAll({
    attributes: ['name', 'email'],
    where: {
      email: {
        [Op.iLike]: '%@rocketseat.com%'
      }
    },
    include: [
      { association: 'addresses', where: { street: 'Guilherme gembala'} }, 
      { 
        association: 'techs',
        where: {
          name: {
            [Op.iLike]: 'React%'
          }
        }
      },
    ]
  });

  return res.json(users);
  }
};