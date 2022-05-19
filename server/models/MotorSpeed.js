module.exports = (sequelize, DataTypes) => {
    const MotorSpeeds = sequelize.define("MotorSpeeds", {
        motor1Speed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        motor2Speed: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return MotorSpeeds;
}