"use client";

import React, {  ReactElement,ReactNode, useState, useEffect } from "react";
import { Check, ChevronsUpDown, ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import localData from "@/localData";
import { v4 as uuidv4 } from "uuid";

const {arrowDownIcon} = localData.svgs

type ItemsProps = {
  id: string;
  label: string;
  value: string;
  isSelected: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};

type ComboboxDemoProps = {
  triggerClassName: string;
  contentClassName: string;
  defaultItems: ItemsProps[];
  callback?: (value: object) => void;
    label?: ReactNode;
};

export function ComboboxDemo({
  triggerClassName = "",
  contentClassName = "",
  defaultItems = [],
  callback = () => { },
    label = "",
}: ComboboxDemoProps) {

  const [items, setItems] = useState<ItemsProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<ItemsProps | null>(null);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

    const [id, setId] = useState("");

  useEffect(() => {
    setId(uuidv4());
  }, []);

  useEffect(() => {
    setItems([...defaultItems]);
    const selectedItem = [...defaultItems].find((item: ItemsProps) => item?.isSelected);
    if (selectedItem) {
      setValue(selectedItem?.value);
      setSelectedItem(selectedItem);
    }
  }, [defaultItems]);

  return (
    <>
      {label && <Label htmlFor={id} className="mb-1 text-xs 4xl:text-sm inline-block ">{label}</Label>}
     <Popover open={open} onOpenChange={setOpen} >
       <PopoverTrigger id={id} asChild className={`w-[280px] combobox-demo-trigger  cursor-pointer ${triggerClassName}`}>
         <Button variant="outline" role="combobox" aria-expanded={open} className=" justify-between ">
           {selectedItem?.startIcon && <span className="w-[16px] ">{selectedItem.startIcon}</span>}
           <span className="truncate flex-1 text-left text-xs 4xl:text-sm">
             {value ? items.find((item) => item.value === value)?.label : "Select"}
           </span>
           {selectedItem?.endIcon && <span className="ml-auto w-[16px] ">{selectedItem.endIcon}</span>}
           <ChevronDown className="opacity-50" />
           {/* {arrowDownIcon} */}
         </Button>
       </PopoverTrigger>
       <PopoverContent
         // side="bottom"
         align="start"
         className={` p-0  combobox-demo-content w-full  max-w-[92vw] ${{ contentClassName }}`}
       >
         <Command>
           <CommandInput placeholder="Search..." />
           <CommandList>
             <CommandEmpty>No framework found.</CommandEmpty>
             <CommandGroup>
               {items.map((item) => (
                 <CommandItem
                   className="cursor-pointer"
                   key={item.value}
                   value={item.value}
                   onSelect={(currentValue) => {
                     setValue(currentValue === value ? "" : currentValue);
                     setSelectedItem(item);
                     callback(item);
                     setOpen(false);
                   }}
                 >
                   <Check className={cn("ml-auto", value === item.value ? "opacity-100" : "opacity-0")} />
                   {item.startIcon && <span className="w-[16px] ">{item.startIcon}</span>}
                   <span className="combobox-demo-text flex-1">{item.label}</span>
                   {item.endIcon && <span className="ml-auto w-[16px] ">{item.endIcon}</span>}
                 </CommandItem>
               ))}
             </CommandGroup>
           </CommandList>
         </Command>
       </PopoverContent>
     </Popover>
   </>
  );
}
