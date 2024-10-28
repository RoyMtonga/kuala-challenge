"use client"

import { Button } from "@/components/ui/button"
import { Engine, Transmission, VehicleVariant } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<VehicleVariant>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "vehicle_model_id",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Model ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "variant_id",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Variant ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "fuel_type",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Fuel Type
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "transmission",
        header: "Transmission",
        cell: ({ row }) => {
            const transmission = row.getValue("transmission") as Transmission;

            return (
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <span>ID: {transmission.id}</span>
                    <span>Created At: {transmission.created_at}</span>
                    <span>Updated At: {transmission.updated_at}</span>
                    <span>Deleted At: {transmission.deleted_at}</span>
                    <span>Driving Wheel: {transmission.driving_wheel}</span>
                    <span>Transmission Type: {transmission.transmission_type}</span>
                    <span>Value: {transmission.value}</span>
                    <span>Final Gear Ratio: {transmission.final_gear_ratio}</span>
                    <span>Vehicle Variant ID: {transmission.vehicle_variant_id}</span>
                </div>
            );
        },
    },
    {
        accessorKey: "manufacture_year",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Manufacture Year
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "engine",
        header: "Engine",
        cell: ({ row }) => {
            const engine = row.getValue("engine") as Engine;

            return (
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <span>ID: {engine.id}</span>
                    <span>Created At: {engine.created_at}</span>
                    <span>Updated At: {engine.updated_at}</span>
                    <span>Deleted At: {engine.deleted_at}</span>
                    <span>Engine Code: {engine.engine_code}</span>
                    <span>Engine Model: {engine.engine_model}</span>
                </div>
            );
        },
    },
]
