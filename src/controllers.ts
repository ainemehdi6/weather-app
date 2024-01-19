import { Request, Response } from "express";

export function searchPlaces(request: Request, response: Response) {
    const { name } = request.query;
    if (!name || Array.isArray(name)) {
        return response.status(400).json({
            error:
                "You must supply a single query param `name` to search for locations.",
        });
    }
    // TODO: implement behavior
    return response.json({});
}