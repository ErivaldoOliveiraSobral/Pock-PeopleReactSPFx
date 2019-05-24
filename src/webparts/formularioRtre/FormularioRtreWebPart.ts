import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'FormularioRtreWebPartStrings';
import FormularioRtre from './components/Main/FormularioRtre';
import { IFormularioRtreProps } from './components/Main/IFormularioRtreProps';

export interface IFormularioRtreWebPartProps {
  description: string;
  item: string;
  tipoSolicitacao: string;
  prazoValidade: string;
}

export default class FormularioRtreWebPart extends BaseClientSideWebPart<IFormularioRtreWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IFormularioRtreProps > = React.createElement(
      FormularioRtre,
      {
        description: this.properties.description,
        context: this.context,
        item: this.properties.item,
        tipoSolicitacao: this.properties.tipoSolicitacao,
        prazoValidade: this.properties.prazoValidade
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ],
            },
            {
              groupName: "Propriedades DropDown",
              groupFields: [
                PropertyPaneTextField('item', {
                  label: "Item",
                  multiline: true,
                  description: 'Separar por " ; " Ex.: item 1;item 2;item 3'
                })
              ]
            },
            {
              groupFields: [
                PropertyPaneTextField('tipoSolicitacao', {
                  label: "Tipo de Solicitação",
                  multiline: true
                })
              ]
            },
            {
              groupFields: [
                PropertyPaneTextField('prazoValidade', {
                  label: "Prazo de Validade",
                  multiline: true
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
