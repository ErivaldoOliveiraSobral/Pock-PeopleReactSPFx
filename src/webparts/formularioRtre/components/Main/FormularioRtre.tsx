import * as React from 'react';
import { IFormularioRtreProps } from './IFormularioRtreProps';

import { Solicitacao } from "../Formulario/Solicitacao";

export default class FormularioRtre extends React.Component<IFormularioRtreProps, {}> {
  constructor(props: IFormularioRtreProps) {
    super(props);
    this.state = {};
  }
  change = updateState => {
    this.setState({
        ...this.state,
        ...updateState
    });
  };
  public render(): React.ReactElement<IFormularioRtreProps> {
    return (
      <div style={divStyle}>
        <Solicitacao 
          onChange={e => this.change(e)} 
          context={this.props.context}
          extensionAttribute={this.props.extensionAttribute}
          item={this.props.item}
          tipoSolicitacao={this.props.tipoSolicitacao}
          prazoValidade={this.props.prazoValidade}
          />
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  }
}

const divStyle = {
  // background: 'red'
}
