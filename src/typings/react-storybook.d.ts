declare var module: any;

declare module '@kadira/storybook' {
    interface Story {
        add(storyName: string, callback: () => void): Story;
    }

    export function storiesOf(name: string, _module: any): Story;
    export function action(name: string): void;
}
