"use client";

import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

type TitleProps = {
  children: ReactNode;
  className?: string;
};

type TextProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-md p-4 shadow ${className}`}>
      {children}
    </div>
  );
}

export function Title({ children, className = "" }: TitleProps) {
  return <h2 className={`text-lg font-bold mb-2 ${className}`}>{children}</h2>;
}

export function Text({ children, className = "" }: TextProps) {
  return <p className={`text-gray-700 ${className}`}>{children}</p>;
}
