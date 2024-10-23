import { VehicleVariant } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_KUALA_API_URL}/get-vehicle-variants/24`

const getVariants = async (): Promise<VehicleVariant[]> => {
    const res = await fetch(URL)

    const result = await res.json();
    return result.data;
}

export default getVariants;