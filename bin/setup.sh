#!/bin/bash

fluidsynth --audio-driver=alsa -o audio.alsa.device=hw:1 /usr/share/sounds/sf2/FluidR3_GM.sf2
# fluidsynth --audio-driver=alsa --gain 3 /usr/share/sounds/sf2/FluidR3_GM.sf2

