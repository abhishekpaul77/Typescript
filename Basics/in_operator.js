var isAdminCheck = function (account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
};
