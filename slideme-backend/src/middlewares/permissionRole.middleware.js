export const permissionRole = (permissionRoles) => {
    return (req, res, next) => {
      const { urole } = req.user;
      try {
        const hasPermission = permissionRoles.includes(urole);
  
        if (!hasPermission) {
          throw new Error(`Permission denied for role '${urole}' on this API.`);
        }
  
        next();
      } catch (err) {
        return res.status(401).json({
          status: false,
          message: err.message,
          data: null,
        });
      }
    };
  };
  