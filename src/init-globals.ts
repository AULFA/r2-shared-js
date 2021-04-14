// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import {
    BufferConverter as JsonBufferConverter, propertyConverters as jsonConverters,
} from "ta-json-x";

import { JsonDateConverter } from "@r2-utils-rn/_utils/ta-json-date-converter";
import { JsonNumberConverter } from "@r2-utils-rn/_utils/ta-json-number-converter";
import {
    BufferConverter as XmlBufferConverter, DateConverter as XmlDateConverter,
    NumberConverter as XmlNumberConverter, propertyConverters as xmlConverters,
} from "@r2-utils-rn/_utils/xml-js-mapper";

// import { Contributor } from "@models/metadata-contributor";
// import { JsonContributorConverter } from "@models/metadata-contributor-json-converter";

export function initGlobalConverters_SHARED() {
    // jsonConverters.set(Contributor, new JsonContributorConverter());
}

export function initGlobalConverters_GENERIC() {
    jsonConverters.set(Buffer, new JsonBufferConverter());
    jsonConverters.set(Date, new JsonDateConverter());
    jsonConverters.set(Number, new JsonNumberConverter());

    xmlConverters.set(Buffer, new XmlBufferConverter());
    xmlConverters.set(Date, new XmlDateConverter());
    xmlConverters.set(Number, new XmlNumberConverter());
}
