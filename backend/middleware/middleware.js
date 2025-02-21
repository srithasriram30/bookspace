import jwt from 'jsonwebtoken';


export const verifyJwtToken = (req,res,next) => {
    if (!req.header("authorization")) {
        return res.status(403).json({ message: "Authorization Denied" });
      }
      const jwtToken = req.header("authorization").split(" ")[1];
    
      try {
        const payload = jwt.verify(jwtToken, process.env.ACCESS_TOKEN_SECRET);
        req.user = payload.user;
        next();
      } catch (error) {
        console.error(error);
        res.status(403).json({ message: "Token is not valid" });
      }
}