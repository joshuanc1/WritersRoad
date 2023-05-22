import {createContext, useContext, useState} from 'react';
import React from 'react'


const UseContext = createContext("");

export const UseProvider = ({children}) => {
    return <UseContext.Provider value={poop}></UseContext.Provider>
} 

export const UsePoop = () => useContext(UseContext);