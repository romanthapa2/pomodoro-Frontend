
const AudioPlayer = ({ audioRef }: { audioRef: React.RefObject<HTMLAudioElement> }) => {
    const audio={
        "Kitchen":"/ringtone-kitchen-phone-take-1-25488.mp3",
        "Telephone":"/telephone-ringtone-45993.mp3",
    };

    
    const sound= localStorage.getItem("sound");
    const audioSource =  audio[sound as keyof typeof audio]  || audio["Telephone"];
    return (
      <audio ref={audioRef} preload="auto">
        <source src={audioSource} type="audio/mpeg" />
        {/* <source src="/ringtone-kitchen-phone-take-1-25488.mp3" type="audio/mpeg" /> */}
      </audio>
    );
  };
  
  export default AudioPlayer;
  