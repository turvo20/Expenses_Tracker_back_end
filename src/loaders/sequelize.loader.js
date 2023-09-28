import { UserModel } from "../modules/models"


/**
 * Define asociaciones entre modelos Sequelize y sincroniza la base de datos.
 * @param {Object} sequelizeInstance - Instancia de Sequelize.
 */
export default async function sequelizeLoader(sequelizeInstance) {
    try {
        // Verifica que la instancia de Sequelize no sea nula o indefinida
        if (!sequelizeInstance) throw new Error('Error, sequelize instance is null or undefined')

        // ASSOCIATIONS
      
        await sequelizeInstance.sync({ alter: false })
            .then(async () => {
                console.log('Connection to db has been succesful')
            })
            .catch(err => console.error(err))
    } catch (error) {
        console.log(error)
    }
}