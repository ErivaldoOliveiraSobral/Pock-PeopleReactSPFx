import * as React from 'react';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { MSGraphClient } from '@microsoft/sp-http';

export interface ICustomPeopleAdProps {
  extensionAttribute: string;
}

export interface ICustomPeopleAdState {}

export class CustomPeopleAd extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.context.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {
        client
        .api('/users/fabricaSP@iterisdev.com.br?$select=extension_9a3e072d82954c0f8aaf45fb82c4365a_extensionAttribute1MockTeste')
        .get((error, response: any, rawResponse?: any) => {
          console.log(response);
          debugger;
        })
      })
  };
  
  public render(): React.ReactElement<any> {
    return (
      <TextField 
        label="Aprovador" 
        value={this.props.extensionAttribute}
        readOnly />
    );
  }
}
