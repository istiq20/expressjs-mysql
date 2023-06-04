const multer  = require('multer');
// const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images');
    },
    filename: function (req, file, cb) {
      const timestamp = new Date().getTime();
      const originalname = file.originalname;
    //   console.log(file);
    //   const fileName = file.filename;
    //   const extension = path.extname(file.originalname);
      cb(null, `${timestamp}-${originalname}`);
    }
});
  
const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1000 // 3mb
    }
});

module.exports = upload;