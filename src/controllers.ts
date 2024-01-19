import { Request, Response } from "express";
import fetch from 'node-fetch';

export async function searchPlaces(request: Request, response: Response) {
    const { name } = request.query;
    if (!name || Array.isArray(name)) {
        return response.status(400).json({
            error:
                "You must supply a single query param `name` to search for locations.",
        });
    }
    try {
        const response = await fetch(`https://geocode.maps.co/search?q=${name}&api_key=65a4fed00e84b807084661tisfc7f77`);

        if (!response.ok) {
            throw new Error('La requête a échoué.');
        }

        const responseData: any[] = await response.json();

        if (responseData && responseData.length > 0) {
            const cities: Array<string[]> = []
            responseData.forEach(city => {
                cities.push([city.place_id, city.display_name, city.lat, city.lon])
            });
            console.log(cities);
            return { cities };

        } else {
            throw new Error('Aucun résultat trouvé pour la ville spécifiée.');
        }
    } catch (error: any) {
        throw new Error(`Erreur lors de la récupération des coordonnées : ${error.message}`);
    }
}