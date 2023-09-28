import { Sequelize } from "sequelize";
import { sequelizeInstance as db } from "../../config";
const { DataTypes, UUIDV4, Model, NOW } = Sequelize


export default class  ExpenseModel extends Model {}



ExpenseModel.init({
    expense_id:{
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    user_id:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:'User',
            key:'id'
        }
    },
    category_id :{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'ExpenseCategories',
            key:'category_id'
        }
    },
    expense_date :{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:NOW()
    },
    amount :{
        type:DataTypes.FLOAT,
        allowNull:false
    }
},{
    sequelize:db,
    modelName:'ExpenseRecords'
})