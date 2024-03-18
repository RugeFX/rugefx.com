import { useMouse } from "@uidotdev/usehooks";

export default function BackgroundShine() {
  const [mouse, ref] = useMouse<HTMLDivElement>();

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[-1] flex size-[150px] items-center justify-center rounded-full blur-[120px] transition-all duration-500 ease-out md:size-[300px] md:blur-[200px]"
        style={{
          background: "linear-gradient(hsl(var(--primary)) 60%, rgb(7 56 202))",
          translate: `calc(${mouse.elementX}px - 50%) calc(${mouse.elementY}px - 50%) 0`,
        }}
      />
      <div className="fixed left-0 top-0 hidden h-full w-full" ref={ref} />
    </>
  );
}
