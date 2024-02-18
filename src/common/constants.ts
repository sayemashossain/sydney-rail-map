export const SCALE_FACTOR = 30;

export enum lines {
    T1 = 't1',
    T2 = 't2',
    T3 = 't3',
    T4 = 't4',
    T5 = 't5',
    T6 = 't6',
    T7 = 't7',
    T8 = 't8',
    T9 = 't9',
}

export const lineColours: Record<lines, string | null> = {
    [lines.T1]: '#F69D20',
    [lines.T2]: '#0698CD',
    [lines.T3]: '#F36726',
    [lines.T4]: '#015CA5',
    [lines.T5]: '#D433A0',
    [lines.T6]: '#456DB0',
    [lines.T7]: '#6B8291',
    [lines.T8]: '#038C45',
    [lines.T9]: '#D12035',
};
