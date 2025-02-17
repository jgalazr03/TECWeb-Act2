import ImageWithText from "@/components/ImageWithText";

export default function Pag1() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-12 p-8 sm:p-20">
      <ImageWithText
        src="/docs.png"
        alt="Google Docs Logo"
        text="Descripción de la primera imagen. Descripción de la primera imagen. Descripción de la primera imagen. Descripción de la primera imagen. Descripción de la primera imagen. Descripción de la primera imagen."
      />
      <ImageWithText
        src="/slides.png"
        alt="Google Slides Logo"
        text="Descripción de la segunda imagen. Descripción de la segunda imagen. Descripción de la segunda imagen. Descripción de la segunda imagen. Descripción de la segunda imagen. Descripción de la segunda imagen."
        reverse
      />
      <ImageWithText
        src="/sheets.png"
        alt="Google Sheets Logo"
        text="Descripción de la tercera imagen. Descripción de la tercera imagen. Descripción de la tercera imagen. Descripción de la tercera imagen. Descripción de la tercera imagen. Descripción de la tercera imagen."
      />
    </div>
  );
}
