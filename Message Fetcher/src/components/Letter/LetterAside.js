import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function LetterAside({ date }) {
  const published = new Date(date);

  const [hours, minutes] = [
    published.getHours().toString().padStart(2, "0"),
    published.getMinutes().toString().padStart(2, "0")
  ];
  const time = hours.concat(":", minutes);

  return (
    <>
      <FontAwesomeIcon className="mb-2 text-4xl text-cyan-500 bg-sky-100 rounded-full" icon={faUserCircle} />

      <p className="text-sm leading-none text-gray-500">
        <time dateTime={published.toISOString()}>
          {time}
        </time>
      </p>
    </>
  );
}