// src/components/ui/button.jsx
import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';
const Button = cva(
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow hover:shadow-lg hover:brightness-110",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-white hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-12 py-3 px-6 rounded-full",
        sm: "h-9 px-3 rounded-md",
        lg: "h-14 px-8 rounded-full",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


export { Button};