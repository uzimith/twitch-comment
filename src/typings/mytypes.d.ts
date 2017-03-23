import { Component } from 'react';
import { ActionsObservable } from 'redux-observable';
import { MiddlewareAPI } from 'redux';
import { Observable } from 'rxjs/Observable';

declare module 'react-redux' {
    export function connect<TStateProps, TOwnProps>(
        mapStateToProps?: MapStateToProps<Partial<TStateProps>, TOwnProps>,
        mapDispatchToProps?:
            MapDispatchToPropsFunction<Partial<TStateProps>, TOwnProps> | Partial<TStateProps>,
        mergeProps?: MergeProps<Partial<TStateProps>, Partial<TStateProps>, TOwnProps>,
        options?: Options
    ): ComponentDecorator<TStateProps, TOwnProps>;
}

declare module 'react-router/lib/Route' {
    export interface RouteProps {
        exact?: boolean;
        component: ({ }) => JSX.Element;
    }
}

declare module 'react-router-redux' {
    export class ConnectedRouter extends Component<{
        history: {};
    }, any> {
        render(): JSX.Element;
    }
    export interface RouterState {
        location: {
            pathname: string;
            search: string;
            hash: string;
        };
    }
}

declare module 'typescript-fsa' {
    export interface EmptySuccess<S> {
        result: S;
    }

    export interface EmptyFailure<E> {
        error: E;
    }

    export interface EmptyAsyncActionCreators<S, E> {
        type: string;
        started: EmptyActionCreator;
        done: ActionCreator<EmptySuccess<S>>;
        failed: ActionCreator<EmptyFailure<E>>;
    }
    export interface ActionCreatorFactory {
        async<undefined, S, E>(type: string, commonMeta?: Object | null): EmptyAsyncActionCreators<S, E>;
        async<P, S, E>(type: string, commonMeta?: Object | null): AsyncActionCreators<P, S, E>;
    }
}

declare module 'sinon' {
    export interface SinonStub extends SinonSpy {
        resolves(obj: any): SinonStub;
    }
}
