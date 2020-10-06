import { validateFileUpload } from '../../middleware/validations';
import FileService from './FileService';
import UserService from "../User/UserService";

/**
 *
 *
 * @class UserController
 */
class FileController {
  /**
   * upload a file
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status, file data
   */
  static async uploadFile(req, res, next) {
    const { error } = validateFileUpload(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    if (!req.files || Object.keys(req.files).length === 0)
      return res.status(400).json('No files were chosen.');

    const newFile = req.files.files;
    const data = Object.assign(req.body, { file: newFile, sub: req.user.sub });

    try {
      const file = await FileService.uploadFileService(data);

      return res.status(201).json({
        message: 'Successful, file uploaded!',
        data: file,
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * get all files
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with files data
   */
  static async getFiles(req, res, next) {
    try {
      const files = await FileService.getFilesService(req.query);

      return res.status(200).json({
        message: 'Data retrieved',
        data: files,
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * delete multiple selected files
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with files data
   */
  static async deleteMultipleFiles(req, res, next) {
    try {
      const files = await FileService.deleteMultipleFilesService(req.body);

      return res.status(200).json({
        message: 'Files deleted',
        data: files,
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * delete single file
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with file data
   */
  static async deleteFile(req, res, next) {
    try {
      const file = await FileService.deleteFileService(req.body);

      return res.status(200).json({
        message: 'File deleted!',
        data: file,
      });
    } catch (e) {
      return next(e);
    }
  }
}

export default FileController;
