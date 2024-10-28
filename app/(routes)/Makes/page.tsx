"use client";
import getMakes from "@/actions/get-makes";
import { VehicleMake } from "@/types";
import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

const Makes = () => {
    const [makes, setMakes] = useState<VehicleMake[]>([]);

    useEffect(() => {
        const fetchMakes = async () => {
            const data = await getMakes();
            setMakes(data || []);
        };
        fetchMakes();
    }, []);

    return (
        <div>
            <div className=" py-5">
                <DataTable searchKey="name" columns={columns} data={makes} />
            </div>
        </div>
    );
};

export default Makes;
