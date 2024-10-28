"use client"

import { Button } from "@/components/ui/button"
import { VehicleMake } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<VehicleMake>[] = [
    {
        accessorKey: "vehicle_id",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Vehicle ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
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
        accessorKey: "year_range",
        header: "Year Range",
        cell: ({ row }) => {
            const years = row.getValue("year_range") as number[];

            return (
                <div className="grid grid-cols-8 gap-2">
                    {years.map((year) => (
                        <span key={year} className="p-1">
                            {year}
                        </span>
                    ))}
                </div>
            );
        },
    },
]
