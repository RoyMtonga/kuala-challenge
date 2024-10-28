"use client"
import getVariants from "@/actions/get-variant"
import { DataTable } from "@/components/ui/data-table";
import { VehicleVariant } from "@/types";
import React, { useEffect, useState } from 'react'
import { columns } from "./columns";


const Variants = () => {
    const [variants, setVariants] = useState<VehicleVariant[]>([]);

    useEffect(() => {
        const fetchMakes = async () => {
            const data = await getVariants();
            setVariants(data || []);
        };
        fetchMakes();
    }, []);
    return (
        <div>
            <div className="py-5">
                <DataTable searchKey="name" columns={columns} data={variants} />
            </div>
        </div>

    )
}

export default Variants