// Terms

// amenities
class DtAmenities extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    amenities <da-arraystring/>
    `
  }
}
customElements.define("dt-amenities", DtAmenities);
// +
class DdAmenities extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A list of available useful features and facilities of the <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-amenities", DdAmenities);

// app_category
class DtAppCategory extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    app_category <da-string/>
    `
  }
}
customElements.define("dt-app-category", DtAppCategory);
// +
class DdAppCategory extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The high-level family of the application.
    `
  }
}
customElements.define("dd-app-category", DdAppCategory);

// capitalizedResourceName
class capitalizedResourceName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += document.getElementById("capitalizedResourceName").innerHTML;
  }
}
customElements.define("capitalized-resource-name", capitalizedResourceName);

// date_created
class DtDateCreated extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    date_created <da-date/>
    `
  }
}
customElements.define("dt-date-created", DtDateCreated);
// +
class DdDateCreated extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The date the <resource-name></resource-name> was initially made.
    `
  }
}
customElements.define("dd-date-created", DdDateCreated);

// date_modified
class DtDateModified extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    date_modified <da-date/>
    `
  }
}
customElements.define("dt-date-modified", DtDateModified);
// +
class DdDateModified extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The date the <resource-name></resource-name> was last changed and saved.
    `
  }
}
customElements.define("dd-date-modified", DdDateModified);

// description
class DtDescription extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    description <da-string/>
    `
  }
}
customElements.define("dt-description", DtDescription);
// +
class DdDescription extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The informational representation of the <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-description", DdDescription);

// documentation_url
class DtDocumentationUrl extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    documentation_url <da-string/>
    `
  }
}
customElements.define("dt-documentation-url", DtDocumentationUrl);
// +
class DdDocumentationUrl extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The base URL for the <resource-name></resource-name> documentation.
    `
  }
}
customElements.define("dd-documentation-url", DdDocumentationUrl);

// email
class DtEmail extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    email <da-string/>
    `
  }
}
customElements.define("dt-email", DtEmail);
// +
class DdEmail extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    An email address.
    `
  }
}
customElements.define("dd-email", DdEmail);

// id
class DtId extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    id <da-string/>
    `
  }
}
customElements.define("dt-id", DtId);
// +
class DdId extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The unique identifier of the <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-id", DdId);

// items
class DtItems extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    items <da-object/>
    `
  }
}
customElements.define("dt-items", DtItems);
// +
class DdItems extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Collection items.
    `
  }
}
customElements.define("dd-items", DdItems);

// items_count
class DtItemsCount extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    items_count <da-number/>
    `
  }
}
customElements.define("dt-items-count", DtItemsCount);
// +
class DdItemsCount extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The number of items in the collection.
    `
  }
}
customElements.define("dd-items-count", DdItemsCount);

// lease_agreement_details
class DtLeaseAgreementDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    lease_agreement_details <da-string/>
    `
  }
}
customElements.define("dt-lease-agreement-details", DtLeaseAgreementDetails);
// +
class DdLeaseAgreementDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The terms and conditions under which the property is leased.
    `
  }
}
customElements.define("dd-lease-agreement-details", DdLeaseAgreementDetails);

// lease_term
class DtLeaseTerm extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    lease_term <da-string/>
    `
  }
}
customElements.define("dt-lease-term", DtLeaseTerm);
// +
class DdLeaseTerm extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The period of the lease.
    `
  }
}
customElements.define("dd-lease-term", DdLeaseTerm);

// license
class DtLicense extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    license <da-string/>
    `
  }
}
customElements.define("dt-license", DtLicense);
// +
class DdLicense extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The permit from an authority to own or use <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-license", DdLicense);

// mainResourceName
class mainResourceName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += document.getElementById("mainResourceName").innerHTML;
  }
}
customElements.define("main-resource-name", mainResourceName);

// maintenance_schedule
class DtMaintenanceSchedule extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    maintenance_schedule <da-arraystring/>
    `
  }
}
customElements.define("dt-maintenance-schedule", DtMaintenanceSchedule);
// +
class DdMaintenanceSchedule extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A list of all the expected maintenance plans.
    `
  }
}
customElements.define("dd-maintenance-schedule", DdMaintenanceSchedule);

// name
class DtName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    name <da-string/>
    `
  }
}
customElements.define("dt-name", DtName);
// +
class DdName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A word or set of words by which a <resource-name></resource-name> is known, addressed and referred to.
    `
  }
}
customElements.define("dd-name", DdName);

// name-2
class DtName2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    name <da-string/>
    `
  }
}
customElements.define("dt-name-2", DtName2);
// +
class DdName2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A name of a person.
    `
  }
}
customElements.define("dd-name-2", DdName2);

// occupancy
class DtOccupancy extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    occupancy <da-number/>
    `
  }
}
customElements.define("dt-occupancy", DtOccupancy);
// +
class DdOccupancy extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The fact of occupying a <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-occupancy", DdOccupancy);

// owner
class DtOwner extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    owner <da-object/>
    `
  }
}
customElements.define("dt-owner", DtOwner);
// +
class DdOwner extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A person or company that owns <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-owner", DdOwner);

// resourceName
class resourceName extends HTMLElement {
  connectedCallback() {
    this.innerHTML += document.getElementById("resourceName").innerHTML;
  }
}
customElements.define("resource-name", resourceName);

// password
class DtPassword extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    password <da-string/>
    `
  }
}
customElements.define("dt-password", DtPassword);
// +
class DdPassword extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A secret character combination that must be used to gain admission to the <main-resource-name></main-resource-name>.
    `
  }
}
customElements.define("dd-password", DdPassword);

// phone
class DtPhone extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    phone <da-string/>
    `
  }
}
customElements.define("dt-phone", DtPhone);
// +
class DdPhone extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A phone number.
    `
  }
}
customElements.define("dd-phone", DdPhone);

// processing_timeout
class DtProcessingTimeout extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    processing_timeout <da-boolean/>
    `
  }
}
customElements.define("dt-processing-timeout", DtProcessingTimeout);
// +
class DdProcessingTimeout extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    An indication of whether the processing timeout is set:
      <ul>
        <li><b>true</b>: the processing timeout is set.</li>
        <li><b>false</b>: the processing timeout is not set.</li>
      </ul>
    Default processing timeout: 30 seconds.
    `
  }
}
customElements.define("dd-processing-timeout", DdProcessingTimeout);

// property_address
class DtPropertyAddress extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    property_address <da-string/>
    `
  }
}
customElements.define("dt-property-address", DtPropertyAddress);
// +
class DdPropertyAddress extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The address of this property.
    `
  }
}
customElements.define("dd-property-address", DdPropertyAddress);

// property_size
class DtPropertySize extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    property_size <da-string/>
    `
  }
}
customElements.define("dt-property-size", DtPropertySize);
// +
class DdPropertySize extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The size of this property.
    `
  }
}
customElements.define("dd-property-size", DdPropertySize);

// property_type
class DtPropertyType extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    property_type <da-string/>
    `
  }
}
customElements.define("dt-property-type", DtPropertyType);
// +
class DdPropertyType extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The type of this property.
    `
  }
}
customElements.define("dd-property-type", DdPropertyType);

// real_estate_objects
class DtRealEstateObjects extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    real_estate_objects <da-object/>
    `
  }
}
customElements.define("dt-real-estate-objects", DtRealEstateObjects);
// +
class DdRealEstateObjects extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A collection of references to real estate objects.
    `
  }
}
customElements.define("dd-real-estate-objects", DdRealEstateObjects);

// rentable_area
class DtRentableArea extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    rentable_area <da-string/>
    `
  }
}
customElements.define("dt-rentable-area", DtRentableArea);
// +
class DdRentableArea extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The amount of space that is allocated to a tenant.<br/>It can be used to calculate the total rent owed by the tenant to the landlord.
    `
  }
}
customElements.define("dd-rentable-area", DdRentableArea);

// rental_price
class DtRentalPrice extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    rental_price <da-string/>
    `
  }
}
customElements.define("dt-rental-price", DtRentalPrice);
// +
class DdRentalPrice extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A rental price of the <resource-name></resource-name>.
    `
  }
}
customElements.define("dd-rental-price", DdRentalPrice);

// license
class DtSecurityDeposit extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    security_deposit <da-string/>
    `
  }
}
customElements.define("dt-security-deposit", DtSecurityDeposit);
// +
class DdSecurityDeposit extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A sum of money held in trust.
    `
  }
}
customElements.define("dd-security-deposit", DdSecurityDeposit);

// service_enabled
class DtServiceEnabled extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    service_enabled <da-boolean/>
    `
  }
}
customElements.define("dt-service-enabled", DtServiceEnabled);
// +
class DdServiceEnabled extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    An indication of whether the <resource-name></resource-name> is enabled:
      <ul>
        <li><b>true</b>: the service is enabled.</li>
        <li><b>false</b>: the service is disabled.</li>
      </ul>
    Enabled means the system will run the service on the next boot. So if you enable a service, you still need to manually start it, or reboot and it will start.
    `
  }
}
customElements.define("dd-service-enabled", DdServiceEnabled);

// tags
class DtTags extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    tags <da-arraystring/>
    `
  }
}
customElements.define("dt-tags", DtTags);
// +
class DdTags extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Labels attached to the <resource-name></resource-name> for the purpose of identification or to add an extra level of description.
    `
  }
}
customElements.define("dd-tags", DdTags);

// tenant
class DtTenant extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    tenant <da-object/>
    `
  }
}
customElements.define("dt-tenant", DtTenant);
// +
class DdTenant extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A person who rents a property from a landlord.
    `
  }
}
customElements.define("dd-tenant", DdTenant);

// url
class DtUrl extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    url <da-string/>
    `
  }
}
customElements.define("dt-url", DtUrl);
// +
class DdUrl extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Resource URL.
    `
  }
}
customElements.define("dd-url", DdUrl);

// username
class DtUsername extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    username <da-string/>
    `
  }
}
customElements.define("dt-username", DtUsername);
// +
class DdUsername extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    An identifier used by a person with access to the <main-resource-name></main-resource-name>.
    `
  }
}
customElements.define("dd-username", DdUsername);

// utilities
class DtUtilities extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    utilities <da-arraystring/>
    `
  }
}
customElements.define("dt-utilities", DtUtilities);
// +
class DdUtilities extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A list of available utilities:
    <ul>
      <li><b>Electric power</b>.</li>
      <li><b>Natural gas</b>.</li>
      <li><b>Sewerage</b>.</li>
      <li><b>Cold water</b>.</li>
      <li><b>Hot water</b>.</li>
    </ul>
    `
  }
}
customElements.define("dd-utilities", DdUtilities);

// version
class DtVersion extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    version <da-string/>
    `
  }
}
customElements.define("dt-version", DtVersion);
// +
class DdVersion extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    A serial number of the <resource-name></resource-name> particular form differing in certain respects from an earlier form of it.
    `
  }
}
customElements.define("dd-version", DdVersion);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Titles

// HTTP Code: 200
class THTTPCode200 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    HTTP Code: 200
    `
  }
}
customElements.define("t-http-code-200", THTTPCode200);

// Request body
class TRequestBody extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Request Body
    `
  }
}
customElements.define("t-request-body", TRequestBody);

// Request headers
class TRequestHeaders extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Request Headers
    `
  }
}
customElements.define("t-request-headers", TRequestHeaders);

// Response body
class TResponseBody extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Response Body
    `
  }
}
customElements.define("t-response-body", TResponseBody);

// Response codes
class TResponseCodes extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Response Codes
    `
  }
}
customElements.define("t-response-codes", TResponseCodes);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DAta types

// array[bigint]
class DtArrayBigint extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[bigint]</dataType>
    `
  }
}
customElements.define("da-arraybigint", DtArrayBigint);

// array[date]
class DtArrayDate extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[date]</dataType>
    `
  }
}
customElements.define("da-arraydate", DtArrayDate);

// array[number]
class DtArrayNumber extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[number]</dataType>
    `
  }
}
customElements.define("da-arraynumber", DtArrayNumber);

// array[object]
class DtArrayObject extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[object]</dataType>
    `
  }
}
customElements.define("da-arrayobject", DtArrayObject);

// array[string]
class DtArrayString extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>array[string]</dataType>
    `
  }
}
customElements.define("da-arraystring", DtArrayString);

// bigint
class DtBigint extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>bigint</dataType>
    `
  }
}
customElements.define("da-bigint", DtBigint);

// boolean
class DtBoolean extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>boolean</dataType>
    `
  }
}
customElements.define("da-boolean", DtBoolean);

// date
class DtDate extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>date</dataType>
    `
  }
}
customElements.define("da-date", DtDate);

// number
class DtNumber extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>number</dataType>
    `
  }
}
customElements.define("da-number", DtNumber);

// object
class DtObject extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>object</dataType>
    `
  }
}
customElements.define("da-object", DtObject);

// string
class DtString extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <dataType>string</dataType>
    `
  }
}
customElements.define("da-string", DtString);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Response Codes

// Column rules

const colgroup = document.getElementById("rc-colgroup");
if (colgroup != null) {
  colgroup.children[0].style.width = "20%";
  colgroup.children[1].style.width = "80%";
}

// 200
class Sc200 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc2616#section-10.2.1" target="_blank">The request has succeeded.</a>
    `
  }
}
customElements.define("sc-200", Sc200);

// 404
class Sc404 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc2616#section-10.4.5" target="_blank">The server cannot find the requested resource.</a>
    `
  }
}
customElements.define("sc-404", Sc404);

// 500
class Sc500 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="https://www.rfc-editor.org/rfc/rfc2616#section-10.5.1" target="_blank">Internal server error.</a>
    `
  }
}
customElements.define("sc-500", Sc500);

// Code
class ScCode extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Code
    `
  }
}
customElements.define("sc-code", ScCode);

// Description
class ScDescription extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Description
    `
  }
}
customElements.define("sc-desc", ScDescription);

console.log("api-ref.js is completed")
