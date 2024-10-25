"use client";
import getMakes from "@/actions/get-makes";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { VehicleMake } from "@/types";
import React, { useEffect, useState } from "react";

const MakesPage = () => {
    const [makes, setMakes] = useState<VehicleMake[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMakes = async () => {
            setLoading(true);
            const data = await getMakes();
            setMakes(data || []);
            setLoading(false);
        };
        fetchMakes();
    }, []);

    return (
        <div>
            <div className=" py-5">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left w-20">Vehicle ID</TableHead>
                            <TableHead className="w-60 text-center">Name</TableHead>
                            <TableHead className="text-center">Year Range</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            Array.from({ length: 20 }).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell colSpan={3}>
                                        <Skeleton className="w-full h-10" />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            makes.map((make) => (
                                <TableRow key={make.vehicle_id}>
                                    <TableCell className="text-left">{make.vehicle_id}</TableCell>
                                    <TableCell className="text-center">{make.name}</TableCell>
                                    <TableCell className="grid grid-cols-8 mx-auto w-full">
                                        {make.year_range.map((year) => (
                                            <p key={year}>{year}</p>
                                        ))}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default MakesPage;
