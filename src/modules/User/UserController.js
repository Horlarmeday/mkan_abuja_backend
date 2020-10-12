/**
 * User controller handles all requests that has to do with user
 *
 * - registerUser - allow users to create a new account
 * - loginUser - allow users to login to their account
 * - getUserProfile - allow users to view their profile info
 * - updateUserProfile - allow user to update their profile info like firstname, lastname, email, password, phone
 */

import _ from 'lodash';
import { validateUser, validateUserLogin } from '../../middleware/validations';
import UserService from './UserService';
import {
  cardAnalytics,
  getUserById,
  maritalStatusAnalytics,
  usersAnalytics,
} from './userRepository';
import constant from '../../helpers/constants';

// const fs = require('fs');
// const { User } = require('../../database/models');

/**
 *
 *
 * @class UserController
 */
class UserController {
  /**
   * create a user record
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status, user data and access token
   */
  static async registerUser(req, res, next) {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    const data = Object.assign(req.body, { password: constant.defaultPassword });

    try {
      const user = await UserService.createUserService(data);

      return res.status(201).json({
        message: 'Successful, account created!',
        data: _.pick(user, [
          'kid',
          'firstname',
          'surname',
          'othername',
          'phone',
          'status',
          'createdAt',
          'date_of_birth',
          'muqam',
          'khuddam_no',
          'employment_status',
          'employment_type',
          'marital_status',
          'qualification',
          'occupation',
          'numb_of_children',
          'blood_group',
          'genotype',
          'address',
        ]),
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * login a user
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status, user data and access token
   */
  static async loginUser(req, res, next) {
    const { error } = validateUserLogin(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    try {
      const { token, user } = await UserService.userLoginService(req.body);

      return res.status(200).json({
        message: `Welcome, ${user.firstname}!`,
        token,
        data: _.pick(user, ['kid', 'firstname', 'surname', 'phone', 'muqam']),
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * get user profile
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with user profile data
   */
  static async getUserProfile(req, res, next) {
    try {
      const user = await getUserById(req.user.sub);
      if (!user) return res.status(404).json('User not found');

      return res.status(200).json({
        message: 'Success',
        data: user,
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * get one user profile
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with user profile data
   */
  static async getOneUser(req, res, next) {
    try {
      const user = await getUserById(req.params.user);
      if (!user) return res.status(404).json('User not found');

      return res.status(200).json({
        message: 'Success',
        data: user,
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * update user profile data such as surname, firtsname etc
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with user profile data
   */
  static async updateUser(req, res, next) {
    try {
      const user = await UserService.updateUserService(req.body);

      return res.status(200).json({
        message: 'Data updated successfully!',
        data: user,
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * delete user profile
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with user profile data
   */
  static async deleteUser(req, res, next) {
    try {
      const user = await UserService.deleteUserService(req.body);

      return res.status(200).json({
        message: 'Member deleted successfully!',
        data: user,
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * get all users
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with users data
   */
  static async getUsers(req, res, next) {
    try {
      const users = await UserService.getUsers(req.query);

      return res.status(200).json({
        message: 'Data retrieved',
        data: users,
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * dashboard analytics
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with dashboard analytics data
   */
  static async dashboardAnalytics(req, res, next) {
    try {
      const userData = await usersAnalytics();
      const maritalData = await maritalStatusAnalytics();
      const cardData = await cardAnalytics();
      const userDataValues = Object.values(userData);
      const maritalDataValues = Object.values(maritalData);

      return res.status(200).json({
        message: 'Data retrieved',
        data: {
          userData,
          maritalData,
          cardData,
          userDataValues,
          maritalDataValues,
        },
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * change user password
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with users data
   */
  static async changePassword(req, res, next) {
    try {
      const user = await UserService.changePasswordService(req.body, req.user.sub);

      return res.status(200).json({
        message: 'Password changed!',
        data: user,
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * verify user account
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with user data
   */
  static async verifyAccount(req, res, next) {
    try {
      const user = await UserService.verifyUserAccountService(req.body.field);

      return res.status(200).json({
        message: 'You have an existing account please login!',
        data: user,
      });
    } catch (e) {
      return next(e);
    }
  }

  /**
   * verify user account
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with user data
   */
  static async exportUsers(req, res, next) {
    try {
      const users = await UserService.exportUsersService(req.body.muqam);

      return res.status(200).json({
        message: 'Data retrieved',
        data: users,
      });
    } catch (e) {
      return next(e);
    }
  }
  // static delay() {
  //   return new Promise(resolve => setTimeout(resolve, 300));
  // }
  //
  // static async delayedLog(user) {
  //   // notice that we can await a function
  //   // that returns a promise
  //   await UserController.delay();
  //
  //   await User.create({
  //     firstname: user.firstname,
  //     surname: user.surname,
  //     othername: user.othername,
  //     phone: user.phone,
  //     status: user.status,
  //     date_of_birth: user.date_of_birth,
  //     muqam: user.muqam,
  //     khuddam_no: user.khuddam_no,
  //     employment_status: user.employment_status,
  //     employment_type: user.employment_type,
  //     marital_status: user.marital_status,
  //     qualification: user.qualification,
  //     occupation: user.occupation,
  //     numb_of_children: user.numb_of_children,
  //     blood_group: user.blood_group,
  //     genotype: user.genotype,
  //     address: user.address,
  //     password: '123456',
  //   });
  // }

  // static async processArray(array) {
  //   console.log('Upload Starting...');
  //   const promises = array.map(UserController.delayedLog);
  //   // wait until all promises are resolved
  //   await Promise.all(promises);
  // }

  // static async uploadUsers(req, res, next) {
  //   try {
  //     const json = fs.readFileSync('src/public/khuddam.json');
  //     const jsonBook = JSON.parse(json);
  //
  //     const users = await UserController.processArray(jsonBook);
  //
  //     console.log('Finished upload!');
  //     return res.status(200).json({
  //       message: 'Users uploaded!',
  //       data: users,
  //     });
  //   } catch (e) {
  //     console.log(e)
  //     throw new Error(e);
  //   }
  // }
}
export default UserController;
