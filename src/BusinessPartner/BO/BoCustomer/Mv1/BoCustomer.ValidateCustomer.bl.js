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

var apellidoPaterno = me.apellido_paterno != undefined ? Utils.isEmptyString(me.getApellido_paterno().trim()) : true;
var nombre = me.name != undefined ? Utils.isEmptyString(me.getName().trim()) : true;
var especialidad = me.especialidad != undefined ? Utils.isEmptyString(me.getEspecialidad().trim()) : true;
var pacientesPorSemana = me.pacientes_por_semana != undefined ? Utils.isEmptyString(me.getPacientes_por_semana().trim()) : true;
var honorarios = me.honorarios != undefined ? Utils.isEmptyString(me.getHonorarios().trim()) : true;
var cedulaProfesional = me.cedulaProfesional != undefined ? Utils.isEmptyString(me.getCedulaProfesional().trim()) : true;
var calle = me.calle != undefined ? Utils.isEmptyString(me.getCalle().trim()) : true;
var codigoPostal = me.codigo_postal != undefined ? Utils.isEmptyString(me.getCodigo_postal().trim()) : true;
var colonia = me.colonia != undefined ? Utils.isEmptyString(me.getColonia().trim()) : true;

if (me.getBoBpaMeta().getId() == "Médico" && (apellidoPaterno || nombre || especialidad || pacientesPorSemana || honorarios || cedulaProfesional || calle || codigoPostal || colonia))
{
  messageCollector.add({
    "level": "error",
    "objectClass": "BoCustomer",
    "messageID": "CasCustomerCamposRequeridos",
    "messageParams": {}
  });
}

var tipoH = me.tipo_de_institucion != undefined ? Utils.isEmptyString(me.getTipo_de_institucion().trim()) : true;
var nombreH = me.name != undefined ? Utils.isEmptyString(me.getName().trim()) : true;
var numExt = me.num_exterior != undefined ? Utils.isEmptyString(me.getNum_exterior().trim()) : true;
var codigoPostalH = me.codigo_postal != undefined ? Utils.isEmptyString(me.getCodigo_postal().trim()) : true;
var coloniaH = me.colonia != undefined ? Utils.isEmptyString(me.getColonia().trim()) : true;

if (me.getBoBpaMeta().getId() == "Hospitales" && (tipoH || nombreH || numExt || codigoPostalH || coloniaH))
{
  messageCollector.add({
    "level": "error",
    "objectClass": "BoCustomer",
    "messageID": "CasCustomerCamposRequeridos",
    "messageParams": {}
  });
}

var numExtF = me.num_exterior != undefined ? Utils.isEmptyString(me.getNum_exterior().trim()) : true;
var calleF = me.calle != undefined ? Utils.isEmptyString(me.getCalle().trim()) : true;
var codigoPostalF = me.codigo_postal != undefined ? Utils.isEmptyString(me.getCodigo_postal().trim()) : true;
var coloniaF = me.colonia != undefined ? Utils.isEmptyString(me.getColonia().trim()) : true;
var formato = me.formato_de_farmacia != undefined ? Utils.isEmptyString(me.getFormato_de_farmacia().trim()) : true;
var subtipoFarmacia = me.subtipoFarmacia != undefined ? Utils.isEmptyString(me.getSubtipoFarmacia().trim()) : true;
var tipoF = me.tipo != undefined ? Utils.isEmptyString(me.getTipo().trim()) : true;
numExtF || calleF || codigoPostalF || coloniaF || formato || subtipoFarmacia || tipoF
if (( me.getBoBpaMeta().getId() == "Farmacias Digrimex") && (numExtF || calleF || codigoPostalF || coloniaF || formato || subtipoFarmacia || tipoF))
{
  messageCollector.add({
    "level": "error",
    "objectClass": "BoCustomer",
    "messageID": "CasCustomerCamposRequeridos",
    "messageParams": {}
  });
}

var numExtF1 = me.num_exterior != undefined ? Utils.isEmptyString(me.getNum_exterior().trim()) : true;
var calleF1 = me.calle != undefined ? Utils.isEmptyString(me.getCalle().trim()) : true;
var codigoPostalF1 = me.codigo_postal != undefined ? Utils.isEmptyString(me.getCodigo_postal().trim()) : true;
var coloniaF1 = me.colonia != undefined ? Utils.isEmptyString(me.getColonia().trim()) : true;
var cadenaF1 = me.grupo_Cadena != undefined ? Utils.isEmptyString(me.getGrupo_Cadena().trim()) : true;
var territorioF1 = me.territorio != undefined ? Utils.isEmptyString(me.getTerritorio().trim()) : true;
var municipioF1= me.poblacion_municipio_delegación != undefined ? Utils.isEmptyString(me.getPoblacion_municipio_delegación().trim()) : true;
numExtF1 || calleF1 || codigoPostalF1 || coloniaF1 ||  municipioF1 || cadenaF1 || territorioF1
if ((me.getBoBpaMeta().getId() == "Farmacia Indepentiente" || me.getBoBpaMeta().getId() == "Farmacia Farma" ) && (numExtF1 || calleF1 || codigoPostalF1 || coloniaF1 ||  municipioF1 || cadenaF1 || territorioF1))
{
  messageCollector.add({
    "level": "error",
    "objectClass": "BoCustomer",
    "messageID": "CasCustomerCamposRequeridos",
    "messageParams": {}
  });
}


    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code above.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////


}