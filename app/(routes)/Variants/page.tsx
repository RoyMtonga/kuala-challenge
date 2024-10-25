"use client"
import getVariants from "@/actions/get-variant"
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { VehicleVariant } from "@/types";
import React, { useEffect, useState } from 'react'


const VariantsPage = () => {
    const [variants, setVariants] = useState<VehicleVariant[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMakes = async () => {
            setLoading(true);
            const data = await getVariants();
            setVariants(data || []);
            setLoading(false);
        };
        fetchMakes();
    }, []);
    return (
        <div>
            <div className="py-5">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left w-20">Name</TableHead>
                            <TableHead className="text-center w-20">Model ID</TableHead>
                            <TableHead className="text-center w-20">Variant ID</TableHead>
                            <TableHead className="text-center">Fuel Type</TableHead>
                            <TableHead className="text-center">Transmission</TableHead>
                            <TableHead className="text-center">Manufucter Year</TableHead>
                            <TableHead className="text-center">Engine</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell colSpan={7}>
                                        <Skeleton className="w-full h-40" />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            variants.map((variant) => (
                                <TableRow key={variant.variant_id}>
                                    <TableCell className="text-left">{variant.name}</TableCell>
                                    <TableCell className="text-center">{variant.vehicle_model_id}</TableCell>
                                    <TableCell className="text-center">{variant.variant_id}</TableCell>
                                    <TableCell className="text-center">{variant.fuel_type}</TableCell>
                                    <TableCell className="flex flex-col mx-auto w-full">
                                        <span>ID: {variant.transmission.id}</span>
                                        <span>Created At: {variant.transmission.created_at}</span>
                                        <span>Updated At: {variant.transmission.updated_at}</span>
                                        <span>Deleted At: {variant.transmission.deleted_at}</span>
                                        <span>Driving Wheel: {variant.transmission.driving_wheel}</span>
                                        <span>Transmission Type: {variant.transmission.transmission_type}</span>
                                        <span>Value: {variant.transmission.value}</span>
                                        <span>Final Gear Ratio: {variant.transmission.final_gear_ratio}</span>
                                        <span>Vehical Variant ID: {variant.transmission.vehicle_variant_id}</span>
                                    </TableCell>

                                    <TableCell className="text-center">{variant.manufacture_year}</TableCell>
                                    <TableCell className="flex flex-col mx-auto w-full">
                                        <span>ID: {variant.engine.id}</span>
                                        <span>Created At: {variant.engine.created_at}</span>
                                        <span>Updated At: {variant.engine.updated_at}</span>
                                        <span>Deleted At: {variant.engine.deleted_at}</span>
                                        <span>Engine Code: {variant.engine.engine_code}</span>
                                        <span>Engine Model: {variant.engine.engine_model}</span>
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

export default VariantsPage