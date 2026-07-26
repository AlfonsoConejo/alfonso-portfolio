export default function SectionDescription({ children }) {
  return (
    <p
      className={`
        mt-4
        mx-auto
        text-center
        text-lg
        md:text-xl
        lg:text-2xl
      text-gray-400
        max-w-2xl
      `}
    >
      {children}
    </p>
  );
}