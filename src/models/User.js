const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true
});

// Método para encriptar la contraseña del usuario
UserSchema.methods.encrypt = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

// Método que permite comparar la contraseña ingresada con la que
// se encuentra en la base de datos, es un boolean
UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = model('User', UserSchema);