const getUserName = (state) => state.auth.user.name;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getUserName,
  getIsLoggedIn,  
  getIsFetchingCurrent,
};
export default authSelectors;