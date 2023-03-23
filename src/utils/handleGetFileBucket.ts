import { GetObjectCommand } from '@aws-sdk/client-s3';
import client from '../config/connectBucket';

const getFile = async (fileName: string) => {
  const command = new GetObjectCommand({
    Key: fileName,
    Bucket: process.env.NAME_BUCKET_AWS
  });

  const result = await client.send(command);
  return result;
}

export default getFile;