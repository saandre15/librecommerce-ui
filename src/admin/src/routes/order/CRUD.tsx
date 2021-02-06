import React from "react";
import CRUDComponent from "../../containers/CRUDComponent";
import { RouteComponentProps } from "react-router";

function CRUD(props: RouteComponentProps<{ page?: string | undefined }>) {
  return <CRUDComponent {...props} serverName={"order"} clientName={"order"} />;
}
export default CRUD;
