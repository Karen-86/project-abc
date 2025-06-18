"use client";

import React, { useState, useEffect, ReactElement } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ButtonDemo, InputDemo, ComboboxDemo } from "@/components/index";
import localData from "@/localData";

import { Payment, columns } from "./data-table/columns";
import { DataTableDemo } from "./data-table/DataTableDemo";

const { calendarImage } = localData.svgs;

const clientsData = [
  {
    label: "item 1",
    value: "item 1",
    isSelected: false,
  },
  {
    label: "item 2",
    value: "item 2",
    isSelected: false,
  },
  {
    label: "item 3",
    value: "item 3",
    isSelected: false,
  },
  {
    label: "item 4",
    value: "item 4",
    isSelected: false,
  },
];

const Statement = () => {
  type ItemsProps = {
    label: string;
    value: string;
    isSelected: boolean;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
  };

  const [fetchedClients, setFetchedClients] = useState<ItemsProps[]>(clientsData);

  const callback = (value: object) => {
    console.log(value);
  };

  return (
    <div className="min-h-[100vh] px-5 mb-[100px]">
      <div className="">
        <Card className="mb-[24px] shadow-none rounded-sm p-0 gap-0 row-start-3 2xl:row-start-auto">
          <CardHeader className="flex items-center justify-between gap-5  py-[7px] px-[7px]  min-h-[50px] pl-6 bg-custom-lightblue">
            <div className="flex gap-2 items-center">
              <CardTitle className=" text-[14px] 4xl:text-[23px] font-medium">Today’s Activity</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-3 py-6 grid [grid-template-columns:repeat(auto-fill,_minmax(200px,_1fr))] gap-3 items-end ">
            <div className="flex-1 min-w-[180px]">
              {" "}
              <ComboboxDemo
                label="Select Client"
                defaultItems={fetchedClients}
                callback={callback}
                triggerClassName={`combobox-demo-trigger-custom w-full`}
                contentClassName={`combobox-demo-content-custom`}
              />
            </div>
            <div className="flex-1 min-w-[180px]">
              {" "}
              <ComboboxDemo
                label="Folio Number"
                defaultItems={fetchedClients}
                callback={callback}
                triggerClassName={`combobox-demo-trigger-custom w-full`}
                contentClassName={`combobox-demo-content-custom`}
              />
            </div>
            <div className="flex-1 min-w-[180px]">
              {" "}
              <ComboboxDemo
                label="Document Type"
                defaultItems={fetchedClients}
                callback={callback}
                triggerClassName={`combobox-demo-trigger-custom w-full`}
                contentClassName={`combobox-demo-content-custom`}
              />
            </div>
            <div className="flex-1 min-w-[180px]">
              {" "}
              <InputDemo
                label="Select Date"
                id="date-picker"
                placeholder="Select Date"
                className="max-w-[350px] mb-0 hidden sm:block"
                inputClassName="!text-[12px] [&::-webkit-calendar-picker-indicator]:hidden"
                name="date"
                type="date"
                defaultValue=""
                callback={(e) => console.log(e.target.value)}
                endIcon={
                  <ButtonDemo
                    onClick={() => {
                      const input = document.querySelector<HTMLInputElement>("#date-picker");
                      if (input?.showPicker) {
                        input.showPicker();
                      } else {
                        input?.click();
                      }
                    }}
                    startIcon={calendarImage}
                    variant="ghost"
                    color="gray"
                    shape="circle"
                    className="!w-[30px] !h-[30px]"
                  />
                }
              />
            </div>
            <div className="flex-1 min-w-[180px]">
              {" "}
              <ButtonDemo text="Download Statement" size="lg" className="w-full" />
            </div>
          </CardContent>
        </Card>

        <StatementsTable />
      </div>
    </div>
  );
};

export default Statement;

const fetchedClients = {
  isLoading: false,
  list: [
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Holding",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Transactions",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Holding",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Transactions",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Holding",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Holding",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Transactions",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Holding",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Transactions",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Holding",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Holding",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Transactions",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Holding",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Transactions",
      date: "03-03-2025",
      time: "02:34PM",
    },
    {
      name: "WECP5421234",
      folioNumber: "12354368",
      documentType: "Holding",
      date: "03-03-2025",
      time: "02:34PM",
    },
  ],
};

const StatementsTable = () => {
  const [filteredData, setFilteredData] = useState<Payment[]>([]);

  // const { getUsers, fetchedClients } = useApiContext();

  useEffect(() => {
    if (!fetchedClients.list.length) return;

    const getData = (): Payment[] => {
      return fetchedClients.list.map((item) => {
        return {
          ...item,
          name: item.name || "",
        };
      });
    };

    const data = getData();

    setFilteredData(data);
  }, [fetchedClients]);

  return (
    <Card className="shadow-none rounded-sm p-0 gap-0 row-start-3 2xl:row-start-auto">
      <CardHeader className="flex items-center justify-between gap-5  py-[7px] px-[7px]  min-h-[50px] pl-6 bg-custom-lightblue">
        <div className="flex gap-2 items-center">
          <CardTitle className=" text-[14px] 4xl:text-[23px] font-medium">
            Last Downloaded Statement
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-3 py-6 flex gap-3 items-end flex-wrap">
        <DataTableDemo data={filteredData} columns={columns} />
      </CardContent>
    </Card>
  );
};
