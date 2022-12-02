export const BoxedArrowSVG = ({ width = 15, height = 15 }) => {
  return (
    <svg
      className="mt-1 mr-1 cursor-pointer"
      fill="#3bba9c"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={`${width}px`}
      height={`${height}px`}
    >
      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
    </svg>
  );
};