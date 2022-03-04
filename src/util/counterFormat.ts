export const counterFormat = (value?: number) => {
    if (value === undefined) return undefined;
    if (value < 0) return `-${Math.abs(value).toString().padStart(4, '0')}`;
    return value.toString().padStart(4, '0');
};
