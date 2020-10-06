module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      kid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
      firstname: {
        type: Sequelize.STRING,
      },
      surname: {
        type: Sequelize.STRING,
      },
      othername: {
        type: Sequelize.STRING,
      },
      khuddam_no: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      muqam: {
        type: Sequelize.ENUM('Abuja', 'Dutse', 'Gwagwalada', 'Nassarawa', 'Suleja'),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      employment_status: Sequelize.ENUM('Employed', 'Non-employed', 'Self-employed'),
      employment_type: Sequelize.STRING,
      marital_status: Sequelize.ENUM('Single', 'Married', 'Divorced', 'Widow', 'Widower'),
      blood_group: Sequelize.STRING,
      genotype: Sequelize.STRING,
      status: {
        type: Sequelize.ENUM('Active', 'Relocated', 'Inactive', 'Death'),
        defaultValue: 'Active',
      },
      qualification: Sequelize.ENUM(
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
      address: {
        type: Sequelize.STRING,
      },
      occupation: Sequelize.STRING,
      numb_of_children: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface /* , Sequelize */) => {
    return queryInterface.dropTable('Users');
  },
};
