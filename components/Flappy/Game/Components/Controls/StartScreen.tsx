import Image from "next/image";
import startImage from "assets/flappy/message.png";

export default function StartScreen() {
  return (
    <Image
      src={startImage}
      alt={"Start Game"}
      height={400}
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        position: "absolute"
      }}
    />
  );
}
