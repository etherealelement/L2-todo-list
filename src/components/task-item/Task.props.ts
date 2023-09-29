import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface  TaskProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    children: ReactNode;
    createDate: string;
    endDate: string;
    description: string;
}