import multer  from 'multer';
import path from 'path';

const extractExt = (file: string) => {
  return file.split('.').pop();
};

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, path.join(__dirname, '../storage'));
  },
  async filename(req, file, callback) {
    const ext = extractExt(file.originalname); 
    const uniqueFix = Date.now() + '-' + Math.round(Math.random() *  1E9);
    const fileName = file.fieldname + '-' + uniqueFix + '.' + ext;
    req.fileName = fileName
    callback(null, fileName);
  },
});

const upload = multer({storage: storage});

export default upload;

