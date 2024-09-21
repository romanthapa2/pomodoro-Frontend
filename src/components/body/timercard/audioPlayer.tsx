
const AudioPlayer = ({ audioRef }: { audioRef: React.RefObject<HTMLAudioElement> }) => {
    return (
      <audio ref={audioRef} preload="auto">
        <source src="/ringtone-kitchen-phone-take-1-25488.mp3" type="audio/mpeg" />
      </audio>
    );
  };
  
  export default AudioPlayer;
  