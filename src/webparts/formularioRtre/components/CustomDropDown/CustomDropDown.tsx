import * as React from "react";

import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

export class CustomDropDown extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            options: [],
        }
    }

    componentDidMount() {
        this.setState({ options: this.splitDropDown() });        
    }

    splitDropDown() {
        if (this.props.values === "" || this.props.values === undefined)
            return;
        let array = this.props.values.split(';');
        let tempArray = [];
        array.forEach(element => {
            tempArray.push({
                key: element,
                text: element
            });
        });
        return tempArray;
    }

    public render() {
        return (
            <Dropdown
                placeholder="Selecione uma opção"
                label={this.props.label}
                defaultSelectedKey=''
                options={this.state.options}
                onChange={this.props.onChange}
                // onFocus={this._log('onFocus called')}
                // onBlur={this._log('onBlur called')}
            />
        );
    }

    // private _log(str: string): () => void {
    //     return (): void => {
    //         console.log(str);
    //     };
    // }
}