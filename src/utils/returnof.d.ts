export interface HaveFunction<T> {
    (): T;
}
export interface ActionCreator<P> {
    type: string;
    (payload: P): Action<P>;
}

export interface Action<P> {
    payload: P;
}
// export default function returnof<T>(fn: () => T): T;
export default function returnof<T>(fn: ActionCreator<T>): T;
export default function returnof<A, T>(fn: (a: A) => T, a: A): T;
export default function returnof<A, B, T>(fn: (a: A, b: B) => T, a: A, b: B): T;
export default function returnof<A, B, C, T>(fn: (a: A, b: B, c: C) => T, a: A, b: B, c: C): T;
export default function returnof<A, B, C, D, T>(fn: (a: A, b: B, c: C, d: D) => T, a: A, b: B, c: C, d: D): T;
