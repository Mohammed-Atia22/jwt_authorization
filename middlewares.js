const authpage = (permission) => {
    return (req,res,next)=>{
        const userrole = req.body.role;
        if(permission.includes(userrole)){
            next()
        } else{
            return res.status(401).json('you do not have permission');
        }
    };
};

const authcourse = (req,res,next) => {
    const coursenumber = parseInt(req.params.number);
    if(req.body.courses.includes(coursenumber)){
        next();
    } else{
        return res.status(401).json('you do not have access to courses');
    }
};


module.exports = {authpage,authcourse};