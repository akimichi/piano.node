#!/bin/sh

## /etc/supervisor/conf.d/piano.conf
# [program:piano]
# command=/home/emile/projects/piano.node/bin/autostart.sh
# directory=/home/emile/projects/piano.node
# stdout_logfile_maxbytes=1MB
# stderr_logfile_maxbytes=1MB
# stdout_logfile_backups=5
# stderr_logfile_backups=5
# stdout_logfile=/home/emile/projects/piano.node/log/%(program_name)s.log
# stderr_logfile=/home/emile/projects/piano.node/log/%(program_name)s_error.log
# autorestart=false
# autostart=true
# user=emile

# Run fluidsynth, but this time as a non-interactive server
fluidsynth --audio-driver=alsa -o audio.alsa.device=hw:2 /usr/share/sounds/sf2/FluidR3_GM.sf2
# fluidsynth -is --audio-driver=alsa --gain 3 /usr/share/sounds/sf2/FluidR3_GM.sf2 &

# give it time to boot up
sleep 10

# connect the controller to fluidsynth
# Don't forget to replace these with the client numbers!
aconnect 16:0 128:0

# Give fluidsynth a nice high priority so it gets as much CPU as possible!
# sudo renice -n -18 -u synth

# give it time
sleep 3

# npm start

