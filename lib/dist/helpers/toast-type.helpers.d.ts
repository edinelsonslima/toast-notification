import { IToast, IToastWithoutType, IReactNode } from '../@types';
export declare function toastType(type: IToast["type"]): (data: IToastWithoutType | IReactNode) => void;
