import { Router } from 'express';
import upload from '../utils/handleStorage';
import uploadFile from '../utils/handleUploadBucket';
import getFile from '../utils/handleGetFileBucket';
import downloadFile from '../utils/handleDownloadFileBucket';
import getUrlSigned from '../utils/handleGetUrlFileBucket';

const storageRouter = Router();

storageRouter.post('/', upload.single('photos'), async (req, res) => {
  await uploadFile(req.fileName);
  res.send('upload finish')
});
storageRouter.get('/:fileName', async (req, res) => {
  const message = await getFile(req.params.fileName);
  res.json(message.$metadata);
});

storageRouter.get('/download/:fileName', async (req, res) => {
  const message = await downloadFile(req.params.fileName);
  res.json('success download');
})

storageRouter.get('/url/:filename', async (req, res) => {
  const result = await getUrlSigned(req.params.filename);
  res.json(result);
});

export default storageRouter;