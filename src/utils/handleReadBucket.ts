import client from '../config/connectBucket';
import { ListObjectsCommand } from '@aws-sdk/client-s3';

const getFiles = async () => {
  const command = new ListObjectsCommand({
    Bucket: process.env.NAME_BUCKET_AWS!
  });
  const  results = await client.send(command);
  return results;
}

export default getFiles;
