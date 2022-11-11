import { DataTypes, Model } from "sequelize"
import sequelize from "../configurations/sqlite"


export class Doc extends Model {
    declare id?: number;
    declare path: string;
    declare title: string
    declare description: string
    declare author: string
    declare product_link: string
    declare category: string
    declare subcategory: string
    declare draft: boolean
    declare tags: string
    declare banner: string
    declare thumbnail: string
    declare handle: string
}
Doc.init({
    path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    product_link: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    subcategory: {
        type: DataTypes.STRING
    },
    banner: {
        type: DataTypes.STRING
    },
    thumbnail: {
        type: DataTypes.STRING
    },
    draft: {
        type: DataTypes.BOOLEAN
    },
    tags: {
        type: DataTypes.STRING
    },
    handle: {
        type: DataTypes.STRING
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Doc' // We need to choose the model name
});

sequelize.sync();


