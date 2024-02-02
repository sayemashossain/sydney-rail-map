import './style.css'

export const SCALE_FACTOR = 30

export enum lines {
    T5 = 't5',
    T4 = 't4',
}

const lineColours: Record<lines, string | null> = {
    [lines.T5]: 'magenta',
    [lines.T4]: 'red',
}

export const Station = ({
    line,
    name,
    x,
    y,
}: {
    line: lines
    name: string
    x: number
    y: number
}) => {
    const color: string = lineColours[line] || 'white'

    const styles = {
        width: `${SCALE_FACTOR / 10}px`,
        height: `${SCALE_FACTOR / 10}px`,
        borderRadius: `100%`,
        backgroundColor: `white`,
        position: 'absolute',
        zIndex: 3,
        top: `${SCALE_FACTOR * y}px`,
        left: `${SCALE_FACTOR * x}px`,
        outline: `${color} solid 2px`,
    } as React.CSSProperties

    return <div style={styles} id={name}></div>
}
