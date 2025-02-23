import jwt from 'jsonwebtoken';

export const userAuth = (req,res,next) => {
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
        res.status(403).json({ message: "User is not valid" });
      }
}


export const adminAuth = (req,res,next) => {
  if (!req.header("authorization")) {
      return res.status(403).json({ message: "Authorization Denied" });
    }
    const jwtToken = req.header("authorization").split(" ")[1];
  
    try {
      const payload = jwt.verify(jwtToken, process.env.ACCESS_TOKEN_SECRET);
      if(payload.user.role !== 'admin'){
        return res.status(403).json({ message: "Authorization Denied" });
      }
      req.user = payload.user;
      next();
    } catch (error) {
      console.error(error);
      res.status(403).json({ message: "User is not valid" });
    }
}



export const createCookie = (res, token) => {
    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
     
}