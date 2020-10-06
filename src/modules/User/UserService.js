import bcrypt from 'bcryptjs';
import {
  createUser,
  deleteUser,
  filterUsers,
  findUserByKhuddamNo,
  findUserByPhone,
  getUserById,
  getUsers,
  searchUsers,
  updateUser,
} from './userRepository';

class UserService {
  /**
   * create user account
   *
   * @static
   * @returns {json} json object with user data
   * @param body
   * @memberOf UserService
   */
  static async createUserService(body) {
    const existingUser = await findUserByPhone(body.phone);
    if (existingUser) throw new Error('Your record already exists');

    return createUser(body);
  }

  /**
   * login user
   *
   * @static
   * @returns {json} json object with user data
   * @param body
   * @memberOf UserService
   */
  static async userLoginService(body) {
    const user = await findUserByKhuddamNo(body.khuddam_no);
    if (!user) throw new Error('Invalid khuddam number');

    const validPassword = await user.comparePassword(body.password);
    if (!validPassword) throw new Error('Invalid password');

    const token = user.generateAuthToken();

    return {
      user,
      token,
    };
  }

  /**
   * create user account
   *
   * @static
   * @returns {json} json object with user data
   * @param body
   * @memberOf UserService
   */
  static async updateUserService(body) {
    return updateUser(body);
  }

  /**
   * get users
   *
   * @static
   * @returns {json} json object with users data
   * @param body
   * @memberOf UserService
   */
  static async getUsers(body) {
    const { currentPage, pageLimit, search, filter } = body;
    if (search) {
      return searchUsers(Number(currentPage), Number(pageLimit), search);
    }

    if (filter) {
      return filterUsers(Number(currentPage), Number(pageLimit), filter);
    }

    return getUsers(Number(currentPage), Number(pageLimit));
  }

  /**
   * change user password
   *
   * @static
   * @returns {json} json object with user data
   * @param body
   * @param sub
   * @memberOf UserService
   */
  static async changePasswordService(body, sub) {
    const user = await getUserById(sub);
    if (!user) throw new Error('Invalid user id');

    const { newPassword, oldPassword, confirmPassword } = body;
    if (newPassword !== confirmPassword)
      throw new Error('Your new password must be the same with confirm password');

    const isSamePassword = await user.comparePassword(oldPassword);
    if (!isSamePassword) throw new Error('Old password not correct');

    const salt = await bcrypt.genSalt(16);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    return user;
  }

  /**
   * delete user account
   *
   * @static
   * @returns {json} json object with user data
   * @param body
   * @memberOf UserService
   */
  static async deleteUserService(body) {
    return deleteUser(body.memberId);
  }
}
export default UserService;
