import { S3Client } from '@aws-sdk/client-s3';
import { config }  from 'dotenv';

config()

const client = new S3Client({
  region: process.env.REGION_BUCKET_AWS!,
  credentials: {
    accessKeyId: process.env.PUBLIC_ACCESS_KEY_BUCKET_AWS!,
    secretAccessKey: process.env.SECRET_KEY_BUCKET_AWS!
  }
});

export default client;