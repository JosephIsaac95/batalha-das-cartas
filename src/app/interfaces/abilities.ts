export interface Abilities {
    title?: string,
    description: string,
    apply: (target: any) => void
}