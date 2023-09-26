import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: ReactNode;
}