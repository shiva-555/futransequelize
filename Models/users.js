
module.exports=(sequelize,DataTypes)=>{
    
    
    const candidate = sequelize.define('user',{
                
            username:{
                // type: Sequelize.DataTypes.STRING,
                type: DataTypes.STRING,
               
                allowNull : false
            },
            
            password :{
                // type: Sequelize.DataTypes.STRING
                type: DataTypes.STRING
            },
            
        });

        return candidate;
}