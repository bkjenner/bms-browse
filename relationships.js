actactivity.belongsTo(actpriority, { as: "actpriority", foreignKey: "actpriorityid" });
actactivity.belongsTo(actproject, { as: "actproject", foreignKey: "actprojectid" });
actactivity.belongsTo(actstatus, { as: "actstatus", foreignKey: "actstatusid" });
actactivity.belongsTo(acttype, { as: "acttype", foreignKey: "acttypeid" });
actactivity.hasOne(actactivitysubtypebilling, { as: "actactivitysubtypebilling", foreignKey: "actactivityid" });

actactivitysubtypebilling.belongsTo(actactivity, { as: "actactivity", foreignKey: "actactivityid" });
actactivitysubtypebilling.belongsTo(actbillingstatus, { as: "actbillingstatus", foreignKey: "actbillingstatusid" });
actactivitysubtypebilling.belongsTo(crmcontact, { as: "crmcontactidinvoicethrough_crmcontact", foreignKey: "crmcontactidinvoicethrough" });
actactivitysubtypebilling.belongsTo(gltransaction, { as: "gltransaction", foreignKey: "gltransactionid" });

actbillingmethod.hasMany(actproject, { as: "actprojects", foreignKey: "actbillingmethodid" });
actbillingstatus.hasMany(actactivitysubtypebilling, { as: "actactivitysubtypebillings", foreignKey: "actbillingstatusid" });

actcostunit.hasMany(acttype, { as: "acttypes", foreignKey: "actcostunitid" });

actpriority.hasMany(actactivity, { as: "actactivities", foreignKey: "actpriorityid" });

actproject.belongsTo(actbillingmethod, { as: "actbillingmethod", foreignKey: "actbillingmethodid" });
actproject.belongsTo(actproject, { as: "actprojectidparent_actproject", foreignKey: "actprojectidparent" });
actproject.belongsTo(actsource, { as: "actsource", foreignKey: "actsourceid" });
actproject.belongsTo(actstatus, { as: "actstatus", foreignKey: "actstatusid" });
actproject.belongsTo(crmcontact, { as: "crmcontact", foreignKey: "crmcontactid" });
actproject.belongsTo(glcostcentre, { as: "glcostcentre", foreignKey: "glcostcentreid" });
actproject.hasMany(actactivity, { as: "actactivities", foreignKey: "actprojectid" });
actproject.hasMany(actproject, { as: "actprojects", foreignKey: "actprojectidparent" });
actproject.hasMany(actprojectresourceallocation, { as: "actprojectresourceallocations", foreignKey: "actprojectid" });
actproject.hasMany(actratebilling, { as: "actratebillings", foreignKey: "actprojectid" });
actproject.hasMany(actrateexpense, { as: "actrateexpenses", foreignKey: "actprojectid" });
actproject.hasMany(gltransactionsubtypeinvoice, { as: "gltransactionsubtypeinvoices", foreignKey: "actprojectid" });

actprojectresourceallocation.belongsTo(actproject, { as: "actproject", foreignKey: "actprojectid" });
actprojectresourceallocation.belongsTo(acttype, { as: "acttype", foreignKey: "acttypeid" });
actprojectresourceallocation.belongsTo(crmcontact, { as: "crmcontact", foreignKey: "crmcontactid" });

actratebilling.belongsTo(actproject, { as: "actproject", foreignKey: "actprojectid" });
actratebilling.belongsTo(acttype, { as: "acttype", foreignKey: "acttypeid" });

actrateexpense.belongsTo(actproject, { as: "actproject", foreignKey: "actprojectid" });
actrateexpense.belongsTo(acttype, { as: "acttype", foreignKey: "acttypeid" });

actsource.hasMany(actproject, { as: "actprojects", foreignKey: "actsourceid" });

actstatus.hasMany(actactivity, { as: "actactivities", foreignKey: "actstatusid" });
actstatus.hasMany(actproject, { as: "actprojects", foreignKey: "actstatusid" });

acttype.belongsTo(actcostunit, { as: "actcostunit", foreignKey: "actcostunitid" });
acttype.belongsTo(acttype, { as: "acttypeidparent_acttype", foreignKey: "acttypeidparent" });
acttype.belongsTo(glaccount, { as: "glaccount", foreignKey: "glaccountid" });
acttype.belongsTo(glcostcentre, { as: "glcostcentre", foreignKey: "glcostcentreid" });
acttype.belongsTo(sysmultilinktablerule, {
    as: "sysmultilinktableruleidperformedby_sysmultilinktablerule",
    foreignKey: "sysmultilinktableruleidperformedby",
});
acttype.belongsTo(sysmultilinktablerule, {
    as: "sysmultilinktableruleidperformedfor_sysmultilinktablerule",
    foreignKey: "sysmultilinktableruleidperformedfor",
});
acttype.hasMany(actactivity, { as: "actactivities", foreignKey: "acttypeid" });
acttype.hasMany(actprojectresourceallocation, { as: "actprojectresourceallocations", foreignKey: "acttypeid" });
acttype.hasMany(actratebilling, { as: "actratebillings", foreignKey: "acttypeid" });
acttype.hasMany(actrateexpense, { as: "actrateexpenses", foreignKey: "acttypeid" });
acttype.hasMany(acttype, { as: "acttypes", foreignKey: "acttypeidparent" });

comattribute.belongsTo(comattribute, { as: "comattributeidparent_comattribute", foreignKey: "comattributeidparent" });
comattribute.belongsTo(sysdatatype, { as: "ismandatory_sysdatatype", foreignKey: "ismandatory" });
comattribute.belongsTo(sysdatatype, { as: "sysdatatype", foreignKey: "sysdatatypeid" });
comattribute.belongsTo(sysmultilinktablerule, { as: "sysmultilinktablerule", foreignKey: "sysmultilinktableruleid" });
comattribute.hasMany(comattribute, { as: "comattributes", foreignKey: "comattributeidparent" });
comattribute.hasMany(comattributedetail, { as: "comattributedetails", foreignKey: "comattributeid" });

comattributedetail.belongsTo(comattribute, { as: "comattribute", foreignKey: "comattributeid" });

comcity.belongsTo(comcountry, { as: "comcountry", foreignKey: "comcountryid" });
comcity.belongsTo(comprovincestate, { as: "comprovincestate", foreignKey: "comprovincestateid" });
comcity.hasMany(crmaddress, { as: "crmaddresses", foreignKey: "comcityid" });

comcountry.hasMany(comcity, { as: "comcities", foreignKey: "comcountryid" });
comcountry.hasMany(comprovincestate, { as: "comprovincestates", foreignKey: "comcountryid" });

comcrossreference.belongsTo(comcrossreferencetype, { as: "comcrossreferencetype", foreignKey: "comcrossreferencetypeid" });

comcrossreferencetype.hasMany(comcrossreference, { as: "comcrossreferences", foreignKey: "comcrossreferencetypeid" });

comlocation.belongsTo(comlocation, { as: "comlocationidparent_comlocation", foreignKey: "comlocationidparent" });
comlocation.hasMany(comlocation, { as: "comlocations", foreignKey: "comlocationidparent" });
comlocation.hasMany(hrposition, { as: "hrpositions", foreignKey: "comlocationid" });

compersonalcomment.belongsTo(crmcontact, { as: "crmcontactiduser_crmcontact", foreignKey: "crmcontactiduser" });

comprovincestate.belongsTo(comcountry, { as: "comcountry", foreignKey: "comcountryid" });
comprovincestate.hasMany(comcity, { as: "comcities", foreignKey: "comprovincestateid" });
comprovincestate.hasMany(glrate, { as: "glrates", foreignKey: "comprovincestateid" });

crmaddress.belongsTo(comcity, { as: "comcity", foreignKey: "comcityid" });
crmaddress.belongsTo(crmaddress, { as: "crmaddressidinheritedfrom_crmaddress", foreignKey: "crmaddressidinheritedfrom" });
crmaddress.belongsTo(crmaddresstype, { as: "crmaddresstype", foreignKey: "crmaddresstypeid" });
crmaddress.belongsTo(crmcontact, { as: "crmcontact", foreignKey: "crmcontactid" });
crmaddress.hasMany(crmaddress, { as: "crmaddresses", foreignKey: "crmaddressidinheritedfrom" });

crmaddressemail.belongsTo(crmaddresstype, { as: "crmaddresstype", foreignKey: "crmaddresstypeid" });
crmaddressemail.belongsTo(crmcontact, { as: "crmcontact", foreignKey: "crmcontactid" });

crmaddressphone.belongsTo(crmaddressphonetype, { as: "crmaddressphonetype", foreignKey: "crmaddressphonetypeid" });
crmaddressphone.belongsTo(crmaddresstype, { as: "crmaddresstype", foreignKey: "crmaddresstypeid" });
crmaddressphone.belongsTo(crmcontact, { as: "crmcontact", foreignKey: "crmcontactid" });

crmaddressphonetype.hasMany(crmaddressphone, { as: "crmaddressphones", foreignKey: "crmaddressphonetypeid" });

crmaddresstype.hasMany(crmaddress, { as: "crmaddresses", foreignKey: "crmaddresstypeid" });
crmaddresstype.hasMany(crmaddressemail, { as: "crmaddressemails", foreignKey: "crmaddresstypeid" });
crmaddresstype.hasMany(crmaddressphone, { as: "crmaddressphones", foreignKey: "crmaddresstypeid" });

crmcontact.belongsTo(crmgender, { as: "crmgender", foreignKey: "crmgenderid" });
crmcontact.belongsTo(crmlanguage, { as: "crmlanguage", foreignKey: "crmlanguageid" });
crmcontact.belongsTo(crmsalutation, { as: "crmsalutation", foreignKey: "crmsalutationid" });
crmcontact.hasMany(actactivitysubtypebilling, { as: "actactivitysubtypebillings", foreignKey: "crmcontactidinvoicethrough" });
crmcontact.hasMany(actproject, { as: "actprojects", foreignKey: "crmcontactid" });
crmcontact.hasMany(actprojectresourceallocation, { as: "actprojectresourceallocations", foreignKey: "crmcontactid" });
crmcontact.hasMany(compersonalcomment, { as: "compersonalcomments", foreignKey: "crmcontactiduser" });
crmcontact.hasMany(crmaddress, { as: "crmaddresses", foreignKey: "crmcontactid" });
crmcontact.hasMany(crmaddressemail, { as: "crmaddressemails", foreignKey: "crmcontactid" });
crmcontact.hasMany(crmaddressphone, { as: "crmaddressphones", foreignKey: "crmcontactid" });
crmcontact.hasMany(crmcontactsubtypeemployee, { as: "crmcontactsubtypeemployees", foreignKey: "crmcontactid" });
crmcontact.hasMany(crmrelationship, { as: "crmcontactid2_crmrelationships", foreignKey: "crmcontactid2" });
crmcontact.hasMany(crmrelationship, { as: "crmrelationships", foreignKey: "crmcontactid1" });
crmcontact.hasMany(falocationhistory, { as: "falocationhistories", foreignKey: "crmcontactidassignedto" });
crmcontact.hasMany(glbillingaccount, { as: "glbillingaccounts", foreignKey: "crmcontactid" });
crmcontact.hasMany(gldeposit, { as: "gldeposits", foreignKey: "crmcontactid" });
crmcontact.hasMany(glsetup, { as: "glsetups", foreignKey: "crmcontactidcompany" });
crmcontact.hasMany(gltransactionsubtypecashreceipt, {
    as: "crmcontactidpaidfor_gltransactionsubtypecashreceipts",
    foreignKey: "crmcontactidpaidfor",
});
crmcontact.hasMany(gltransactionsubtypecashreceipt, { as: "gltransactionsubtypecashreceipts", foreignKey: "crmcontactidenteredby" });
crmcontact.hasMany(hrposition, { as: "hrpositions", foreignKey: "crmcontactidemployee" });
crmcontact.hasMany(syschangehistory, { as: "syschangehistories", foreignKey: "crmcontactiduser" });
crmcontact.hasOne(crmcontactsubtypeuser, { as: "crmcontactsubtypeuser", foreignKey: "crmcontactid" });

crmcontactsubtypeemployee.belongsTo(crmcontact, { as: "crmcontact", foreignKey: "crmcontactid" });
crmcontactsubtypeemployee.belongsTo(hremploymentstatus, { as: "hremploymentstatus", foreignKey: "hremploymentstatusid" });
crmcontactsubtypeuser.belongsTo(crmcontact, { as: "crmcontact", foreignKey: "crmcontactid" });

crmgender.hasMany(crmcontact, { as: "crmcontacts", foreignKey: "crmgenderid" });

crmlanguage.hasMany(crmcontact, { as: "crmcontacts", foreignKey: "crmlanguageid" });

crmrelationship.belongsTo(crmcontact, { as: "crmcontactid1_crmcontact", foreignKey: "crmcontactid1" });
crmrelationship.belongsTo(crmcontact, { as: "crmcontactid2_crmcontact", foreignKey: "crmcontactid2" });
crmrelationship.belongsTo(crmrelationshiptype, { as: "crmrelationshiptype", foreignKey: "crmrelationshiptypeid" });

crmrelationshiptype.hasMany(crmrelationship, { as: "crmrelationships", foreignKey: "crmrelationshiptypeid" });

crmsalutation.hasMany(crmcontact, { as: "crmcontacts", foreignKey: "crmsalutationid" });

exgovernance.belongsTo(exrecordgroup, { as: "exrecordgroup", foreignKey: "exrecordgroupid" });
exgovernance.belongsTo(exsystem, { as: "exsystem", foreignKey: "exsystemid" });
exgovernance.hasMany(exgovernancedetail, { as: "exgovernancedetails", foreignKey: "exgovernanceid" });

exgovernancedetail.belongsTo(exgovernance, { as: "exgovernance", foreignKey: "exgovernanceid" });
exgovernancedetail.belongsTo(exrecordgroup, { as: "exrecordgroup", foreignKey: "exrecordgroupid" });
exgovernancedetail.belongsTo(exsystem, { as: "exsystem", foreignKey: "exsystemid" });

exhistory.belongsTo(exhistorybatch, { as: "exhistorybatch", foreignKey: "exhistorybatchid" });
exhistory.belongsTo(exsystem, { as: "exsystemiddestination_exsystem", foreignKey: "exsystemiddestination" });
exhistory.belongsTo(syschangehistoryrow, {
    as: "syschangehistoryrowidexported_syschangehistoryrow",
    foreignKey: "syschangehistoryrowidexported",
});
exhistory.hasMany(exmessage, { as: "exmessages", foreignKey: "exhistoryid" });

exhistorybatch.hasMany(exhistory, { as: "exhistories", foreignKey: "exhistorybatchid" });
exhistorybatch.hasMany(exmessage, { as: "exmessages", foreignKey: "exhistorybatchid" });

exmessage.belongsTo(exhistory, { as: "exhistory", foreignKey: "exhistoryid" });
exmessage.belongsTo(exhistorybatch, { as: "exhistorybatch", foreignKey: "exhistorybatchid" });
exmessage.belongsTo(sysdictionarytable, { as: "sysdictionarytable", foreignKey: "sysdictionarytableid" });
exmessage.belongsTo(sysmessage, { as: "sysmessage", foreignKey: "sysmessageid" });

exmessageoverride.belongsTo(sysdictionarytable, { as: "sysdictionarytable", foreignKey: "sysdictionarytableid" });
exmessageoverride.belongsTo(sysmessage, { as: "sysmessage", foreignKey: "sysmessageid" });

expackage.belongsTo(exsubnetserver, { as: "exsubnetserver", foreignKey: "exsubnetserverid" });

exrecordgroup.belongsTo(exrecordgroup, { as: "exrecordgroupidparent_exrecordgroup", foreignKey: "exrecordgroupidparent" });
exrecordgroup.belongsTo(sysdictionarycolumn, { as: "sysdictionarycolumn", foreignKey: "sysdictionarycolumnid" });
exrecordgroup.belongsTo(sysdictionarytable, { as: "sysdictionarytable", foreignKey: "sysdictionarytableid" });
exrecordgroup.hasMany(exgovernance, { as: "exgovernances", foreignKey: "exrecordgroupid" });
exrecordgroup.hasMany(exgovernancedetail, { as: "exgovernancedetails", foreignKey: "exrecordgroupid" });
exrecordgroup.hasMany(exrecordgroup, { as: "exrecordgroups", foreignKey: "exrecordgroupidparent" });
exrecordgroup.hasMany(exsubscription, { as: "exsubscriptions", foreignKey: "exrecordgroupid" });
exrecordgroup.hasMany(exsubscriptiondetail, { as: "exsubscriptiondetails", foreignKey: "exrecordgroupid" });

exsubnetserver.hasMany(expackage, { as: "expackages", foreignKey: "exsubnetserverid" });

exsubscriber.belongsTo(exsubscriber, { as: "exsubscriberidparent_exsubscriber", foreignKey: "exsubscriberidparent" });
exsubscriber.belongsTo(exsystem, { as: "exsystem", foreignKey: "exsystemid" });
exsubscriber.hasMany(exsubscriber, { as: "exsubscribers", foreignKey: "exsubscriberidparent" });
exsubscriber.hasMany(exsubscription, { as: "exsubscriptions", foreignKey: "exsubscriberid" });
exsubscriber.hasMany(exsubscriptiondetail, { as: "exsubscriptiondetails", foreignKey: "exsubscriberid" });

exsubscription.belongsTo(exrecordgroup, { as: "exrecordgroup", foreignKey: "exrecordgroupid" });
exsubscription.belongsTo(exsubscriber, { as: "exsubscriber", foreignKey: "exsubscriberid" });
exsubscription.hasMany(exsubscriptiondetail, { as: "exsubscriptiondetails", foreignKey: "exsubscriptionid" });
exsubscription.hasMany(exsubscriptionredaction, { as: "exsubscriptionredactions", foreignKey: "exsubscriptionid" });

exsubscriptiondetail.belongsTo(exrecordgroup, { as: "exrecordgroup", foreignKey: "exrecordgroupid" });
exsubscriptiondetail.belongsTo(exsubscriber, { as: "exsubscriber", foreignKey: "exsubscriberid" });
exsubscriptiondetail.belongsTo(exsubscription, { as: "exsubscription", foreignKey: "exsubscriptionid" });

exsubscriptionredaction.belongsTo(exsubscription, { as: "exsubscription", foreignKey: "exsubscriptionid" });
exsubscriptionredaction.belongsTo(sysdictionarycolumn, {
    as: "sysdictionarycolumnidredacted_sysdictionarycolumn",
    foreignKey: "sysdictionarycolumnidredacted",
});

exsystem.hasMany(exgovernance, { as: "exgovernances", foreignKey: "exsystemid" });
exsystem.hasMany(exgovernancedetail, { as: "exgovernancedetails", foreignKey: "exsystemid" });
exsystem.hasMany(exhistory, { as: "exhistories", foreignKey: "exsystemiddestination" });
exsystem.hasMany(exsubscriber, { as: "exsubscribers", foreignKey: "exsystemid" });

fafixedasset.belongsTo(fastatus, { as: "fastatus", foreignKey: "fastatusid" });
fafixedasset.belongsTo(fatype, { as: "fatype", foreignKey: "fatypeid" });
fafixedasset.hasMany(falocationhistory, { as: "falocationhistories", foreignKey: "fafixedassetid" });

falocationhistory.belongsTo(crmcontact, { as: "crmcontactidassignedto_crmcontact", foreignKey: "crmcontactidassignedto" });
falocationhistory.belongsTo(fafixedasset, { as: "fafixedasset", foreignKey: "fafixedassetid" });
falocationhistory.belongsTo(glcostcentre, { as: "glcostcentreidownedby_glcostcentre", foreignKey: "glcostcentreidownedby" });

fastatus.hasMany(fafixedasset, { as: "fafixedassets", foreignKey: "fastatusid" });

fatype.belongsTo(fatype, { as: "fatypeidparent_fatype", foreignKey: "fatypeidparent" });
fatype.belongsTo(glaccount, { as: "glaccountidaccummulateddepreciation_glaccount", foreignKey: "glaccountidaccummulateddepreciation" });
fatype.belongsTo(glaccount, { as: "glaccountidasset_glaccount", foreignKey: "glaccountidasset" });
fatype.belongsTo(glaccount, { as: "glaccountiddepreciationexpense_glaccount", foreignKey: "glaccountiddepreciationexpense" });
fatype.hasMany(fafixedasset, { as: "fafixedassets", foreignKey: "fatypeid" });
fatype.hasMany(fatype, { as: "fatypes", foreignKey: "fatypeidparent" });

glaccount.belongsTo(glaccount, { as: "glaccountidparent_glaccount", foreignKey: "glaccountidparent" });
glaccount.belongsTo(glaccounttype, { as: "glaccounttype", foreignKey: "glaccounttypeid" });
glaccount.belongsTo(sysmultilinktablerule, { as: "sysmultilinktablerule", foreignKey: "sysmultilinktableruleid" });
glaccount.hasMany(acttype, { as: "acttypes", foreignKey: "glaccountid" });
glaccount.hasMany(fatype, { as: "fatypes", foreignKey: "glaccountidaccummulateddepreciation" });
glaccount.hasMany(fatype, { as: "glaccountidasset_fatypes", foreignKey: "glaccountidasset" });
glaccount.hasMany(fatype, { as: "glaccountiddepreciationexpense_fatypes", foreignKey: "glaccountiddepreciationexpense" });
glaccount.hasMany(glaccount, { as: "glaccounts", foreignKey: "glaccountidparent" });
glaccount.hasMany(glaccountbalance, { as: "glaccountbalances", foreignKey: "glaccountid" });
glaccount.hasMany(glaccountcostcentre, { as: "glaccountcostcentres", foreignKey: "glaccountid" });
glaccount.hasMany(glbatch, { as: "glbatches", foreignKey: "glaccountid" });
glaccount.hasMany(glbillingaccount, { as: "glbillingaccounts", foreignKey: "glaccountid" });
glaccount.hasMany(glbillingaccountbalance, { as: "glbillingaccountbalances", foreignKey: "glaccountid" });
glaccount.hasMany(glbudget, { as: "glbudgets", foreignKey: "glaccountid" });
glaccount.hasMany(glentry, { as: "glentries", foreignKey: "glaccountid" });
glaccount.hasMany(glsetup, { as: "glaccountiddisbursement_glsetups", foreignKey: "glaccountiddisbursement" });
glaccount.hasMany(glsetup, { as: "glaccountidgst_glsetups", foreignKey: "glaccountidgst" });
glaccount.hasMany(glsetup, { as: "glaccountidhst_glsetups", foreignKey: "glaccountidhst" });
glaccount.hasMany(glsetup, { as: "glaccountidpayable_glsetups", foreignKey: "glaccountidpayable" });
glaccount.hasMany(glsetup, { as: "glaccountidpst_glsetups", foreignKey: "glaccountidpst" });
glaccount.hasMany(glsetup, { as: "glaccountidreceivable_glsetups", foreignKey: "glaccountidreceivable" });
glaccount.hasMany(glsetup, { as: "glaccountidwriteoff_glsetups", foreignKey: "glaccountidwriteoff" });
glaccount.hasMany(glsetup, { as: "glsetups", foreignKey: "glaccountidcash" });

glaccountbalance.belongsTo(glaccount, { as: "glaccount", foreignKey: "glaccountid" });
glaccountbalance.belongsTo(glcostcentre, { as: "glcostcentre", foreignKey: "glcostcentreid" });

glaccountcostcentre.belongsTo(glaccount, { as: "glaccount", foreignKey: "glaccountid" });
glaccountcostcentre.belongsTo(glcostcentre, { as: "glcostcentre", foreignKey: "glcostcentreid" });

glaccounttype.hasMany(glaccount, { as: "glaccounts", foreignKey: "glaccounttypeid" });

glbatch.belongsTo(glaccount, { as: "glaccount", foreignKey: "glaccountid" });
glbatch.belongsTo(glbatchstatus, { as: "glbatchstatus", foreignKey: "glbatchstatusid" });
glbatch.belongsTo(glbatchtype, { as: "glbatchtype", foreignKey: "glbatchtypeid" });
glbatch.belongsTo(glexportbatch, { as: "glexportbatch", foreignKey: "glexportbatchid" });
glbatch.hasMany(glexporttransaction, { as: "glexporttransactions", foreignKey: "glbatchid" });
glbatch.hasMany(gltransaction, { as: "gltransactions", foreignKey: "glbatchid" });

glbatchstatus.hasMany(glbatch, { as: "glbatches", foreignKey: "glbatchstatusid" });

glbatchtype.hasMany(glbatch, { as: "glbatches", foreignKey: "glbatchtypeid" });

glbillingaccount.belongsTo(crmcontact, { as: "crmcontact", foreignKey: "crmcontactid" });
glbillingaccount.belongsTo(glaccount, { as: "glaccount", foreignKey: "glaccountid" });
glbillingaccount.belongsTo(glbillingaccountstatus, { as: "glbillingaccountstatus", foreignKey: "glbillingaccountstatusid" });
glbillingaccount.belongsTo(glbillingmethod, { as: "glbillingmethod", foreignKey: "glbillingmethodid" });
glbillingaccount.belongsTo(glefttype, { as: "glefttype", foreignKey: "glefttypeid" });
glbillingaccount.hasMany(gltransactionsubtypecheque, { as: "gltransactionsubtypecheques", foreignKey: "glbillingaccountid" });
glbillingaccount.hasMany(gltransactionsubtypeinvoice, { as: "gltransactionsubtypeinvoices", foreignKey: "glbillingaccountid" });

glbillingaccountbalance.belongsTo(glaccount, { as: "glaccount", foreignKey: "glaccountid" });
glbillingaccountstatus.hasMany(glbillingaccount, { as: "glbillingaccounts", foreignKey: "glbillingaccountstatusid" });

glbillingmethod.hasMany(glbillingaccount, { as: "glbillingaccounts", foreignKey: "glbillingmethodid" });

glbudget.belongsTo(glaccount, { as: "glaccount", foreignKey: "glaccountid" });
glbudget.belongsTo(glcostcentre, { as: "glcostcentre", foreignKey: "glcostcentreid" });

glcostcentre.belongsTo(glcostcentre, { as: "glcostcentreidparent_glcostcentre", foreignKey: "glcostcentreidparent" });
glcostcentre.hasMany(actproject, { as: "actprojects", foreignKey: "glcostcentreid" });
glcostcentre.hasMany(acttype, { as: "acttypes", foreignKey: "glcostcentreid" });
glcostcentre.hasMany(falocationhistory, { as: "falocationhistories", foreignKey: "glcostcentreidownedby" });
glcostcentre.hasMany(glaccountbalance, { as: "glaccountbalances", foreignKey: "glcostcentreid" });
glcostcentre.hasMany(glaccountcostcentre, { as: "glaccountcostcentres", foreignKey: "glcostcentreid" });
glcostcentre.hasMany(glbudget, { as: "glbudgets", foreignKey: "glcostcentreid" });
glcostcentre.hasMany(glcostcentre, { as: "glcostcentres", foreignKey: "glcostcentreidparent" });
glcostcentre.hasMany(glentry, { as: "glentries", foreignKey: "glcostcentreid" });
glcostcentre.hasMany(glsetup, { as: "glsetups", foreignKey: "glcostcentreidwriteoff" });
glcostcentre.hasMany(hrposition, { as: "hrpositions", foreignKey: "glcostcentreid" });

gldeposit.belongsTo(crmcontact, { as: "crmcontact", foreignKey: "crmcontactid" });
gldeposit.belongsTo(gldepositstatus, { as: "gldepositstatus", foreignKey: "gldepositstatusid" });
gldeposit.hasMany(gltransactionsubtypecashreceipt, { as: "gltransactionsubtypecashreceipts", foreignKey: "gldepositid" });

gldepositstatus.hasMany(gldeposit, { as: "gldeposits", foreignKey: "gldepositstatusid" });

glefttype.hasMany(glbillingaccount, { as: "glbillingaccounts", foreignKey: "glefttypeid" });

glentry.belongsTo(glaccount, { as: "glaccount", foreignKey: "glaccountid" });
glentry.belongsTo(glcostcentre, { as: "glcostcentre", foreignKey: "glcostcentreid" });
glentry.belongsTo(glentrytype, { as: "glentrytype", foreignKey: "glentrytypeid" });
glentry.belongsTo(gltransaction, { as: "gltransaction", foreignKey: "gltransactionid" });
glentry.hasMany(glreconciliation, { as: "glentryidto_glreconciliations", foreignKey: "glentryidto" });
glentry.hasMany(glreconciliation, { as: "glreconciliations", foreignKey: "glentryidfrom" });
glentry.hasMany(gltransaction, { as: "glentryidmain_gltransactions", foreignKey: "glentryidmain" });

glentrytype.hasMany(glentry, { as: "glentries", foreignKey: "glentrytypeid" });

glexportbatch.hasMany(glbatch, { as: "glbatches", foreignKey: "glexportbatchid" });
glexportbatch.hasMany(glexporttransaction, { as: "glexporttransactions", foreignKey: "glexportbatchid" });

glexportentry.belongsTo(glexporttransaction, { as: "glexporttransaction", foreignKey: "glexporttransactionid" });

glexporttransaction.belongsTo(glbatch, { as: "glbatch", foreignKey: "glbatchid" });
glexporttransaction.belongsTo(glexportbatch, { as: "glexportbatch", foreignKey: "glexportbatchid" });
glexporttransaction.hasMany(glexportentry, { as: "glexportentries", foreignKey: "glexporttransactionid" });

glpaymentmethod.hasMany(gltransactionsubtypecashreceipt, { as: "gltransactionsubtypecashreceipts", foreignKey: "glpaymentmethodid" });

glpostingstatus.hasMany(gltransaction, { as: "gltransactions", foreignKey: "glpostingstatusid" });

glrate.belongsTo(comprovincestate, { as: "comprovincestate", foreignKey: "comprovincestateid" });
glrate.belongsTo(glratetype, { as: "glratetype", foreignKey: "glratetypeid" });

glratetype.hasMany(glrate, { as: "glrates", foreignKey: "glratetypeid" });

glreconciliation.belongsTo(glentry, { as: "glentryidfrom_glentry", foreignKey: "glentryidfrom" });
glreconciliation.belongsTo(glentry, { as: "glentryidto_glentry", foreignKey: "glentryidto" });

glsetup.belongsTo(crmcontact, { as: "crmcontactidcompany_crmcontact", foreignKey: "crmcontactidcompany" });
glsetup.belongsTo(glaccount, { as: "glaccountidcash_glaccount", foreignKey: "glaccountidcash" });
glsetup.belongsTo(glaccount, { as: "glaccountiddisbursement_glaccount", foreignKey: "glaccountiddisbursement" });
glsetup.belongsTo(glaccount, { as: "glaccountidgst_glaccount", foreignKey: "glaccountidgst" });
glsetup.belongsTo(glaccount, { as: "glaccountidhst_glaccount", foreignKey: "glaccountidhst" });
glsetup.belongsTo(glaccount, { as: "glaccountidpayable_glaccount", foreignKey: "glaccountidpayable" });
glsetup.belongsTo(glaccount, { as: "glaccountidpst_glaccount", foreignKey: "glaccountidpst" });
glsetup.belongsTo(glaccount, { as: "glaccountidreceivable_glaccount", foreignKey: "glaccountidreceivable" });
glsetup.belongsTo(glaccount, { as: "glaccountidwriteoff_glaccount", foreignKey: "glaccountidwriteoff" });
glsetup.belongsTo(glcostcentre, { as: "glcostcentreidwriteoff_glcostcentre", foreignKey: "glcostcentreidwriteoff" });

gltransaction.belongsTo(glbatch, { as: "glbatch", foreignKey: "glbatchid" });
gltransaction.belongsTo(glentry, { as: "glentryidmain_glentry", foreignKey: "glentryidmain" });
gltransaction.belongsTo(glpostingstatus, { as: "glpostingstatus", foreignKey: "glpostingstatusid" });
gltransaction.belongsTo(gltransaction, { as: "gltransactionidreversed_gltransaction", foreignKey: "gltransactionidreversed" });
gltransaction.belongsTo(gltransactiontype, { as: "gltransactiontype", foreignKey: "gltransactiontypeid" });
gltransaction.belongsTo(sysdictionarytable, { as: "sysdictionarytableidsubtype_sysdictionarytable", foreignKey: "sysdictionarytableidsubtype" });
gltransaction.hasMany(actactivitysubtypebilling, { as: "actactivitysubtypebillings", foreignKey: "gltransactionid" });
gltransaction.hasMany(glentry, { as: "glentries", foreignKey: "gltransactionid" });
gltransaction.hasMany(gltransaction, { as: "gltransactions", foreignKey: "gltransactionidreversed" });
gltransaction.hasOne(gltransactionsubtypecashreceipt, { as: "gltransactionsubtypecashreceipt", foreignKey: "gltransactionid" });
gltransaction.hasOne(gltransactionsubtypecheque, { as: "gltransactionsubtypecheque", foreignKey: "gltransactionid" });
gltransaction.hasOne(gltransactionsubtypeinvoice, { as: "gltransactionsubtypeinvoice", foreignKey: "gltransactionid" });

gltransactionsubtypecashreceipt.belongsTo(crmcontact, { as: "crmcontactidenteredby_crmcontact", foreignKey: "crmcontactidenteredby" });
gltransactionsubtypecashreceipt.belongsTo(crmcontact, { as: "crmcontactidpaidfor_crmcontact", foreignKey: "crmcontactidpaidfor" });
gltransactionsubtypecashreceipt.belongsTo(gldeposit, { as: "gldeposit", foreignKey: "gldepositid" });
gltransactionsubtypecashreceipt.belongsTo(glpaymentmethod, { as: "glpaymentmethod", foreignKey: "glpaymentmethodid" });
gltransactionsubtypecashreceipt.belongsTo(gltransaction, { as: "gltransaction", foreignKey: "gltransactionid" });

gltransactionsubtypecheque.belongsTo(glbillingaccount, { as: "glbillingaccount", foreignKey: "glbillingaccountid" });
gltransactionsubtypecheque.belongsTo(gltransaction, { as: "gltransaction", foreignKey: "gltransactionid" });

gltransactionsubtypeinvoice.belongsTo(actproject, { as: "actproject", foreignKey: "actprojectid" });
gltransactionsubtypeinvoice.belongsTo(glbillingaccount, { as: "glbillingaccount", foreignKey: "glbillingaccountid" });
gltransactionsubtypeinvoice.belongsTo(gltransaction, { as: "gltransaction", foreignKey: "gltransactionid" });

gltransactiontype.hasMany(gltransaction, { as: "gltransactions", foreignKey: "gltransactiontypeid" });

hremploymentstatus.hasMany(crmcontactsubtypeemployee, { as: "crmcontactsubtypeemployees", foreignKey: "hremploymentstatusid" });

hrgrade.hasMany(hrposition, { as: "hrpositions", foreignKey: "hrgradeid" });

hrposition.belongsTo(comlocation, { as: "comlocation", foreignKey: "comlocationid" });
hrposition.belongsTo(crmcontact, { as: "crmcontactidemployee_crmcontact", foreignKey: "crmcontactidemployee" });
hrposition.belongsTo(glcostcentre, { as: "glcostcentre", foreignKey: "glcostcentreid" });
hrposition.belongsTo(hrgrade, { as: "hrgrade", foreignKey: "hrgradeid" });
hrposition.belongsTo(hrpositionclassification, { as: "hrpositionclassification", foreignKey: "hrpositionclassificationid" });
hrposition.belongsTo(hrpositiontype, { as: "hrpositiontype", foreignKey: "hrpositiontypeid" });

hrpositionclassification.hasMany(hrposition, { as: "hrpositions", foreignKey: "hrpositionclassificationid" });

hrpositiontype.hasMany(hrposition, { as: "hrpositions", foreignKey: "hrpositiontypeid" });

syschangehistory.belongsTo(crmcontact, { as: "crmcontactiduser_crmcontact", foreignKey: "crmcontactiduser" });
syschangehistory.belongsTo(syscommand, { as: "syscommand", foreignKey: "syscommandid" });
syschangehistory.hasMany(syschangehistoryrow, { as: "syschangehistoryrows", foreignKey: "syschangehistoryid" });

syschangehistorycolumn.belongsTo(syschangehistoryrow, { as: "syschangehistoryrow", foreignKey: "syschangehistoryrowid" });
syschangehistorycolumn.belongsTo(sysdictionarycolumn, { as: "sysdictionarycolumn", foreignKey: "sysdictionarycolumnid" });
syschangehistorycolumn.belongsTo(sysdictionarytable, {
    as: "sysdictionarytableidafter_sysdictionarytable",
    foreignKey: "sysdictionarytableidafter",
});
syschangehistorycolumn.belongsTo(sysdictionarytable, {
    as: "sysdictionarytableidbefore_sysdictionarytable",
    foreignKey: "sysdictionarytableidbefore",
});

syschangehistoryrow.belongsTo(syschangehistory, { as: "syschangehistory", foreignKey: "syschangehistoryid" });
syschangehistoryrow.hasMany(exhistory, { as: "exhistories", foreignKey: "syschangehistoryrowidexported" });
syschangehistoryrow.hasMany(syschangehistorycolumn, { as: "syschangehistorycolumns", foreignKey: "syschangehistoryrowid" });

syscommand.hasMany(syschangehistory, { as: "syschangehistories", foreignKey: "syscommandid" });
syscommand.hasMany(sysdictionarytable, { as: "sysdictionarytables", foreignKey: "syscommandid" });

sysdatatype.hasMany(comattribute, { as: "comattributes", foreignKey: "ismandatory" });
sysdatatype.hasMany(comattribute, { as: "sysdatatype_comattributes", foreignKey: "sysdatatypeid" });

sysdictionarycolumn.belongsTo(sysdictionarytable, { as: "sysdictionarytable", foreignKey: "sysdictionarytableid" });
sysdictionarycolumn.belongsTo(sysdictionarytable, {
    as: "sysdictionarytableidforeign_sysdictionarytable",
    foreignKey: "sysdictionarytableidforeign",
});
sysdictionarycolumn.hasMany(exrecordgroup, { as: "exrecordgroups", foreignKey: "sysdictionarycolumnid" });
sysdictionarycolumn.hasMany(exsubscriptionredaction, { as: "exsubscriptionredactions", foreignKey: "sysdictionarycolumnidredacted" });
sysdictionarycolumn.hasMany(syschangehistorycolumn, { as: "syschangehistorycolumns", foreignKey: "sysdictionarycolumnid" });
sysdictionarycolumn.hasMany(sysmasterdataindex, { as: "sysmasterdataindices", foreignKey: "sysdictionarycolumnidforeign" });
sysdictionarycolumn.hasMany(sysmultilinktablerule, {
    as: "sysdictionarycolumnidsource_sysmultilinktablerules",
    foreignKey: "sysdictionarycolumnidsource",
});
sysdictionarycolumn.hasMany(sysmultilinktablerule, { as: "sysmultilinktablerules", foreignKey: "sysdictionarycolumniddest" });

sysdictionarytable.belongsTo(syscommand, { as: "syscommand", foreignKey: "syscommandid" });
sysdictionarytable.hasMany(exmessage, { as: "exmessages", foreignKey: "sysdictionarytableid" });
sysdictionarytable.hasMany(exmessageoverride, { as: "exmessageoverrides", foreignKey: "sysdictionarytableid" });
sysdictionarytable.hasMany(exrecordgroup, { as: "exrecordgroups", foreignKey: "sysdictionarytableid" });
sysdictionarytable.hasMany(gltransaction, { as: "gltransactions", foreignKey: "sysdictionarytableidsubtype" });
sysdictionarytable.hasMany(syschangehistorycolumn, { as: "syschangehistorycolumns", foreignKey: "sysdictionarytableidafter" });
sysdictionarytable.hasMany(syschangehistorycolumn, {
    as: "sysdictionarytableidbefore_syschangehistorycolumns",
    foreignKey: "sysdictionarytableidbefore",
});
sysdictionarytable.hasMany(sysdictionarycolumn, { as: "sysdictionarycolumns", foreignKey: "sysdictionarytableid" });
sysdictionarytable.hasMany(sysdictionarycolumn, {
    as: "sysdictionarytableidforeign_sysdictionarycolumns",
    foreignKey: "sysdictionarytableidforeign",
});
sysdictionarytable.hasMany(sysmultilinktablerule, { as: "sysmultilinktablerules", foreignKey: "sysdictionarytableid" });

sysmasterdataindex.belongsTo(sysdictionarycolumn, {
    as: "sysdictionarycolumnidforeign_sysdictionarycolumn",
    foreignKey: "sysdictionarycolumnidforeign",
});

sysmessage.hasMany(exmessage, { as: "exmessages", foreignKey: "sysmessageid" });
sysmessage.hasMany(exmessageoverride, { as: "exmessageoverrides", foreignKey: "sysmessageid" });

sysmultilinktablerule.belongsTo(sysdictionarycolumn, {
    as: "sysdictionarycolumniddest_sysdictionarycolumn",
    foreignKey: "sysdictionarycolumniddest",
});
sysmultilinktablerule.belongsTo(sysdictionarycolumn, {
    as: "sysdictionarycolumnidsource_sysdictionarycolumn",
    foreignKey: "sysdictionarycolumnidsource",
});
sysmultilinktablerule.belongsTo(sysdictionarytable, { as: "sysdictionarytable", foreignKey: "sysdictionarytableid" });
sysmultilinktablerule.hasMany(acttype, { as: "acttypes", foreignKey: "sysmultilinktableruleidperformedby" });
sysmultilinktablerule.hasMany(acttype, { as: "sysmultilinktableruleidperformedfor_acttypes", foreignKey: "sysmultilinktableruleidperformedfor" });
sysmultilinktablerule.hasMany(comattribute, { as: "comattributes", foreignKey: "sysmultilinktableruleid" });
sysmultilinktablerule.hasMany(glaccount, { as: "glaccounts", foreignKey: "sysmultilinktableruleid" });
