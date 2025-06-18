"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, ChevronDown, EyeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import localData from "@/localData";

const { avatarPlaceholderImage } = localData.images;

export type Payment = {
  id?: string;
  name?: string;
  details?: any;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button variant="ghost" className="" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Name
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "folioNumber",
    header: () => {
      return <div className="text-right px-5">Folio Number</div>;
    },
    cell: ({ row }) => <div className="capitalize text-right">{row.getValue("folioNumber")}</div>,
  },
  {
    accessorKey: "documentType",
    header: () => {
      return <div className="text-right px-5">Document Type</div>;
    },
    cell: ({ row }) => <div className="capitalize text-right">{row.getValue("documentType")}</div>,
  },
  {
    accessorKey: "date",
    header: () => {
      return <div className="text-right px-5">Date</div>;
    },
    cell: ({ row }) => <div className="capitalize text-right">{row.getValue("date")}</div>,
  },
  {
    accessorKey: "time",
    header: () => {
      return <div className="text-right px-5">Time</div>;
    },
    cell: ({ row }) => <div className="capitalize text-right">{row.getValue("time")}</div>,
  },
];
