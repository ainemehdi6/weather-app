import fetch from 'node-fetch';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';


@Entity()
export class Place extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    latitude?: number;

    @Column()
    longitude?: number;

    static async getAll() {

    }


    static async getCoordinates(city: string): Promise<{ latitude: number; longitude: number; }> {
        try {
            const response = await fetch(`https://geocode.maps.co/search?q=${city}&api_key=65a4fed00e84b807084661tisfc7f77`);

            if (!response.ok) {
                throw new Error('La requête a échoué.');
            }

            const responseData: any[] = await response.json();

            if (responseData && responseData.length > 0) {
                return { latitude: parseFloat(responseData[0].lat), longitude: parseFloat(responseData[0].lon) };

            } else {
                throw new Error('Aucun résultat trouvé pour la ville spécifiée.');
            }
        } catch (error: any) {
            throw new Error(`Erreur lors de la récupération des coordonnées : ${error.message}`);
        }
    }

    static async addPlace(name: string, city: string): Promise<Place> {
        const coordinates = await Place.getCoordinates(city);
        if (!coordinates) {
            throw new Error('Aucune coordonnée trouvée');
        }

        const place = new Place();
        place.name = name;

        place.latitude = coordinates.latitude;
        place.longitude = coordinates.longitude;

        await place.save();
        return place;
    }

    static async deletePlace(id: number): Promise<void> {
        try {
            const placeToDelete = await Place.findOne({ where: { id } });
            if (!placeToDelete) {
                throw new Error(`Le lieu n'existe pas`);
            }

            await placeToDelete.remove();
        } catch (error) {
            throw new Error(`Une erreur c'est produite lors de la suppresion du Lieu`);
        }
    }

}
