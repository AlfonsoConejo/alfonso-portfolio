export default function SectionTitle({ children }) {
  return (
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-400 text-center">
      {children}
    </h2>
  );
}