import * as React from 'react';

import { PeoplePicker } from "@pnp/spfx-controls-react/lib/PeoplePicker";

export class CustomPeople extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
        this.state = {
            userManagerIDs: []
        };
        // this._getManager = this._getManager.bind(this);
    }

    public render() {
        return (
            <PeoplePicker
                context={this.props.context}
                titleText="Nome do Solicitante"
                personSelectionLimit={4}
                groupName={""} // Leave this blank in case you want to filter from all users
                showtooltip={false}
                isRequired={true}
                disabled={false}
                selectedItems={this.props.selectedItems}
                // errorMessage={(this.state.userManagerIDs.length === 0 && this.state.onSubmission === true) ? this.state.required : " "}
                // errorMessageclassName={styles.hideElementManager}
            />
        );
    }
    // private _getManager(items: any[]) {
    //     this.state.userManagerIDs.length = 0;
    //     let tempuserMngArr = [];
    //     for (let item in items) {
    //         tempuserMngArr.push(items[item].id);
    //     }
    //     this.props.selectedItems({ userManagerIDs: tempuserMngArr });
    //     this.setState({ userManagerIDs: tempuserMngArr });
    // }

}