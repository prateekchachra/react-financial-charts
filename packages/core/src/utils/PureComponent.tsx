import * as React from "react";
import { shallowEqual } from "./shallowEqual";

export class PureComponent<T, S = {}, SS = any> extends React.Component<T, S, SS> {
    public shouldComponentUpdate(nextProps: Readonly<T>, nextState: Readonly<S>) {
        return (
            !shallowEqual(this.props, nextProps) ||
            !shallowEqual(this.state, nextState)
        );
    }
}
