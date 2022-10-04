import { Request, Response, NextFunction } from "express";
import { User } from "../../Database/models/user";

async function addUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { IP, meta } = req.body;
    // res.status(200).send(req.body);
    const user = new User({
      IP,
      meta,
    });
    await user.save();

    res.send("Tacking successful");
  } catch (error) {
    throw error;
  }
}

async function addTrack(req: Request, res: Response, next: NextFunction) {
  try {
    const { IP, meta, id } = req.body;
    // res.status(200).send(req.body);
    const user = new User({
      IP,
      meta,
      id,
    });
    await user.save();

    res.send("Tacking successful");
  } catch (error) {
    throw error;
  }
}

async function getTracks(req: Request, res: Response, next: NextFunction) {
  try {
    const { IP, meta, id } = req.body;
    // res.status(200).send(req.body);
    const user = await User.find({
      IP,
    }).exec();

    res.send(user);
  } catch (error) {
    throw error;
  }
}

export { addUser, addTrack, getTracks };
