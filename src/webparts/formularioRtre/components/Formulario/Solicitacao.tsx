import * as React from "react";
import { ISolicitacaoProps } from "../Formulario/ISolicitacaoProps";
import { ISolicitacaoState } from "../Formulario/ISolicitacaoState";
import styles from "./Solicitacao.module.scss";

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react';
import { CustomPeople } from "../CustomPeople/CustomPeople";
import { CustomDropDown } from "../CustomDropDown/CustomDropDown";

export class Solicitacao extends React.Component<any, any> {
    constructor(props: ISolicitacaoProps) {
        super(props);
        this.state = {
            NomeSolicitante: [],
            Item: '',
            TipoSolicitacao: '',
            Aprovador: '',
            DataPrazoAprovacao: '',
        };
    }
    public render() {
        return (
            <div className={styles.solicitacao}>
                {/* <TextField name="NomeSolicitante" label="Solicitante" onChange={e => this.change(e)} /> */}
                <CustomPeople errorMessage={this.state.NomeSolicitante} selectedItems={e => this.changeSelectedPeople(e)} context={this.props.context}/>
                {/* <TextField label="Item" /> */}
                <label>Item</label>
                <CustomDropDown values={this.props.item} />
                <TextField label="Tipo de Solicitação" />
                <TextField label="Prazo de Validade" />
                <TextField label="Aprovador" />
                <div className={styles.positionButton}>
                    <PrimaryButton
                        className={styles.spacingButton}
                        data-automation-id="test"
                        // disabled={disabled}
                        // checked={checked}
                        text="Salvar"
                        // onClick={this._alertClicked}
                        allowDisabledFocus={true}
                    />
                    <DefaultButton
                        className={styles.spacingButton}
                        data-automation-id="test"
                        allowDisabledFocus={true}
                        // disabled={disabled}
                        // checked={checked}
                        text="Cancelar"
                    // onClick={this._alertClicked}
                    />
                </div>
            </div>
        );
    }

    change(e) {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    changeSelectedPeople(items: any[]) {
        let tempuserMngArr = [];
        for (let item in items) {
            tempuserMngArr.push(items[item].id);
        }
        this.props.onChange({ NomeSolicitante: tempuserMngArr });
        this.setState({ NomeSolicitante: tempuserMngArr });
    }
};