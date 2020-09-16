var services = { authors: {} };

services.endPointRoot = "http://sabioapi2.azurewebsites.net/";
services.authors.endPoint = services.endPointRoot + "api/authors";

services.authors.getAll = (onSuccess, onError) => {
  const settings = {
    type: "GET",
    headers: {
      "sabio-auth": "SA-1391-AAA"
    },
    contentType: "application/json; charset=utf-8",
    success: onSuccess,
    error: onError
  };
  $.ajax(services.authors.endPoint, settings);
};

services.authors.add = (data, onSuccess, onError) => {
  const settings = {
    data: JSON.stringify(data),

    type: "POST", //POST, PUT, DELETE
    headers: {
      "sabio-auth": "SA-1391-AAA"
    },
    contentType: "application/json; charset=utf-8",
    success: onSuccess,
    error: onError
  };
  $.ajax(services.authors.endPoint, settings);
};

services.authors.getAllV2 = () => {
  const settings = {
    type: "GET", //POST, PUT, DELETE
    headers: {
      "sabio-auth": "SA-1391-AAA"
    },
    contentType: "application/json; charset=utf-8"
  };
  return $.ajax(services.authors.endPoint, settings);
};

services.authors.addV2 = data => {
  const settings = {
    data: JSON.stringify(data),

    type: "POST", //POST, PUT, DELETE
    headers: {
      "sabio-auth": "SA-1391-AAA"
    },
    contentType: "application/json; charset=utf-8"
  };
  return $.ajax(services.authors.endPoint, settings);
};
