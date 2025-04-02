export declare enum ResourceType {
    VERY_MODEST = 1,
    MODEST = 2,
    INTERMEDIATE = 3,
    SUPERIOR = 4
}
export type TSimulatorResult = {
    id: string;
    type: TSimulatorType;
    value: TSimulatorResultValue;
};
export type TCreateSimulationBody = {
    simulation: TSimulatorResult[];
};
export type TSimulatorResultValue = string | number | string[];
export type TSimulatorType = 'select' | 'select-multi' | 'input-number' | 'input-address' | 'signup' | 'input-text' | 'input-moreless';
export type TSimulatorTree = {
    id: string;
    title?: string;
    type: 'select' | 'select-multi' | 'input-number' | 'input-address' | 'signup' | 'input-text' | 'input-moreless';
    values?: TSimulatorTreeValue[];
    valuesSection?: {
        title: string;
        values: TSimulatorTreeValue[];
    }[];
    dependencies?: {
        [key: string]: TSimulatorTree[];
    };
    idfDependencies?: {
        [key: string]: TSimulatorTree[];
    };
    label?: string;
    tag?: string;
    subtitle?: string;
    max?: number;
    mask?: string;
    bigTitle?: string;
};
type TSimulatorTreeValue = {
    title: string;
    icon?: string;
    id: string;
    subtitle?: string;
};
export {};
