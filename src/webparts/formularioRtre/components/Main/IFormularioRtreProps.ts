import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IFormularioRtreProps {
  description: string;
  context: WebPartContext;
  item: string;
  tipoSolicitacao: string;
  prazoValidade: string;
  extensionAttribute: string;
}
