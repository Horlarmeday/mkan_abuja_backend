/* eslint-disable camelcase */
import mime from 'mime';
import fs from 'fs';
import _ from 'lodash';
import { deleteBoxFile, uploadBoxFile } from '../../helpers/box';
import {deleteFile, deleteMultipleFiles, getFileById, getFiles, searchFiles, uploadFile} from './fileRepository';

class FileService {
  /**
   * file upload
   *
   * @static
   * @returns {json} json object with file data
   * @param body
   * @memberOf FileService
   */
  static async uploadFileService(body) {
    try {
      const filepath = `src/public/file${Date.now()}.${mime.getExtension(body.file.mimetype)}`;
      await body.file.mv(filepath);

      const file = await uploadBoxFile(body.file.name, filepath);

      fs.unlinkSync(filepath);
      const data = Object.assign(body, { newFile: file.shared_link.url, id: file.id });
      return await uploadFile(data);
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
   * get files
   *
   * @static
   * @returns {json} json object with files data
   * @param body
   * @memberOf FileService
   */
  static async getFilesService(body) {
    const { currentPage, pageLimit, search } = body;
    if (body.search) {
      return searchFiles(Number(currentPage), Number(pageLimit), search);
    }
    return getFiles(Number(currentPage), Number(pageLimit));
  }

  /**
   * delete multiple files
   *
   * @static
   * @returns {json} json object with files id
   * @param body
   * @memberOf FileService
   */
  static async deleteMultipleFilesService(body) {
    const ids = _.map(body.selectedFiles, 'fid');

    await deleteBoxFile(body.file_id);

    return deleteMultipleFiles(ids);
  }

  /**
   * delete single file
   *
   * @static
   * @returns {json} json object with file id
   * @param body
   * @memberOf FileService
   */
  static async deleteFileService(body) {
    const file = await getFileById(body.fileId);

    await deleteBoxFile(file.file_id);

    return deleteFile(file.fid);
  }
}

export default FileService;
