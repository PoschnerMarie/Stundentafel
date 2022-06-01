module.exports = (sequelize, Sequelize) => {
  const Lehrer = sequelize.define("tutorial", {
    Kuerzel: {
      type: Sequelize.STRING
    },
    Abwesenheitsnotiz: {
      type: Sequelize.STRING
    },
    Fortbildungs_ID: {
      type: Sequelize.INTEGER
    }
  });
 
  return Lehrer;
};