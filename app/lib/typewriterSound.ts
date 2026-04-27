// Simple typewriter sound effect using HTML5 Audio API
export function playTypewriterSound() {
  if (typeof window === 'undefined') return;
  let audio = document.getElementById('typewriter-audio') as HTMLAudioElement | null;
  if (!audio) {
    audio = document.createElement('audio');
    audio.id = 'typewriter-audio';
    audio.src = '/music/typewriter.mp3';
    audio.preload = 'auto';
    document.body.appendChild(audio);
  }
  audio.currentTime = 0;
  audio.play();
}
