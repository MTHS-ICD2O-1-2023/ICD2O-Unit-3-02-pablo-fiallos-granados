// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"


function enterClicked() {
  // input
  const l = parseFloat(document.getElementById("lValue").value)
  const w = parseFloat(document.getElementById("wValue").value)
  const h = parseFloat(document.getElementById("hValue").value)
  const volume = (l * w * h) / 3
  const volumeRounded = volume.toFixed(2)
  // output
  document.getElementById("user-info").innerHTML =
    "A = " + volumeRounded + "u <sup>3</sup>"
}