import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      name: "김당근",
      email: "carrot@market.com",
    },
  });

  res.json({
    ok: true,
  });
}
