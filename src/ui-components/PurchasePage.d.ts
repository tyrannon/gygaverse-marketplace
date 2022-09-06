/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Event } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PurchasePageProps = React.PropsWithChildren<Partial<FlexProps> & {
    event?: Event;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function PurchasePage(props: PurchasePageProps): React.ReactElement;
