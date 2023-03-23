import { GetObjectCommand } from '@aws-sdk/client-s3';
import client from '../config/connectBucket';
import fs from 'fs';
import path from 'path';

const downloadFile = async (fileName: string) => {
  const command = new GetObjectCommand({
    Key: fileName,
    Bucket: process.env.NAME_BUCKET_AWS
  });

  const result = await client.send(command);
  result.Body.pipe(fs.createWriteStream(path.join(__dirname, `../images/${fileName}`)));
}

export default downloadFile;