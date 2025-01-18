import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: 'Users'
})

class Users extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    declare ID_User: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    declare First_Name: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: true
    })
    declare Middle_Name: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: true
    })
    declare Surname: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: true
    })
    declare Last_Name: string;
}

export default Users;