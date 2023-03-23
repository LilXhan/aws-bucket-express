import { GetObjectCommand } from '@aws-sdk/client-s3';
import client from '../config/connectBucket';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const getUrlSigned = async (fileName: string) => {
  const command = new GetObjectCommand({
    Bucket: process.env.NAME_BUCKET_AWS!,
    Key: fileName
  });

  return await getSignedUrl(client, command, {expiresIn: 3600})
}

export default getUrlSigned;