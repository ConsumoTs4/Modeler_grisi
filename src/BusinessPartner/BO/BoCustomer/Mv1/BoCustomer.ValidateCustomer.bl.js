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
 * @function validateCustomer
 * @this BoCustomer
 * @kind TODO_ADD_BUSINESS_OBJECT_TYPE
 * @namespace CORE
 * @param {messageCollector} messageCollector
 */
function validateCustomer(messageCollector){
    var me = this;
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code below.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////

/*
UC: NGM Customer - Main
The system saves and validates the customer data.
The customer Name must not be empty.
The Id must be unique within the sales organization.
*/
if (me.getBoBpaMeta().getId() == "Médico") {
  var nombre = me.name != undefined ? Utils.isEmptyString(me.getName().trim()) : true;
  var especialidad = me.especialidad != undefined ? Utils.isEmptyString(me.getEspecialidad().trim()) : true;
  var pacientesPorSemana = me.pacientes_por_semana != undefined ? Utils.isEmptyString(me.getPacientes_por_semana().trim()) : true;
  var honorarios = me.honorarios != undefined ? Utils.isEmptyString(me.getHonorarios().trim()) : true;
  var cedulaProfesional = me.cedulaProfesional != undefined ? Utils.isEmptyString(me.getCedulaProfesional().trim()) : true;
  var email1fd = me.email1 != undefined ? Utils.isEmptyString(me.getEmail1().trim()) : true;
  if (nombre || especialidad || pacientesPorSemana || honorarios || cedulaProfesional ||email1fd) {
    messageCollector.add({
      "level": "error",
      "objectClass": "BoCustomer",
      "messageID": "CasCustomerCamposRequeridos",
      "messageParams": {}
    });
  }
} else if (me.getBoBpaMeta().getId() == "Hospital") {
  var tipoH = me.tipo_de_institucion != undefined ? Utils.isEmptyString(me.getTipo_de_institucion().trim()) : true;
  var nombreH = me.name != undefined ? Utils.isEmptyString(me.getName().trim()) : true;
  if (tipoH || nombreH ) {
    messageCollector.add({
      "level": "error",
      "objectClass": "BoCustomer",
      "messageID": "CasCustomerCamposRequeridos",
      "messageParams": {}
    });
  }
} else if (me.getBoBpaMeta().getId() == "Farmacias Digrimex") {
  var nombreFD = me.name != undefined ? Utils.isEmptyString(me.getName().trim()) : true;
  var formato = me.formato_de_farmacia != undefined ? Utils.isEmptyString(me.getFormato_de_farmacia().trim()) : true;
  var subtipoFarmacia = me.subtipoFarmacia != undefined ? Utils.isEmptyString(me.getSubtipoFarmacia().trim()) : true;
  var tipoF = me.tipo != undefined ? Utils.isEmptyString(me.getTipo().trim()) : true; nombreFD ||formato || subtipoFarmacia || tipoF
  if (nombreFD || formato || subtipoFarmacia || tipoF) {
    messageCollector.add({
      "level": "error",
      "objectClass": "BoCustomer",
      "messageID": "CasCustomerCamposRequeridos",
      "messageParams": {}
    });
  }
} else if (me.getBoBpaMeta().getId() == "Farmacia Independiente") {
  var nombreFarInd= me.name != undefined ? Utils.isEmptyString(me.getName().trim()) : true;
  var territorioF1D = me.territorio != undefined ? Utils.isEmptyString(me.getTerritorio().trim()) : true;
  if (nombreFarInd || territorioF1D) {
    messageCollector.add({
      "level": "error",
      "objectClass": "BoCustomer",
      "messageID": "CasCustomerCamposRequeridos",
      "messageParams": {}
    });
  }
} else if (me.getBoBpaMeta().getId() == "Farmacia Farma") {
  var nombreFIF= me.name != undefined ? Utils.isEmptyString(me.getName().trim()) : true;
  var cadenaF1 = me.grupo_Cadena != undefined ? Utils.isEmptyString(me.getGrupo_Cadena().trim()) : true;
  var territorioF1 = me.territorio != undefined ? Utils.isEmptyString(me.getTerritorio().trim()) : true;
  if (nombreFIF ||cadenaF1 || territorioF1) {
    messageCollector.add({
      "level": "error",
      "objectClass": "BoCustomer",
      "messageID": "CasCustomerCamposRequeridos",
      "messageParams": {}
    });
  }
} 
if (!Utils.isEmptyString(me.getName().trim())) {
  var street01 = me.loCustomerAddress.current.street != undefined ? Utils.isEmptyString(me.getLoCustomerAddress().getCurrent().getStreet().trim()) : true;
  var zipCode01 = me.loCustomerAddress.current.zipCode != undefined ? Utils.isEmptyString(me.getLoCustomerAddress().getCurrent().getZipCode().trim()) : true;
  var city01 = me.loCustomerAddress.current.city != undefined ? Utils.isEmptyString(me.getLoCustomerAddress().getCurrent().getCity().trim()) : true;
  var countryState01 = me.loCustomerAddress.current.countryState != undefined ? Utils.isEmptyString(me.getLoCustomerAddress().getCurrent().getCountryState().trim()) : true;
  if (street01 || zipCode01 || city01 || countryState01) {
    messageCollector.add({
      "level": "error",
      "objectClass": "BoCustomer",
      "messageID": "CasCustomerCamposRequeridos",
      "messageParams": {}
    });
  }
}

    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code above.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////


}