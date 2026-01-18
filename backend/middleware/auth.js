const jwt = require("jsonwebtoken");
const {config} = require("../config/Config");

async function verifyToken(req, res, next) {
    console.log('Verify Token middleware');
    let authorization = req.headers.authorization;
    if (!authorization) {
        res.status(401).json({
            error: 'No token provided',
        }).end();
    }
    else
    {
        //Bearer token
        let token = authorization.substring("Bearer ".length);
        if(!token){
            res.status(401).json({
                error: 'No token provided',
            }).end();
        }
        else
        {
            try
            {
                let verifiedUser = jwt.verify(token, config.TOKEN_SECRET);
                if(!verifiedUser){
                    res.status(401).json({
                        error: 'Invalid token',
                    }).end();
                }
                else
                {
                    req.authUser = verifiedUser;
                    next();
                }
            }
            catch(err){
                res.status(401).json({
                    error: 'Invalid token',
                })
            }

        }
    }
}
function hasRole(roleName) {
    return async function(req, res, next) {
        let authUser = req.authUser;
        if(authUser.role != roleName){
            res.status(403).json({
                message:"Invalid user role"
            })
        }
        else
        {
            next();
        }
    }
}
module.exports = {
    verifyToken,
    hasRole,
}