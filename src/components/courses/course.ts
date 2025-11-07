import type { ReactNode } from "react";


export interface Course {
id: string;
href: string;
title: string;
description: string;
duration: string;
level: string;
students: string;
rating: number;
price: string;
skills: string[];
icon: ReactNode;
}


export interface Category {
id: string;
name: string;
description: string;
icon: ReactNode;
color: string; // e.g., 'text-blue-600'
borderColor: string; // e.g., 'border-blue-200'
bgColor: string; // e.g., 'bg-blue-50'
iconBgColor: string; // e.g., 'bg-blue-100'
courses: Course[];
comingSoon?: boolean;
}


// Utility: convert 'text-' color class to 'bg-'
export const textToBg = (textColor: string) => textColor.replace("text-", "bg-");