import { sign } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import sequalizePaginate from 'sequelize-paginate';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      kid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'firstname cannot be empty',
          },
        },
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'surname cannot be empty',
          },
        },
      },
      othername: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      khuddam_no: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      muqam: {
        type: DataTypes.ENUM('Abuja', 'Dutse', 'Gwagwalada', 'Nassarawa', 'Suleja'),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'please choose a muqam',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'password cannot be empty',
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: 'phone number cannot be empty',
          },
        },
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'date of birth cannot be empty',
          },
        },
      },
      employment_status: DataTypes.ENUM('Employed', 'Non-employed', 'Self-employed'),
      employment_type: DataTypes.STRING,
      marital_status: DataTypes.ENUM('Single', 'Married', 'Divorced', 'Widow', 'Widower'),
      blood_group: DataTypes.STRING,
      genotype: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM('Active', 'Relocated', 'Inactive', 'Death'),
        defaultValue: 'Active',
      },
      qualification: DataTypes.ENUM(
        'Primary',
        'SSCE',
        'Bachelors',
        'Masters',
        'PHD',
        'National Diploma',
        'HND',
        'PGD',
        'Missionary',
        'Other',
        'LL.B',
        'LLB BL'
      ),
      address: DataTypes.STRING,
      occupation: DataTypes.STRING,
      numb_of_children: DataTypes.STRING,
    },
    {
      hooks: {
        async beforeCreate(user, options) {
          const salt = await bcrypt.genSalt(16);
          user.password = await bcrypt.hash(user.password, salt);
        },
      },
    }
  );

  User.prototype.generateAuthToken = function() {
    return sign(
      {
        sub: this.kid,
        firstname: this.firstname,
        surname: this.surname,
        muqam: this.muqam,
      },
      process.env.JWT_SECRET
    );
  };

  User.prototype.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
  };

  User.associate = ({ File }) => {
    // associations can be defined here
    User.hasMany(File, {
      foreignKey: 'uid',
      onDelete: 'CASCADE',
    });
  };

  sequalizePaginate.paginate(User);
  return User;
};
