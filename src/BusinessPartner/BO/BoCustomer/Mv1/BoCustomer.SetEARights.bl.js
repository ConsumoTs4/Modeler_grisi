"use strict";

///////////////////////////////////////////////////////////////////////////////////////////////
//                 IMPORTANT - DO NOT MODIFY AUTO-GENERATED CODE OR COMMENTS                 //
//Parts of this file are auto-generated and modifications to those sections will be          //
//overwritten. You are allowed to modify:                                                    //
// - the tags in the jsDoc as described in the corresponding section                         //
// - the function name and its parameters                                                    //
// - the function body between the insertion ranges                                          //
//         "Add your customizing javaScript code below / above"                              //
//                                                                                           //
// NOTE:                                                                                     //
// - If you have created PRE and POST functions, they will be executed in the same order     //
//   as before.                                                                              //
// - If you have created a REPLACE to override core function, only the REPLACE function will //
//   be executed. PRE and POST functions will be executed in the same order as before.       //
//                                                                                           //
// - For new customizations, you can directly modify this file. There is no need to use the  //
//   PRE, POST, and REPLACE functions.                                                       //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Use the following jsDoc tags to describe the BL function. Setting these tags will
 * change the runtime behavior in the mobile app. The values specified in the tags determine
 * the name of the contract file. The filename format is “@this . @function .bl.js”.
 * For example, LoVisit.BeforeLoadAsync.bl.js
 * -> function: Name of the businessLogic function.
 * -> this: The LO, BO, or LU object that this function belongs to (and it is part of the filename).
 * -> kind: Type of object this function belongs to. Most common value is "businessobject".
 * -> async: If declared as async then the function should return a promise.
 * -> param: List of parameters the function accepts. Make sure the parameters match the function signature.
 * -> module: Use CORE or CUSTOM. If you are a Salesforce client or an implementation partner, always use CUSTOM to enable a seamless release upgrade.
 * -> extends: Base class of the LO, BO, and LU objects that this function belongs to.
 * -> maxRuntime: Maximum time this function is allowed to run, takes integer value in ms. If the max time is exceeded, error is logged.
 * -> returns: Type and variable name in which the return value is stored.
 * @function setEARights
 * @this BoCustomer
 * @kind TODO_ADD_BUSINESS_OBJECT_TYPE
 * @namespace CORE
 * @param {String} mode
 */
function setEARights(mode){
    var me = this;
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code below.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////

/* #########################################################
       NGM Customer Main - If the respective customer template is not Mobility Relevant, the user can not edit any customer data. Only display.
       ######################################################### */
var acl = me.getACL();
if (me.getBoBpaMeta().getMobilityRelevant() === "0") {
  acl.setAce({
    "objectType" : AclObjectType.OBJECT,
    "objectName" : "BoCustomer",
    "rights" : AclPermission.EDIT,
    "grant" : false
  });
}

// make email readonly if necessary
if(me.getEmailEditable() === '0') {
  acl.removeRight(AclObjectType.PROPERTY, "email1", AclPermission.EDIT);
}

if(me.getDeleted() == "1") {
  acl.removeRight(AclObjectType.OBJECT, "BoCustomer", AclPermission.EDIT);
}

if(me.getBoBpaMeta().getId() == "Hospital") {
  acl.removeRight(AclObjectType.PROPERTY, "folio_tienda", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "grupo_Cadena", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "phone1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "telefono2", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "medicoGaleno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "requiereFactura", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "razonsocial", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "subtipoFarmacia", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tipo_de_persona", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "apellido_paterno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "apellido_materno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "nombre", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "numero_interior", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "latitud", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "longitud", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "honorarios", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "especialidad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "sub_especialidad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "fecha_nacimiento", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "sexo", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "categoria_del_medico", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "pacientes_por_semana", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "cedulaProfesional", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "edad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tel_1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tel_2", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "celular", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "email1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "medico_Galeno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "requiere_factura", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "lider_de_opinion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "nivel_de_influencia", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "uso_de_internet", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "portafolio", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "adopcion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "accesibilidad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "bancos", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "quintil_del_medico", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "prescripcion_1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "razon_Social", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "id_SAP", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tipo", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "formato_de_farmacia", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "folio_de_tienda", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "territorio", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "cuenta_con_exhibición_adicional", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "costo_renta_exhibicion_adicional", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "brick", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "grupoFarmaciaIndependiente", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tipoAseguradora", AclPermission.VISIBLE);

}else if(me.getBoBpaMeta().getId() == "Médico") {
  acl.removeRight(AclObjectType.PROPERTY, "folio_tienda", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "subtipoFarmacia", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "grupo_Cadena", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "latitud", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "longitud", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "fecha_de_alta", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "fecha_de_modificacion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tipo", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "subtipo", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "formato_de_farmacia", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "account_name", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "folio_de_tienda", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "territorio", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "cuenta_con_exhibición_adicional", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "costo_renta_exhibicion_adicional", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "parent_Account", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "brick", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "grupoFarmaciaIndependiente", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tipoAseguradora", AclPermission.VISIBLE);


}else if(me.getBoBpaMeta().getId() == "Farmacias Digrimex") {
  acl.removeRight(AclObjectType.PROPERTY, "folio_tienda", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "subtipo", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tipo_de_institucion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "grupo_Cadena", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "phone1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "telefono2", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "email1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "medicoGaleno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "requiereFactura", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "razonsocial", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tipo_de_persona", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "apellido_paterno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "apellido_materno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "numero_interior", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "brick", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "latitud", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "longitud", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "honorarios", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "especialidad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "sub_especialidad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "fecha_nacimiento", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "sexo", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "categoria_del_medico", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "pacientes_por_semana", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "cedulaProfesional", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "edad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tel_1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tel_2", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "celular", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "medico_Galeno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "requiere_factura", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "lider_de_opinion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "nivel_de_influencia", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "uso_de_internet", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "portafolio", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "adopcion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "accesibilidad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "bancos", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "quintil_del_medico", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "prescripcion_1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "razon_Social", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "id_SAP", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "folio_de_tienda", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "territorio", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "cuenta_con_exhibición_adicional", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "costo_renta_exhibicion_adicional", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "parent_Account", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "grupoFarmaciaIndependiente", AclPermission.VISIBLE);


}else if(me.getBoBpaMeta().getId() == "Farmacia Farma") {
  // acl.removeRight(AclObjectType.PROPERTY, "folio_tienda", AclPermission.EDIT);
  acl.removeRight(AclObjectType.PROPERTY, "tipo", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "subtipoFarmacia", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "medicoGaleno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "requiereFactura", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "razonsocial", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "phone1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "telefono2", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "ruta", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "brick", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tipo_de_institucion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tipo_de_persona", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "apellido_paterno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "apellido_materno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "brick", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "latitud", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "longitud", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "requiere_factura", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "fecha_de_modificacion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "honorarios", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "especialidad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "sub_especialidad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "fecha_nacimiento", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "sexo", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "categoria_del_medico", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "pacientes_por_semana", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "cedulaProfesional", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "edad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tel_1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tel_2", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "celular", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "email1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "medico_Galeno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "lider_de_opinion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "nivel_de_influencia", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "uso_de_internet", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "portafolio", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "adopcion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "accesibilidad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "bancos", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "quintil_del_medico", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "prescripcion_1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "razon_Social", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "rfc", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "subtipo", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "formato_de_farmacia", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "costo_renta_exhibicion_adicional", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "grupoFarmaciaIndependiente", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tipoAseguradora", AclPermission.VISIBLE);

}else if(me.getBoBpaMeta().getId() == "Farmacia Independiente") {
  // acl.removeRight(AclObjectType.PROPERTY, "folio_tienda", AclPermission.EDIT);
  acl.removeRight(AclObjectType.PROPERTY, "tipo", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "subtipoFarmacia", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "medicoGaleno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "requiereFactura", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "razonsocial", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "phone1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "telefono2", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "ruta", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "brick", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tipo_de_institucion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tipo_de_persona", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "apellido_paterno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "apellido_materno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "brick", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "latitud", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "longitud", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "requiere_factura", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "fecha_de_modificacion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "honorarios", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "especialidad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "sub_especialidad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "fecha_nacimiento", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "sexo", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "categoria_del_medico", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "pacientes_por_semana", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "cedulaProfesional", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "edad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tel_1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tel_2", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "celular", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "email1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "medico_Galeno", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "lider_de_opinion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "nivel_de_influencia", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "uso_de_internet", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "portafolio", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "adopcion", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "accesibilidad", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "bancos", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "quintil_del_medico", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "prescripcion_1", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "razon_Social", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "rfc", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "subtipo", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "formato_de_farmacia", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "costo_renta_exhibicion_adicional", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "tipoAseguradora", AclPermission.VISIBLE);
}

var name = me.name != undefined ? Utils.isEmptyString(me.getName().trim()) : true;
if (name) {
  // acl.removeRight(AclObjectType.PROPERTY, "motivo", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "categoria_del_medico", AclPermission.VISIBLE);

}

switch (mode) {

    //####################################
    //### Set EARights for Roles Tab   ###
    //### Called after roles tab click ###
    //####################################
  case "roles":
    var roles = me.getLoBpaRole().getAllItems();
    var hasOrdererRole = false;
    var hasCustomerRole = false;
    var hasPayerRole = false;

    for (var i = 0; i < roles.length; i++) {
      switch (roles[i].getCategory()) {
        case "order":
          hasOrdererRole = true;
          break;
        case "customer":
          hasCustomerRole = true;
          break;
        case "payer":
          hasPayerRole = true;
          break;
      }
    }

    if (!hasOrdererRole) {
      var aclBoOrderRole = me.getBoOrderRole().getACL();
      aclBoOrderRole.removeRight(AclObjectType.PROPERTY, "ordererType", AclPermission.VISIBLE);
      aclBoOrderRole.removeRight(AclObjectType.PROPERTY, "sdoMetaBlocked", AclPermission.VISIBLE);
    }

    if (!hasCustomerRole) {
      var aclBoCustomerRole = me.getBoCustomerRole().getACL();
      aclBoCustomerRole.removeRight(AclObjectType.PROPERTY, "customerNumber", AclPermission.VISIBLE);
      aclBoCustomerRole.removeRight(AclObjectType.PROPERTY, "priceType", AclPermission.VISIBLE);
      aclBoCustomerRole.removeRight(AclObjectType.PROPERTY, "priceListType", AclPermission.VISIBLE);
    }

    if (!hasPayerRole) {
      var aclBoPayerRole = me.getBoPayerRole().getACL();
      aclBoPayerRole.removeRight(AclObjectType.PROPERTY, "overallCreditLimit", AclPermission.VISIBLE);
      aclBoPayerRole.removeRight(AclObjectType.PROPERTY, "creditRating", AclPermission.VISIBLE);
      aclBoPayerRole.removeRight(AclObjectType.PROPERTY, "creditBlock", AclPermission.VISIBLE);
    }

    //Refreshing EA rights after reload of customer roles date
    //--> triggers UI refresh
    BindingUtils.refreshEARights();
    break;
}

//SF houseNumber is not available and must be written in the same field as the street
if (Utils.isSfBackend() && Utils.isDefined(me.getLoCustomerAddress()) && Utils.isDefined(me.getLoCustomerAddress().getCurrent())) {
  var aclLoCustomerAddress = me.getLoCustomerAddress().getCurrent().getACL();
  aclLoCustomerAddress.removeRight(AclObjectType.PROPERTY, "houseNumber", AclPermission.VISIBLE);
}

    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code above.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////


}