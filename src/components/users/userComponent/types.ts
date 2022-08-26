import { FunctionComponent } from "react";

export type TUserComponentProps = {
    className?: string,
    name: string | null,
    midname: string | null,
    surname: string | null,
    image_ref: string,
};

export type TUserComponent = FunctionComponent<TUserComponentProps>;