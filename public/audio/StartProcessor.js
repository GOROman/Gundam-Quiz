class StartProcessor extends AudioWorkletProcessor {
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
        // 1568Hz + 2093Hzの短いチャイム
        outputChannel[i] =
          0.25 * Math.sin(2 * Math.PI * 1568 * t) +
          0.15 * Math.sin(2 * Math.PI * 2093 * t);
        outputChannel[i] *= Math.max(0, 1 - (this.frame + i) / (sampleRate * 0.18));
      }
    }
    this.frame += output[0].length;
    return this.frame < sampleRate * 0.18;
  }
}
registerProcessor('start-processor', StartProcessor);
