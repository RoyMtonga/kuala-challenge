import { VehicleModel } from "@/types";


const URL = `${process.env.NEXT_PUBLIC_KUALA_API_URL}/model`

const getModels = async (): Promise<VehicleModel[]> => {
    const res = await fetch(URL)

    const result = await res.json();
    return result.data;
}

export default getModels;