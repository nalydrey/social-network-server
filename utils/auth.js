import jwt from 'jsonwebtoken'


export const auth = (req, res, next) => {
    try {
        console.log('auth', req.headers.authorization);
        const token = req.headers.authorization 
        if(!token){
            return res.json({
                info: 'In order to do this action, you need to login or regiser'
            })
        }
        const decodedUser = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decodedUser.id
        next()
        
    } 
    catch (error) {
        
    }
}