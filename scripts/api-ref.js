// Terms

// id
class DtId extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    id
    `
  }
}
customElements.define("dt-id", DtId);
// +
class DdId extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The unique identifier of the resource you want to retrieve information about.
    `
  }
}
customElements.define("dd-id", DdId);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Titles

// Request headers
class TRequestHeaders extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Request headers
    `
  }
}
customElements.define("t-request-h", TRequestHeaders);

// Response body
class TResponse extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Response body
    `
  }
}
customElements.define("t-response", TResponse);

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

// Status codes

// 200
class Sc200 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The request succeeded.
    `
  }
}
customElements.define("sc-200", Sc200);

// 404
class Sc404 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    The server cannot find the requested resource.
    `
  }
}
customElements.define("sc-404", Sc404);

// 500
class Sc500 extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    Internal server error.
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