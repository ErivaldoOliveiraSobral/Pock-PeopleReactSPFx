import * as React from "react";

import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

export class CustomDropDown extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            dpselectedItem: undefined,
            itemsDropDown: []
        }
        this.splitValues(props.values);
    }

    public render() {
        const { dpselectedItem, dpselectedItems } = this.state;
        return (
            <Dropdown
                placeHolder="Select an Option"
                label=""
                id="component"
                selectedKey={dpselectedItem ? dpselectedItem.key : undefined}
                ariaLabel="Basic dropdown example"
                options={[
                    { key: 'Human Resource2', text: 'Human Resource2' },
                    { key: 'Finance', text: 'Finance' },
                    { key: 'Employee', text: 'Employee' }
                ]}
                onChanged={this._changeState}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
            />
        );
    }
    private _changeState = (item: IDropdownOption): void => {
        console.log('here is the things updating...' + item.key + ' ' + item.text + ' ' + item.selected);
        // this.setState({ dpselectedItem: item });
        // if (item.text == "Employee") {
        //     this.setState({ defaultChecked: false });
        //     this.setState({ disableToggle: true });
        // }
        // else {
        //     this.setState({ disableToggle: false });
        // }
    }
    private _log(str: string): () => void {
        return (): void => {
            console.log(str);
        };
    }
    splitValues(value) {
        let array = value.split(';');
        let tempArr = [];
        array.forEach(element => {
            tempArr.push({
                key: element,
                value: element
            });
        });
        this.setState({ itemsDropDown: tempArr });
        console.log(this.state.itemsDropDown);
    }
}