import { useEffect, useState } from 'react';

export const useImage = (stationCode: string) => {
    const [image, setImage] = useState<any>(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/${stationCode}.jpg`);
                setImage(response.default);
            } catch (err: any) {
                console.log('Image not found');
                const response = await import(`../assets/default.png`);
                setImage(response.default);
            }
        };

        fetchImage();
    }, [stationCode]);

    return image;
};
