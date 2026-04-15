
import { Request, Response, NextFunction } from "express";
import { ZodObject } from "zod";

const validate = (schema: ZodObject<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        status: "fail",
        errors: result.error.issues.map(e => ({
          field: e.path.join('.'),
          message: e.message
        }))
      });
    }

    next();
  };
};

export default validate;