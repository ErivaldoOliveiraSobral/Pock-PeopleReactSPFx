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
                <TextField name="Teste TextField" label="Solicitante" onChange={e => this.changeTextField(e)} />

                <CustomPeople errorMessage={this.state.NomeSolicitante} selectedItems={e => this.changeCustomPeople(e)} context={this.props.context}/>

                <CustomDropDown id="item" label="item" values={this.props.item} onChange={e => this.changeCustomDropDown(e)}/>

                <CustomDropDown id="tipoSolicitacao" label="tipoSolicitacao" values={this.props.tipoSolicitacao} onChange={e => this.changeCustomDropDown(e)}/>

                <CustomDropDown id="prazoValidade" label="prazoValidade" values={this.props.prazoValidade} onChange={e => this.changeCustomDropDown(e)}/>
 
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

    changeCustomDropDown(e) {
        this.props.onChange({ [e.target.id]: e.target.textContent });
        this.setState({ [e.target.id]: e.target.textContent });
        console.log("target: " + e.target.id + " text: " + e.target.textContent);
    }
};