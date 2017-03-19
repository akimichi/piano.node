#!/bin/sh

# Run fluidsynth, but this time as a non-interactive server
fluidsynth --audio-driver=alsa -o audio.alsa.device=hw:2 /usr/share/sounds/sf2/FluidR3_GM.sf2
# fluidsynth -is --audio-driver=alsa --gain 3 /usr/share/sounds/sf2/FluidR3_GM.sf2 &

# give it time to boot up
sleep 10

# connect the controller to fluidsynth
# Don't forget to replace these with the client numbers!
aconnect 16:0 128:0

# Give fluidsynth a nice high priority so it gets as much CPU as possible!
sudo renice -n -18 -u synth

# give it time
sleep 3

# npm start

