"use client";
import { useEffect } from "react";

import { pingAllBackends } from "@/api/pingBackends";

export const BackendWarmup = () => {
    useEffect(() => {
        pingAllBackends();
    }, []);

    return null;
};