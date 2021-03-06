var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SingleDocument = (function (_super) {
    __extends(SingleDocument, _super);
    function SingleDocument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SingleDocument.prototype.documentproperty = function (type, documentid, value) {
        var response;
        $.getJSON('http://localhost/api/' + documentid + '/' + type, function (serversent) {
            if (type == "property") {
                response = serversent.property[value];
            }
            else {
                response = serversent[value];
            }
        });
        return response;
    };
    SingleDocument.prototype.render = function () {
        return (React.createElement("div", { class: "col-md-6 col-xs-12 list-group-item" },
            React.createElement("div", { class: "container" },
                React.createElement("div", { class: "row" },
                    React.createElement("div", { class: "col-xs-2" },
                        React.createElement("h1", null,
                            " ",
                            this.documentproperty("key", this.props.documentid, "callnumber"),
                            " ")),
                    React.createElement("div", { class: "col-xs-10" },
                        React.createElement("h1", null,
                            " ",
                            this.documentproperty("property", this.props.documentid, "title"),
                            " "))))));
    };
    return SingleDocument;
}(React.Component()));
ReactDOM.render(React.createElement(SingleDocument, null), document.querySelector("#documentplace"));
