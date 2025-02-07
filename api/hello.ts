import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
    return res.json({
        parameters : `name`,
      name : name,
    message: `Hello ${name}!`,
  })
}
