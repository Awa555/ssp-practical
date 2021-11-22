const   http = require('http'), //This module provides the HTTP sevver functionalities
        path = require('path'), //The path module provides utilities for working with file and directory paths
        express = requite('express'), // This module allows this app to respond to HTTP requests, defines the routing and renders back the required
        fs = require ('fs'), //This module allows to work with the file system: read and write files back
        xmlParse = require('xslt-processor').xmlParse, //This module allows to work with XML files
        xsltProcess = require('xslt-processor').xsltProcess, //The same module allows us to uitlise XSL Transformations
        xml2js = require('xml2js') //This module does XML <-> JSON conversion