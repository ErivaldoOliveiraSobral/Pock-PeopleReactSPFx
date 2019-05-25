import * as React from "react";
import styles from "./Solicitacao.module.scss";

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react';
import { CustomPeople } from "../CustomPeople/CustomPeople";
import { CustomDropDown } from "../CustomDropDown/CustomDropDown";

export class Solicitacao extends React.Component<any, any> {
    constructor(props: any) {
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
                {/* <TextField 
                    label="Teste TextField" 
                    name="NomeSolicitante" 
                    onChange={e => this.changeTextField(e)} /> */}
                <CustomPeople 
                    selectedItems={e => this.changeCustomPeople(e)} 
                    context={this.props.context} />
                <CustomDropDown 
                    label="Item" 
                    name="Item"
                    values={this.props.item} 
                    onChange={e => this.changeCustomDropDown1(e)} />
                <CustomDropDown 
                    label="Tipo de Solicitação" 
                    name="TipoSolicitacao" 
                    values={this.props.tipoSolicitacao} 
                    onChange={e => this.changeCustomDropDown2(e)} />
                <CustomDropDown 
                    label="Prazo de Validade" 
                    name="DataPrazoAprovacao" 
                    values={this.props.prazoValidade} 
                    onChange={e => this.changeCustomDropDown3(e)} />

                <TextField label="Aprovador" />
                <div className={styles.positionButton}>
                    <PrimaryButton
                        className={styles.spacingButton}
                        data-automation-id="test"
                        // disabled={disabled}
                        // checked={checked}
                        text="Salvar"
                        onClick={this._alertClicked}
                        allowDisabledFocus={true}
                    />
                    <DefaultButton
                        className={styles.spacingButton}
                        data-automation-id="test"
                        allowDisabledFocus={true}
                        // disabled={disabled}
                        // checked={checked}
                        text="Cancelar"
                        onClick={this._alertClicked}
                    />
                </div>
            </div>
        );
    }
    _alertClicked() {
        window.location.reload();
    };

    changeTextField(e) {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({ [e.target.name]: e.target.value });
    }

    changeCustomPeople(items: any[]) {
        let tempuserMngArr = [];
        for (let item in items) {
            tempuserMngArr.push(items[item].id);
        }
        this.props.onChange({ NomeSolicitante: tempuserMngArr });
        this.setState({ NomeSolicitante: tempuserMngArr });
    }

    changeCustomDropDown1(e) {
        this.props.onChange({ Item: e.target.textContent });
        this.setState({ Item: e.target.textContent });
    }
    changeCustomDropDown2(e) {
        this.props.onChange({ TipoSolicitacao: e.target.textContent });
        this.setState({ TipoSolicitacao: e.target.textContent });
    }
    changeCustomDropDown3(e) {
        this.props.onChange({ DataPrazoAprovacao: e.target.textContent });
        this.setState({ DataPrazoAprovacao: e.target.textContent });
    }
};