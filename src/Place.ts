import fetch from 'node-fetch';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';


@Entity()
export class Place extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ unique: true })
    geocodeApiPlaceId!: number

    @Column()
    latitude?: number;

    @Column()
    longitude?: number;

    static async CreateNew(geocodeApiPlaceId: number, name: string, latitude: number, longitude: number) {
        const place = new Place();
        place.name = name;
        place.geocodeApiPlaceId = geocodeApiPlaceId;
        place.latitude = latitude;
        place.longitude = longitude;

        await place.save();
        return place;
    }

    static async getAll() {

    }


    static async getCoordinates(city: string): Promise<{ latitude: number; longitude: number }> {
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
}
