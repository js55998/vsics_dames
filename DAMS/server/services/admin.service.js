import Admin from '../models/admin.model'

const loginUser = async ({ email }) => {
  const user = await Admin.findOne({ email });
  return user;
};

const getById = async (user_id) => {
  const user = await Admin.findById(user_id);
  return user;
};                                                                

module.exports = {
    loginUser,
    getById
};
