import sequelizePaginate from 'sequelize-paginate';

module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define(
    'File',
    {
      fid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'file name cannot be empty',
          },
        },
      },
      kid: DataTypes.INTEGER,
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'category cannot be empty',
          },
        },
      },
      file_url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'file cannot be empty',
          },
        },
      },
      file_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'file id cannot be empty',
          },
        },
      },
      uid: DataTypes.INTEGER,
    },
    {}
  );
  File.associate = ({ User }) => {
    // associations can be defined here
    File.belongsTo(User, {
      foreignKey: 'kid',
    });
  };

  sequelizePaginate.paginate(File);
  return File;
};
