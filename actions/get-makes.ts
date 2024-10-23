import { VehicleMake } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_KUALA_API_URL}/get-vehicle-makes`

const getMakes = async (): Promise<VehicleMake[]> => {
    const res = await fetch(URL)

    const result = await res.json();
    return result.data;
}

export default getMakes;