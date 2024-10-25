"use client"
import getModels from "@/actions/get-models"
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { VehicleModel } from "@/types";
import React, { useEffect, useState } from 'react'


const ModelsPage = () => {
    const [models, setModels] = useState<VehicleModel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMakes = async () => {
            setLoading(true);
            const data = await getModels();
            setModels(data || []);
            setLoading(false);
        };
        fetchMakes();
    }, []);
    return (
        <div>
            <div className="px-11 py-5">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left w-20">Model ID</TableHead>
                            <TableHead className="text-left w-20">Make ID</TableHead>
                            <TableHead className="w-60 text-center">Model</TableHead>
                            <TableHead className="text-center">Year Range</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell colSpan={4}>
                                        <Skeleton className="w-full h-48" />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            models.map((model) => (
                                <TableRow key={model.vehicle_model_id}>
                                    <TableCell className="text-left">{model.vehicle_model_id}</TableCell>
                                    <TableCell className="text-center">{model.vehicle_make_id}</TableCell>
                                    <TableCell className="text-center">{model.model}</TableCell>
                                    <TableCell className="grid grid-cols-8 mx-auto w-full">
                                        {model.year_range.map((year) => (
                                            <p key={year}>
                                                {year}
                                            </p>
                                        ))}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default ModelsPage