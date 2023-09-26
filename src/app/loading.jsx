export default function loading() {
  return (
    <div className="flex items-center content-center h-[60vh] relative">
      <img
        src="spinner.svg"
        alt="spinner"
        className="absolute top-1/2 left-1/2 translate-[-50%] "
      />
    </div>
  );
}
