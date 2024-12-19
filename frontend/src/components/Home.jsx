import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import '../styles/styles.css';


const Home = () => {
    const [audioFiles, setAudioFiles] = useState([]);
    const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null); // Track currently playing audio
    const [currentTime, setCurrentTime] = useState(0); // Track playback time
    const [duration, setDuration] = useState(0); // Track total duration
    const audioRefs = useRef({}); // Store audio element references

    // Fetch audio files from the API
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/audio-files/")
            .then((response) => {
                setAudioFiles(response.data);
            })
            .catch((error) => {
                console.error("Error fetching audio files:", error);
            });
    }, []);

    // Function to toggle audio playback
    const toggleAudio = (fileUrl, index) => {
        const audioElement = audioRefs.current[index];

        if (audioElement) {
            if (currentPlayingIndex === index) {
                // If this audio is playing, pause it
                audioElement.pause();
                setCurrentPlayingIndex(null);
                setCurrentTime(0);
                setDuration(0);
            } else {
                // Stop other audios first
                Object.values(audioRefs.current).forEach((audio) => audio.pause());

                // Play the clicked audio
                audioElement.src = fileUrl;
                audioElement.play();
                setCurrentPlayingIndex(index);

                // Update playback time and duration
                audioElement.addEventListener("timeupdate", () => {
                    setCurrentTime(audioElement.currentTime);
                    setDuration(audioElement.duration);
                });
            }
        }
    };

    return (
        
        <div className='container'>
            <h1 className="h1">Musics direct Click</h1>
            {audioFiles.map((audio, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: "white",
                        margin: "10px",
                        marginBottom: "30px",
                        boxShadow:
                            currentPlayingIndex === index
                                ? "0px 0px 15px 5px rgba(0, 0, 0, 0.5)"
                                : "none", // Add shadow to the playing image
                        display: "inline-block",
                        borderRadius: "10px",
                        overflow: "hidden",
                        transition: "box-shadow 1s",
                    }}
                >
                    <h2 className="h2">{audio.title}</h2>
                    <p>{audio.description}</p>
                    {/* Clickable Image */}
                    <img
                        src={audio.image_url || "default_image.png"} // Use default image if not uploaded
                        alt={audio.title}
                        style={{
                            margin: "10px",
                            cursor: "pointer",
                            width: "200px",
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                        onClick={() => toggleAudio(audio.file_url, index)}
                    />
                    {/* Playback Time */}
                    {currentPlayingIndex === index && (
                        <div style={{ marginTop: "10px", fontSize: "16px" }}>
                            {`${formatTime(currentTime)} / ${formatTime(duration)}`}
                        </div>
                    )}
                    {/* Hidden Audio Element */}
                    <audio ref={(el) => (audioRefs.current[index] = el)} style={{ display: "none" }} />
                </div>
            ))}
        </div>
    );
};

// Helper function to format time (e.g., 0:35)
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
};

export default Home;