import {Sequelize} from 'sequelize';

const { File } = require('../../database/models');

const { Op } = Sequelize;

/**
 * create user account in the DB
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function uploadFile(data) {
  return File.create({
    name: data.name,
    category: data.category,
    file_url: data.newFile,
    file_id: data.id,
    kid: data.sub,
  });
}

/**
 * query file in the DB by by id
 *
 * @function
 * @returns {json} json object with file data
 * @param data
 */
export async function getFileById(data) {
  return File.findByPk(data);
}

/**
 * update file
 *
 * @function
 * @returns {json} json object with file data
 * @param data
 */
export async function updateFile(data) {
  const file = await getFileById(data.kid);
  return file.update(data);
}

/**
 * get files
 *
 * @function
 * @returns {json} json object with files data
 * @param currentPage
 * @param pageLimit
 */
export async function getFiles(currentPage = 1, pageLimit) {
  return File.paginate({
    page: currentPage,
    paginate: pageLimit,
    order: [['createdAt', 'DESC']],
  });
}

/**
 * search files
 *
 * @function
 * @returns {json} json object with files data
 * @param currentPage
 * @param pageLimit
 * @param search
 */
export async function searchFiles(currentPage = 1, pageLimit, search) {
  return File.paginate({
    page: currentPage,
    paginate: pageLimit,
    order: [['createdAt', 'DESC']],
    where: {
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          category: {
            [Op.like]: `%${search}%`,
          },
        },
      ],
    },
  });
}

/**
 * delete multiple files uploaded
 *
 * @function
 * @returns {json} json object with files data
 */
export async function deleteMultipleFiles(ids) {
  return File.destroy({ where: { fid: ids } }, { force: true });
}

/**
 * delete single file uploaded
 *
 * @function
 * @returns {json} json object with file data
 */
export async function deleteFile(id) {
  return File.destroy({ where: { fid: id } }, { force: true });
}
