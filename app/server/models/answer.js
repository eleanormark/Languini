module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: models => {
        Answer.belongsTo(models.Translation)
        Answer.belongsTo(models.User)
        Answer.hasMany(models.Comment)
        Answer.hasMany(models.Votes)
      }
    }
  })
  return Answer
}
