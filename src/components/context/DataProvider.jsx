"use client"
import React, { createContext, useContext, useState } from "react";
import { storeItems } from "@/lib/const";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [displayData, setDisplayedData] = useState(storeItems);

    const setdisplayItems = (catId) => {
        const newData = storeItems.filter(item => item.id === catId);
        setDisplayedData(newData);
    }

    const contextValue = {
        displayData,
        setdisplayItems
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

export default function useData() {
    const dataContext = useContext(DataContext);
    if (!dataContext) {
        throw new Error("useData must be used within a DataProvider");
    }
    return dataContext;
};
