import * as React from "react";

import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

export class CustomDropDown extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            dpselectedItem: undefined,
            options: []
        }
    }

    componentDidMount() {
        this.setState({ options: this.splitDropDown() });        
    }

    splitDropDown() {
        if (this.props.values === "" || this.props.values === undefined === undefined)
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
        const { dpselectedItem, dpselectedItems } = this.state;
        return (
            <Dropdown
                placeHolder="Selecione uma opção"
                label={this.props.label}
                id={this.props.id}
                selectedKey={dpselectedItem ? dpselectedItem.key : undefined}
                options={this.state.options}
                onChange={this.props.onChange}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
            />
        );
    }

    private _log(str: string): () => void {
        return (): void => {
            console.log(str);
        };
    }
}