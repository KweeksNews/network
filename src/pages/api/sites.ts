import sites from '../../data/sites.json';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  if (req.method === 'GET') {
    return new Response(
      JSON.stringify({
        success: true,
        data: sites,
      }),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      },
    );
  }
}
