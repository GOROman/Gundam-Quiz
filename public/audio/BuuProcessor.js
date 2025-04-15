class BuuProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.frame = 0;
    this._sampleRate = typeof sampleRate !== "undefined" ? sampleRate : 48000;
  }
  process(inputs, outputs, parameters) {
    const output = outputs[0];
    const sampleRate = this._sampleRate;
    for (let channel = 0; channel < output.length; ++channel) {
      const outputChannel = output[channel];
      for (let i = 0; i < outputChannel.length; ++i) {
        const t = (this.frame + i) / sampleRate;
        outputChannel[i] = (Math.sin(2 * Math.PI * 110 * t) > 0 ? 0.3 : -0.3);
        outputChannel[i] *= Math.max(0, 1 - (this.frame + i) / (sampleRate * 0.7));
      }
    }
    this.frame += output[0].length;
    return this.frame < sampleRate * 0.7;
  }
}
registerProcessor('buu-processor', BuuProcessor);
