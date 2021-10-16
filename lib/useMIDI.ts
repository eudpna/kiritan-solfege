import { useEffect } from "react";
export default function useMIDI(noteOn: (note: number, velocity: number) => void, noteOff: (note: number) => void) {
    useEffect(() => {
        if (typeof navigator.requestMIDIAccess === 'undefined') return
        
        const getMIDIMessage = (message: WebMidi.MIDIMessageEvent) => {
            var command = message.data[0];
            var note = message.data[1];
            var velocity = (message.data.length > 2) ? message.data[2] : 0; // a velocity value might not be included with a noteOff command

            switch (command) {
                case 144: // noteOn
                    if (velocity > 0) {
                        noteOn(note, velocity);
                    } else {
                        noteOff(note);
                    }
                    break;
                case 128: // noteOff
                    noteOff(note);
                    break;
                // we could easily expand this switch statement to cover other types of commands such as controllers or sysex
            }
        }


        const onMIDISuccess = (midiAccess: WebMidi.MIDIAccess) => {
            for (let input of Array.from(midiAccess.inputs.values())) {
                input.onmidimessage = getMIDIMessage;
            }
        }

        const onMIDIFailure = (msg: string) => {
            console.log("onMIDIFailure:", msg);
        }


        navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
    }, []);
}




