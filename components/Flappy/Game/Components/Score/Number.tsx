import number_0 from "assets/flappy/numbers/0.png";
import number_1 from "assets/flappy/numbers/1.png";
import number_2 from "assets/flappy/numbers/2.png";
import number_3 from "assets/flappy/numbers/3.png";
import number_4 from "assets/flappy/numbers/4.png";
import number_5 from "assets/flappy/numbers/5.png";
import number_6 from "assets/flappy/numbers/6.png";
import number_7 from "assets/flappy/numbers/7.png";
import number_8 from "assets/flappy/numbers/8.png";
import number_9 from "assets/flappy/numbers/9.png";

import Image from "next/image";

interface SingleDigitProps {
  value: string;
}

function getImage(value: string) {
  switch (value) {
    case "0": {
      return number_0;
    }
    case "1": {
      return number_1;
    }
    case "2": {
      return number_2;
    }
    case "3": {
      return number_3;
    }
    case "4": {
      return number_4;
    }
    case "5": {
      return number_5;
    }
    case "6": {
      return number_6;
    }
    case "7": {
      return number_7;
    }
    case "8": {
      return number_8;
    }
    case "9": {
      return number_9;
    }
    default: {
      return number_0;
    }
  }
}

function SingleDigit({ value }: SingleDigitProps) {
  return <Image src={getImage(value)} height={80} alt={value} />;
}

interface NumberProps {
  value: number;
  className: string;
}

export default function Number({ value, className }: NumberProps) {
  const digits = value.toFixed(0).toString().split("");

  return (
    <div className={className}>
      {digits.map((n, index) => (
        <SingleDigit value={n} key={`${n}${index}`} />
      ))}
    </div>
  );
}
