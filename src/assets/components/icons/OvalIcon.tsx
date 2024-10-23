type iconProps = {
  fillColor: string;
  stroke?: string;
  hoverState: string;
}

export default function OvalIcon({
  fillColor,
  stroke,
  hoverState,
}: iconProps) {
  return (
    <>
      <svg width="25" height="24" viewBox="0 0 25 24" fill={fillColor} xmlns="http://www.w3.org/2000/svg" className={hoverState}>
        <circle id="Oval Copy" cx="12" cy="12" r="12" fill={fillColor} stroke={stroke} />
      </svg>
    </>
  )
}
