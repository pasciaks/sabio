function something() {
    return new Promise(function (resolve, reject) {
        fabric.loadSVGFromString(svgXml, function (objects, options) {
            // If there's something wrong with the SVG, Fabric may return an empty array of objects. Graphviz appears to give us at least one <g> element back even given an empty graph, so we will assume an error in this case.
            if (objects.length == 0) {
                reject(new Error("Error loading SVG with Fabric"));
            }

            var element = document.createElement("canvas");
            element.width = options.width;
            element.height = options.height;

            var canvas = new fabric.Canvas(element, { enableRetinaScaling: false });
            var obj = fabric.util.groupSVGElements(objects, options);
            canvas.add(obj).renderAll();

            var image = new Image();
            image.src = canvas.toDataURL({
                format: format,
                multiplier: multiplier,
                quality: quality
            });
            image.width = options.width;
            image.height = options.height;

            resolve(image);
        });
    });
}