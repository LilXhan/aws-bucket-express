import fs from 'fs';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { config }  from 'dotenv';
import client from '../config/connectBucket';
import path from 'path';

config();

const uploadFile = async (fileName: string) => {

  const stream = fs.createReadStream(path.join(__dirname, '../storage/' + fileName));

  const uploadParams: any = {
    Bucket: process.env.NAME_BUCKET_AWS!,
    Key: fileName,
    Body: stream
  }

  const command = new PutObjectCommand(uploadParams);

  const result = await client.send(command);
  console.log(result);
};

export default uploadFile;
