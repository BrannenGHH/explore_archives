#!/usr/bin/env node
"use strict";

import * as mongoose from "mongoose";
import * as start from "./start";

export class DocumentHandler {
  public property: JSON;
  public key : JSON;
  public documentid : number;

  constructor(documentid:number,property:JSON,key:JSON){
    var documentid = documentid;
    var property = property;
    var key = key;
  }

  public documentkey(){
    return this.key;
  }
  public documentproperty(){
    return this.property;
  }
  //add code to edit objects
}
