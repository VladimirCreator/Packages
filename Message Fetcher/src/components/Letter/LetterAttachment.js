export default function LetterAttachment({ attachments }) {
  const className = "max-h-28 sm:max-h-56 [&:not(:last-child)]:mb-2.5 rounded snap-center";

  const assets = attachments.map(
    (attachment, index) => {
      switch (attachment.type) {
      case "video":
        return (
          <video
            key={index}
            src={attachment.url}
            className={className}
            alt=""
          />
        );
      default:
        return (
          <img
            key={index}
            src={attachment.url}
            className={className}
            alt=""
          />
        );
      }
    }
  );

  return (
    <section className="flex space-x-8 -ml-14 -mr-2.5 mb-2 px-14 overflow-x-auto snap-x">
      {assets}
    </section>
  );
}