import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse): any => {
    res.status(200).json({ status: "OK" });
};
