"use client"
import getModels from "@/actions/get-models"
import { DataTable } from "@/components/ui/data-table";
import { VehicleModel } from "@/types";
import React, { useEffect, useState } from 'react'
import { columns } from "./columns";


const Models = () => {
    const [models, setModels] = useState<VehicleModel[]>([]);

    useEffect(() => {
        const fetchMakes = async () => {
            const data = await getModels();
            setModels(data || []);
        };
        fetchMakes();
    }, []);
    return (
        <div>
            <div className="py-5">
                <DataTable searchKey="model" columns={columns} data={models} />
            </div>
        </div>
    )
}

export default Models