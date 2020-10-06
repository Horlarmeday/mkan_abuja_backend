import { Sequelize } from 'sequelize';

const { User, File } = require('../../database/models');

const { Op } = Sequelize;

/**
 * create user account in the DB
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function createUser(data) {
  return User.create(data);
}

/**
 * query user account in the DB by phone
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function findUserByPhone(data) {
  return User.findOne({ where: { phone: data } });
}

/**
 * query user account in the DB by khuddam_no
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function findUserByKhuddamNo(data) {
  return User.findOne({ where: { khuddam_no: data } });
}

/**
 * query user account in the DB by khuddam_no
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function getUserById(data) {
  return User.findByPk(data);
}

/**
 * update user
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function updateUser(data) {
  const user = await getUserById(data.kid);
  return user.update(data);
}

/**
 * delete user
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function deleteUser(data) {
  return User.destroy({ where: { kid: data } });
}

/**
 * get users
 *
 * @function
 * @returns {json} json object with user data
 * @param currentPage
 * @param pageLimit
 */
export async function getUsers(currentPage = 1, pageLimit = 10) {
  return User.paginate({
    page: currentPage,
    paginate: pageLimit,
    order: [['createdAt', 'DESC']],
  });
}

/**
 * filter users
 *
 * @function
 * @returns {json} json object with user data
 * @param currentPage
 * @param pageLimit
 * @param filter
 */
export async function filterUsers(currentPage = 1, pageLimit = 10, filter) {
  return User.paginate({
    page: currentPage,
    paginate: pageLimit,
    order: [['createdAt', 'DESC']],
    where: {
      muqam: filter,
    },
  });
}

/**
 * search users
 *
 * @function
 * @returns {json} json object with user data
 * @param currentPage
 * @param pageLimit
 * @param search
 */
export async function searchUsers(currentPage = 1, pageLimit = 10, search) {
  return User.paginate({
    page: currentPage,
    paginate: pageLimit,
    order: [['createdAt', 'DESC']],
    where: {
      [Op.or]: [
        {
          surname: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          khuddam_no: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          firstname: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          muqam: {
            [Op.like]: `%${search}%`,
          },
        },
      ],
    },
  });
}

/**
 * dashboard user analytics
 *
 * @function
 * @returns {json} json object with users analytics data
 */
export async function usersAnalytics() {
  const abujaMuqam = User.count({
    where: { muqam: 'Abuja' },
  });

  const sulejaMuqam = User.count({
    where: { muqam: 'Suleja' },
  });

  const nassarawaMuqam = User.count({
    where: { muqam: 'Nassarawa' },
  });

  const gwagwaladaMuqam = User.count({
    where: { muqam: 'Gwagwalada' },
  });

  const dutseMuqam = User.count({
    where: { muqam: 'Dutse' },
  });

  const [abuja, suleja, nassarawa, gwagwalada, dutse] = await Promise.all([
    abujaMuqam,
    sulejaMuqam,
    nassarawaMuqam,
    gwagwaladaMuqam,
    dutseMuqam,
  ]);

  return {
    abuja,
    suleja,
    nassarawa,
    gwagwalada,
    dutse,
  };
}

/**
 * dashboard marital status analytics
 *
 * @function
 * @returns {json} json object with users analytics data
 */
export async function maritalStatusAnalytics() {
  const marriedStats = User.count({
    where: { marital_status: 'Married' },
  });

  const singleStats = User.count({
    where: { marital_status: 'Single' },
  });

  const divorcedStats = User.count({
    where: { marital_status: 'Divorced' },
  });

  const widowerStats = User.count({
    where: { marital_status: 'Widower' },
  });

  const [married, single, divorced, widower] = await Promise.all([
    marriedStats,
    singleStats,
    divorcedStats,
    widowerStats,
  ]);

  return {
    married,
    single,
    divorced,
    widower,
  };
}

/**
 * dashboard card analytics
 *
 * @function
 * @returns {json} json object with users analytics data
 */
export async function cardAnalytics() {
  const khuddamCount = User.count();

  const muqamCount = User.count({
    where: {
      [Op.or]: [
        { muqam: 'Abuja' },
        { muqam: 'Suleja' },
        { muqam: 'Gwagwalada' },
        { muqam: 'Dutse' },
        { muqam: 'Nassarawa' },
      ],
    },
  });

  const fileCount = File.count();

  const excos = 10;

  const [khuddam, muqam, file] = await Promise.all([khuddamCount, muqamCount, fileCount]);

  return {
    khuddam,
    muqam,
    file,
    excos,
  };
}
