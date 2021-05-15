(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: , msg: 'Not ready'};
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
        ['block type','block content','block function name']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extensionK', descriptor, ext);
})({});
