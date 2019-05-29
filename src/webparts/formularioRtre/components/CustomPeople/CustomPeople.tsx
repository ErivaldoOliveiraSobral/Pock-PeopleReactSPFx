import * as React from 'react';

import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import styles from '../CustomPeople/CustomPeople.module.scss';

export class CustomPeople extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
        this.state = {
            required: "This is required",
            onSubmission: false,

        };
    }

    public render() {
        return (
            <div className={styles.CustomPeople}>
                <PeoplePicker
                    context={this.props.context}
                    titleText="Nome do Solicitante"
                    personSelectionLimit={1}
                    groupName={""} // Leave this blank in case you want to filter from all users
                    showtooltip={false}
                    principalTypes={[PrincipalType.User]}
                    isRequired={true}
                    disabled={false}
                    selectedItems={this.props.selectedItems}
                    // errorMessage={(this.props.errorMessage.length === 0 && this.state.onSubmission === true) ? this.state.required : " "}
                    // errorMessageclassName={styles.hideElementManager}
                />
            </div>
        );
    }
}