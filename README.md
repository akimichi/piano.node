piano.node
===============

MIDI keyboard player

## 準備

~~~
$ sudo apt-get install libasound2-dev
$ nvm use
$ npm install
~~~

~~~
sudo apt-get install fluidsynth
sudo apt-get install fluid-soundfont-gm
sudo apt-get install fluid-soundfont-gs
fluidsynth --audio-driver=alsa --gain 3 /usr/share/sounds/sf2/FluidR3_GM.sf2
fluidsynth --server --audio-driver=alsa -o audio.alsa.device=hw:1 --sample-rate=48000 --gain=0.1 --audio-bufsize=256 --audio-bufcount=32 /usr/share/sounds/sf2/FluidR3_GM.sf2
fluidsynth -i -s -a alsa -o audio.alsa.device=hw:1,0 -m alsa_seq /usr/share/sounds/sf2/FluidR3_GM.sf2 -g 1
~~~


~~~
emile@chopin:~/projects/piano.node$ aconnect -i
クライアント 0: 'System' [タイプ=カーネル]
    0 'Timer           '
    1 'Announce        '
クライアント 14: 'Midi Through' [タイプ=カーネル]
    0 'Midi Through Port-0'
クライアント 16: 'nanoKEY2' [タイプ=カーネル]
    0 'nanoKEY2 MIDI 1 '

emile@chopin:~/projects/piano.node$ aconnect -o
クライアント 14: 'Midi Through' [タイプ=カーネル]
    0 'Midi Through Port-0'
クライアント 16: 'nanoKEY2' [タイプ=カーネル]
    0 'nanoKEY2 MIDI 1 '
クライアント 128: 'FLUID Synth (1881)' [タイプ=ユーザ]
    0 'Synth input port (1881:0)'
~~~

~~~
aconnect 16:0 128:0
~~~


## test

~~~
npm install mocha -g
npm test
~~~


## start

~~~
npm start
~~~

# API

## POST /api/channel/voice/program/change

Program Change

